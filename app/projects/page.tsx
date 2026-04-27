"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Star } from "lucide-react";
import { GitHubIcon } from "@/components/icons";
import Link from "next/link";
import { StaggerContainer, staggerItem } from "@/components/AnimatedSection";
import { projects } from "@/lib/data";

const allTags = Array.from(new Set(projects.flatMap((p) => p.tags)));

export default function ProjectsPage() {
  return (
    <main className="min-h-screen">
      <div className="max-w-6xl mx-auto px-6 pt-24 pb-20">
        {/* Back */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-10"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors duration-200"
          >
            <ArrowLeft size={15} />
            Back to home
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mb-14"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-accent mb-4 block">
            All Projects
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Everything I&apos;ve built.
          </h1>
          <p className="text-muted text-base max-w-lg">
            A complete collection, from production ML systems to data pipelines to cryptography research.
          </p>
        </motion.div>

        {/* Projects grid */}
        <StaggerContainer staggerDelay={0.07} containerDelay={0.2}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((project) => (
              <motion.article
                key={project.name}
                variants={staggerItem}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="group bg-white rounded-2xl border border-border p-5 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/40 transition-all duration-300 flex flex-col"
              >
                <div className="flex items-start justify-between mb-3 gap-3">
                  <h2 className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors duration-200 leading-snug">
                    {project.name}
                  </h2>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    {project.featured && (
                      <span className="text-[10px] font-semibold px-2 py-0.5 bg-accent-light text-accent rounded-full border border-blue-200">
                        Featured
                      </span>
                    )}
                    {project.stars && (
                      <span className="inline-flex items-center gap-1 text-xs text-amber-600 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full">
                        <Star size={10} />
                        {project.stars}
                      </span>
                    )}
                  </div>
                </div>

                <p className="text-xs text-muted leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-[10px] bg-card border border-border text-muted rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-muted hover:text-accent transition-colors duration-200 mt-auto"
                >
                  <GitHubIcon size={13} />
                  View on GitHub
                </a>
              </motion.article>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </main>
  );
}
