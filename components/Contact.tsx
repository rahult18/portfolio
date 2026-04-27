"use client";

import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./icons";
import AnimatedSection from "./AnimatedSection";
import { personalInfo } from "@/lib/data";

const links = [
  {
    label: "Email",
    value: "rahul.talatala@gmail.com",
    href: `mailto:${personalInfo.email}`,
    Icon: Mail,
    external: false,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/rahul-reddy-t",
    href: personalInfo.linkedin,
    Icon: LinkedInIcon,
    external: true,
  },
  {
    label: "GitHub",
    value: "github.com/rahult18",
    href: personalInfo.github,
    Icon: GitHubIcon,
    external: true,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <span className="text-xs font-semibold uppercase tracking-widest text-accent mb-4 block">
            Contact
          </span>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <AnimatedSection delay={0.1}>
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight leading-[1.1] mb-6">
                Let&apos;s work<br />
                <span className="gradient-text">together.</span>
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <p className="text-muted text-base leading-relaxed max-w-md">
                I&apos;m open to full-time roles and interesting collaborations. If you&apos;re building something ambitious in the AI space, I want to hear about it.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.3}>
              <p className="text-sm text-muted mt-4">
                Or just chat with my AI. It knows everything about me.
              </p>
            </AnimatedSection>
          </div>

          <div>
            <AnimatedSection direction="left" delay={0.1}>
              <div className="space-y-3">
                {links.map((link, i) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noreferrer" : undefined}
                    initial={{ opacity: 0, x: 12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 + 0.1, duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
                    whileHover={{ x: 4, transition: { duration: 0.2 } }}
                    className="flex items-center gap-4 p-5 rounded-2xl border border-border hover:border-accent hover:bg-accent-light group transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-xl bg-card flex items-center justify-center text-muted group-hover:bg-accent group-hover:text-white transition-all duration-300">
                      <link.Icon size={18} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-muted mb-0.5">{link.label}</p>
                      <p className="text-sm font-medium text-foreground group-hover:text-accent transition-colors duration-200 truncate">
                        {link.value}
                      </p>
                    </div>
                    <ArrowUpRight
                      size={16}
                      className="text-muted group-hover:text-accent flex-shrink-0 transition-colors duration-200"
                    />
                  </motion.a>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Footer */}
        <AnimatedSection delay={0.4}>
          <div className="mt-20 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted">
              © {new Date().getFullYear()} Rahul Reddy Talatala.
            </p>
            <p className="text-xs text-muted">
              Tampa, FL · Open to relocation
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
