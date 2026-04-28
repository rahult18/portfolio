"use client";

import { useState, useRef, useEffect, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Loader2, Bot, User } from "lucide-react";

function renderInline(text: string): ReactNode[] {
  return text.split(/(\*\*.*?\*\*)/g).map((part, i) =>
    part.startsWith("**") && part.endsWith("**")
      ? <strong key={i} className="font-semibold">{part.slice(2, -2)}</strong>
      : part
  );
}

function MessageContent({ text }: { text: string }) {
  const lines = text.split("\n");
  const nodes: ReactNode[] = [];
  let listItems: ReactNode[] = [];

  const flushList = () => {
    if (listItems.length) {
      nodes.push(<ul key={`ul-${nodes.length}`} className="mt-1 mb-1 space-y-0.5 pl-3">{listItems}</ul>);
      listItems = [];
    }
  };

  lines.forEach((line, i) => {
    const isBullet = /^[*•\-]\s/.test(line);
    if (isBullet) {
      listItems.push(
        <li key={i} className="flex gap-1.5 items-start">
          <span className="mt-1.5 w-1 h-1 rounded-full bg-current flex-shrink-0 opacity-60" />
          <span>{renderInline(line.replace(/^[*•\-]\s/, ""))}</span>
        </li>
      );
    } else {
      flushList();
      if (line.trim()) {
        nodes.push(<p key={i} className={nodes.length > 0 ? "mt-2" : ""}>{renderInline(line)}</p>);
      }
    }
  });

  flushList();
  return <>{nodes}</>;
}

interface Message {
  role: "user" | "assistant";
  content: string;
}

const SUGGESTIONS = [
  "What are you currently working on?",
  "What kind of role are you looking for?",
  "Tell me about your AI experience",
  "Are you open to relocation?",
];

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hey! I'm Rahul's AI. Ask me anything: my experience, what I'm building, what I'm looking for. I don't bite. 👋",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 300);
  }, [open]);

  // Listen for open-chat event dispatched by hero button
  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener("open-chat", handler);
    return () => window.removeEventListener("open-chat", handler);
  }, []);

  const send = async (text: string) => {
    if (!text.trim() || loading) return;
    const userMsg: Message = { role: "user", content: text.trim() };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...messages, userMsg] }),
      });
      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.reply ?? "Something went wrong. Try again?" },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Hmm, something broke on my end. Give it another shot?" },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    send(input);
  };

  return (
    <>
      {/* Floating button */}
      <motion.button
        onClick={() => setOpen(true)}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.8, type: "spring", stiffness: 300, damping: 20 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-14 h-14 rounded-full bg-accent text-white shadow-lg shadow-blue-300 flex items-center justify-center transition-all duration-300 ${
          open ? "opacity-0 pointer-events-none scale-75" : "opacity-100"
        }`}
        aria-label="Open chat"
      >
        <MessageCircle size={22} />
        <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-green-400 rounded-full border-2 border-white animate-pulse" />
      </motion.button>

      {/* Chat window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 40, originX: 1, originY: 1 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 40 }}
            transition={{ type: "spring", stiffness: 280, damping: 26 }}
            className="fixed bottom-4 right-3 sm:bottom-6 sm:right-6 z-50 w-[min(380px,calc(100vw-16px))] bg-white rounded-2xl shadow-2xl shadow-black/10 border border-border flex flex-col overflow-hidden"
            style={{ maxHeight: "min(560px, calc(100dvh - 80px))" }}
          >
            {/* Header */}
            <div className="flex items-center gap-3 px-4 py-3.5 bg-accent text-white">
              <div className="relative">
                <img
                  src="/rahul.jpg"
                  alt="Rahul"
                  className="w-9 h-9 rounded-full object-cover border-2 border-white/30"
                />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-400 rounded-full border-2 border-accent" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold leading-none">Rahul's AI</p>
                <p className="text-xs text-blue-200 mt-0.5">Usually responds instantly</p>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-white/20 transition-colors duration-200"
                aria-label="Close chat"
              >
                <X size={15} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 chat-scroll" data-lenis-prevent>
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex gap-2.5 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
                >
                  <div
                    className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center ${
                      msg.role === "assistant"
                        ? "bg-accent-light text-accent"
                        : "bg-foreground text-white"
                    }`}
                  >
                    {msg.role === "assistant" ? <Bot size={14} /> : <User size={14} />}
                  </div>
                  <div
                    className={`max-w-[80%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed ${
                      msg.role === "assistant"
                        ? "bg-card text-foreground rounded-tl-sm"
                        : "bg-accent text-white rounded-tr-sm"
                    }`}
                  >
                    {msg.role === "assistant"
                      ? <MessageContent text={msg.content} />
                      : msg.content}
                  </div>
                </motion.div>
              ))}

              {loading && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex gap-2.5"
                >
                  <div className="flex-shrink-0 w-7 h-7 rounded-full bg-accent-light flex items-center justify-center text-accent">
                    <Bot size={14} />
                  </div>
                  <div className="bg-card px-4 py-3 rounded-2xl rounded-tl-sm flex items-center gap-1">
                    {[0, 1, 2].map((j) => (
                      <motion.span
                        key={j}
                        animate={{ y: [0, -4, 0] }}
                        transition={{ repeat: Infinity, duration: 0.7, delay: j * 0.15 }}
                        className="w-1.5 h-1.5 rounded-full bg-muted block"
                      />
                    ))}
                  </div>
                </motion.div>
              )}

              <div ref={bottomRef} />
            </div>

            {/* Suggestions (only on first message) */}
            {messages.length === 1 && (
              <div className="px-4 pb-3">
                <div className="flex flex-wrap gap-1.5">
                  {SUGGESTIONS.map((s) => (
                    <button
                      key={s}
                      onClick={() => send(s)}
                      className="text-xs px-3 py-1.5 rounded-full border border-border bg-card text-muted hover:text-accent hover:border-accent hover:bg-accent-light transition-all duration-200"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <form
              onSubmit={handleSubmit}
              className="flex items-center gap-2 px-3 py-3 border-t border-border"
            >
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me anything..."
                disabled={loading}
                className="flex-1 text-sm outline-none bg-transparent text-foreground placeholder:text-muted disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={!input.trim() || loading}
                className="w-8 h-8 flex items-center justify-center rounded-xl bg-accent text-white disabled:opacity-40 disabled:cursor-not-allowed hover:bg-blue-700 active:scale-95 transition-all duration-200"
              >
                {loading ? <Loader2 size={14} className="animate-spin" /> : <Send size={14} />}
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
