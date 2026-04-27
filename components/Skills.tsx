"use client";

import { motion } from "framer-motion";
import AnimatedSection, { StaggerContainer, staggerItem } from "./AnimatedSection";
import { skills } from "@/lib/data";

const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
  "Agentic & ML": { bg: "#EEF2FF", text: "#4F46E5", border: "#C7D2FE" },
  "RAG & Knowledge": { bg: "#F0FDF4", text: "#16A34A", border: "#BBF7D0" },
  "MLOps & LLMOps": { bg: "#FFF7ED", text: "#EA580C", border: "#FED7AA" },
  "Data Engineering": { bg: "#F0F9FF", text: "#0284C7", border: "#BAE6FD" },
  "Cloud & DevOps": { bg: "#FDF4FF", text: "#9333EA", border: "#E9D5FF" },
  "Programming": { bg: "#FFF1F2", text: "#E11D48", border: "#FECDD3" },
};

export default function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <span className="text-xs font-semibold uppercase tracking-widest text-accent mb-4 block">
            Skills
          </span>
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            The toolkit.
          </h2>
        </AnimatedSection>
        <AnimatedSection delay={0.15}>
          <p className="text-muted text-base max-w-xl mb-14">
            Years of building at the frontier, from LLM fine-tuning to distributed data pipelines to cloud-native deployments.
          </p>
        </AnimatedSection>

        <div className="space-y-10">
          {Object.entries(skills).map(([category, tags], catIdx) => {
            const colors = categoryColors[category] ?? { bg: "#F8FAFC", text: "#475569", border: "#E2E8F0" };
            return (
              <AnimatedSection key={category} delay={catIdx * 0.08}>
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className="text-xs font-semibold px-3 py-1 rounded-full"
                      style={{ background: colors.bg, color: colors.text, border: `1px solid ${colors.border}` }}
                    >
                      {category}
                    </span>
                    <div className="flex-1 h-px bg-border" />
                  </div>
                  <StaggerContainer containerDelay={catIdx * 0.06} staggerDelay={0.04}>
                    <div className="flex flex-wrap gap-2">
                      {tags.map((tag) => (
                        <motion.span
                          key={tag}
                          variants={staggerItem}
                          whileHover={{
                            scale: 1.06,
                            backgroundColor: colors.bg,
                            color: colors.text,
                            borderColor: colors.border,
                            transition: { duration: 0.15 },
                          }}
                          className="px-3 py-1.5 text-sm bg-card border border-border text-muted rounded-lg cursor-default transition-colors duration-200"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </StaggerContainer>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
