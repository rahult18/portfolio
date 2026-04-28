"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Calendar } from "lucide-react";
import AnimatedSection, { StaggerContainer, staggerItem } from "./AnimatedSection";
import { blogs } from "@/lib/data";

const gradients = [
  "from-blue-500 to-blue-600",
  "from-sky-500 to-blue-500",
  "from-blue-600 to-indigo-500",
  "from-cyan-500 to-blue-600",
];

export default function Blogs() {
  return (
    <section id="blogs" className="py-16 sm:py-24 bg-card">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-end justify-between mb-10 sm:mb-14 gap-4">
          <div>
            <AnimatedSection>
              <span className="text-xs font-semibold uppercase tracking-widest text-accent mb-4 block">
                Writing
              </span>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Things I&apos;ve written.
              </h2>
            </AnimatedSection>
          </div>
          <AnimatedSection delay={0.2} direction="left">
            <a
              href="https://dev.to/rahul_talatala"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:gap-2.5 transition-all duration-200"
            >
              All posts on dev.to <ArrowUpRight size={15} />
            </a>
          </AnimatedSection>
        </div>

        <StaggerContainer staggerDelay={0.1} containerDelay={0.1}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {blogs.map((post, i) => (
              <motion.a
                key={post.url}
                href={post.url}
                target="_blank"
                rel="noreferrer"
                variants={staggerItem}
                whileHover={{ y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
                className="group bg-white rounded-2xl border border-border overflow-hidden hover:shadow-xl hover:shadow-blue-100/50 transition-shadow duration-300 flex flex-col"
              >
                {/* Top accent bar */}
                <div className={`h-1.5 bg-gradient-to-r ${gradients[i % gradients.length]}`} />

                <div className="p-5 flex flex-col flex-1">
                  {/* Date */}
                  <div className="flex items-center gap-1.5 text-xs text-muted mb-3">
                    <Calendar size={11} />
                    {post.date}
                  </div>

                  {/* Title */}
                  <h3 className="text-sm font-semibold text-foreground leading-snug mb-3 group-hover:text-accent transition-colors duration-200 flex-1">
                    {post.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-muted leading-relaxed mb-4 line-clamp-3">
                    {post.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-[10px] bg-card border border-border text-muted rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Read link */}
                  <div className="flex items-center gap-1.5 text-xs font-medium text-muted group-hover:text-accent transition-colors duration-200 mt-auto">
                    Read on dev.to
                    <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </StaggerContainer>

        {/* Mobile "all posts" link */}
        <AnimatedSection delay={0.3}>
          <div className="mt-8 text-center sm:hidden">
            <a
              href="https://dev.to/rahul_talatala"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-accent"
            >
              All posts on dev.to <ArrowUpRight size={14} />
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
