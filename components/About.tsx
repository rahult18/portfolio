"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import AnimatedSection, { StaggerContainer, staggerItem } from "./AnimatedSection";
import { personalInfo } from "@/lib/data";

const highlights = [
  { emoji: "🧠", title: "Agentic Systems", description: "LangGraph, MCP, multi-agent orchestration at enterprise scale" },
  { emoji: "📊", title: "RAG & Knowledge Graphs", description: "Hybrid Graph RAG with Neo4j, Elastic, and pgvector" },
  { emoji: "⚡", title: "MLOps & LLMOps", description: "NVIDIA Triton, LoRA fine-tuning, LangFuse observability" },
  { emoji: "☁️", title: "Cloud Infrastructure", description: "AWS, GCP, Azure: Kubernetes, Terraform, CI/CD at scale" },
];

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-card">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <AnimatedSection>
              <span className="text-xs font-semibold uppercase tracking-widest text-accent mb-4 block">
                About
              </span>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
                Building AI that ships,<br />
                <span className="gradient-text">not just demos.</span>
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <p className="text-muted text-base leading-relaxed mb-5">
                {personalInfo.bio}
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.3}>
              <p className="text-muted text-base leading-relaxed mb-8">
                Whether it&apos;s orchestrating multi-agent pipelines, fine-tuning LLMs for inference efficiency, or building telecom-scale RAG systems, I live at the intersection of research and production. Currently at Verizon, previously at Apple.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.4}>
              <div className="flex flex-wrap gap-3">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-white text-sm font-medium rounded-xl hover:bg-blue-700 transition-colors duration-200"
                >
                  Say hello
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 border border-border text-foreground text-sm font-medium rounded-xl hover:border-accent hover:text-accent hover:bg-accent-light transition-all duration-200"
                >
                  LinkedIn
                </a>
              </div>
            </AnimatedSection>
          </div>

          {/* Right — highlight cards */}
          <StaggerContainer containerDelay={0.2} staggerDelay={0.1}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item) => (
                <motion.div
                  key={item.title}
                  variants={staggerItem}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="p-5 bg-white rounded-2xl border border-border hover:border-blue-200 hover:shadow-lg hover:shadow-blue-50 transition-all duration-300 group cursor-default"
                >
                  <div className="text-2xl mb-3">{item.emoji}</div>
                  <h3 className="text-sm font-semibold text-foreground mb-1.5 group-hover:text-accent transition-colors duration-200">
                    {item.title}
                  </h3>
                  <p className="text-xs text-muted leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
