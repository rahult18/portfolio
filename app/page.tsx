import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Products from "@/components/Products";
import FeaturedProjects from "@/components/FeaturedProjects";
import Blogs from "@/components/Blogs";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import ChatWidget from "@/components/ChatWidget";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Products />
      <FeaturedProjects />
      <Blogs />
      <Skills />
      <Education />
      <Contact />
      <ChatWidget />
    </main>
  );
}
