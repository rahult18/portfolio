"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Mail, Download, MessageCircle } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./icons";
import { personalInfo } from "@/lib/data";

function WordReveal({ text, delay = 0 }: { text: string; delay?: number }) {
  const words = text.split(" ");
  return (
    <span className="inline">
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.25em]">
          <motion.span
            className="inline-block"
            initial={{ y: "110%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.7,
              delay: delay + i * 0.06,
              ease: [0.21, 0.47, 0.32, 0.98],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

function CountUp({ target, prefix = "", suffix = "", decimals = 0 }: {
  target: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          const duration = 1800;
          const start = Date.now();
          const tick = () => {
            const elapsed = Date.now() - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(parseFloat((eased * target).toFixed(decimals)));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, started, decimals]);

  return (
    <span ref={ref}>
      {prefix}{count.toFixed(decimals)}{suffix}
    </span>
  );
}

function Blob2({ springX, springY }: { springX: ReturnType<typeof useSpring>; springY: ReturnType<typeof useSpring> }) {
  const x = useTransform(springX, (v) => v * -0.015);
  const y = useTransform(springY, (v) => v * -0.015);
  return (
    <motion.div
      className="absolute bottom-1/4 -right-16 sm:-right-32 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] rounded-full pointer-events-none"
      style={{
        x,
        y,
        opacity: 0.05,
        background: "radial-gradient(circle, #60a5fa 0%, transparent 70%)",
      }}
    />
  );
}

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 20 });
  const blobX = useTransform(springX, (v) => v * 0.02);
  const blobY = useTransform(springY, (v) => v * 0.02);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [mouseX, mouseY]);

  const handleScroll = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden" style={{ contain: "paint" }}>
      {/* Background orbs */}
      <motion.div
        className="absolute top-1/4 -left-20 sm:-left-32 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full pointer-events-none"
        style={{
          x: blobX,
          y: blobY,
          opacity: 0.06,
          background: "radial-gradient(circle, #2563eb 0%, transparent 70%)",
        }}
      />
      <Blob2 springX={springX} springY={springY} />

      <div className="max-w-6xl mx-auto px-5 sm:px-6 pt-24 sm:pt-28 pb-12 sm:pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* Photo + stats — shown above text on mobile, right column on desktop */}
          <div className="flex flex-col items-center gap-6 order-first lg:order-last">
            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.88, filter: "blur(12px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.9, delay: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="relative"
            >
              <div className="relative w-44 h-44 sm:w-60 sm:h-60 lg:w-80 lg:h-80">
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-blue-200 animate-[spin_20s_linear_infinite]" />
                <div className="absolute inset-4 rounded-full bg-gradient-to-br from-blue-100 to-blue-100 blur-lg opacity-60" />
                <img
                  src="/rahul.jpg"
                  alt="Rahul Reddy Talatala"
                  className="absolute inset-3 sm:inset-4 w-[calc(100%-1.5rem)] sm:w-[calc(100%-2rem)] h-[calc(100%-1.5rem)] sm:h-[calc(100%-2rem)] object-cover rounded-full border-4 border-white shadow-xl"
                />
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="grid grid-cols-3 gap-2 sm:gap-4 w-full max-w-sm lg:max-w-none"
            >
              {[
                { value: 60, suffix: "%", label: "Triage\nautomated" },
                { value: 2.46, prefix: "$", suffix: "M", label: "Cost\navoidance", decimals: 2 },
                { value: 35, suffix: "%", label: "Debug time\nreduced" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center text-center p-3 sm:p-4 rounded-2xl bg-card border border-border"
                >
                  <span className="text-lg sm:text-2xl font-bold text-foreground tabular-nums">
                    <CountUp
                      target={stat.value}
                      prefix={stat.prefix ?? ""}
                      suffix={stat.suffix}
                      decimals={stat.decimals ?? 0}
                    />
                  </span>
                  <span className="text-[10px] sm:text-xs text-muted mt-1 whitespace-pre-line leading-tight">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Text content */}
          <div className="order-last lg:order-first">
            {/* Name */}
            <div className="overflow-hidden mb-3">
              <motion.h2
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.65, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="text-base sm:text-lg text-muted font-medium"
              >
                Rahul Reddy Talatala
              </motion.h2>
            </div>

            {/* Tagline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-5 sm:mb-6">
              <div className="overflow-hidden pb-1">
                <WordReveal text="I automate" delay={0.3} />
              </div>
              <div className="overflow-hidden pb-1">
                <span className="inline-block overflow-hidden">
                  <motion.span
                    className="inline-block gradient-text"
                    initial={{ y: "110%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
                  >
                    the complex.
                  </motion.span>
                </span>
              </div>
              <div className="overflow-hidden pb-1 mt-1">
                <WordReveal text="I make AI" delay={0.65} />
              </div>
              <div className="overflow-hidden pb-1">
                <span className="inline-block overflow-hidden">
                  <motion.span
                    className="inline-block gradient-text"
                    initial={{ y: "110%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.85, ease: [0.21, 0.47, 0.32, 0.98] }}
                  >
                    work at scale.
                  </motion.span>
                </span>
              </div>
            </h1>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="text-muted text-sm sm:text-base leading-relaxed max-w-lg mb-7 sm:mb-8"
            >
              GenAI Engineer building production-grade LLM systems, multi-agent pipelines, and AI infrastructure that ships with real, measurable impact.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="flex flex-wrap items-center gap-3 mb-8 sm:mb-10"
            >
              <button
                onClick={handleScroll}
                className="px-5 sm:px-6 py-2.5 sm:py-3 bg-accent text-white text-sm font-medium rounded-xl hover:bg-blue-700 active:scale-95 transition-all duration-200 shadow-lg shadow-blue-200"
              >
                View my work
              </button>
              <button
                onClick={() => window.dispatchEvent(new Event("open-chat"))}
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 border border-border text-foreground text-sm font-medium rounded-xl hover:border-accent hover:text-accent hover:bg-accent-light active:scale-95 transition-all duration-200"
              >
                <MessageCircle size={15} />
                Chat with my AI
              </button>
              <a
                href={personalInfo.resume}
                download
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 border border-border text-foreground text-sm font-medium rounded-xl hover:border-accent hover:text-accent hover:bg-accent-light active:scale-95 transition-all duration-200"
              >
                <Download size={15} />
                Download CV
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="flex items-center gap-3 sm:gap-4"
            >
              {[
                { Icon: GitHubIcon, href: personalInfo.github, label: "GitHub" },
                { Icon: LinkedInIcon, href: personalInfo.linkedin, label: "LinkedIn" },
                { Icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  aria-label={label}
                  className="w-10 h-10 flex items-center justify-center rounded-xl border border-border text-muted hover:text-accent hover:border-accent hover:bg-accent-light transition-all duration-200"
                >
                  <Icon size={17} />
                </a>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
