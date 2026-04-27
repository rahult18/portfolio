import { GoogleGenerativeAI } from "@google/generative-ai";
import { chatPersona } from "@/lib/data";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const model = genAI.getGenerativeModel({
      model: "gemini-3-flash-preview",
      systemInstruction: chatPersona,
    });

    const prior = messages.slice(0, -1);
    const firstUserIdx = prior.findIndex((m: { role: string }) => m.role === "user");
    const history = (firstUserIdx === -1 ? [] : prior.slice(firstUserIdx)).map(
      (m: { role: string; content: string }) => ({
        role: m.role === "user" ? "user" : "model",
        parts: [{ text: m.content }],
      })
    );

    const chat = model.startChat({ history });
    const lastMessage = messages[messages.length - 1];
    const result = await chat.sendMessage(lastMessage.content);
    const reply = result.response.text();

    return Response.json({ reply });
  } catch (err) {
    console.error("Chat API error:", err);
    return Response.json({ reply: "Something went wrong on my end. Try again?" }, { status: 500 });
  }
}
