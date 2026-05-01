"use client";

import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Star } from "lucide-react";
import { GitHubIcon } from "./icons";
import Link from "next/link";
import AnimatedSection, { StaggerContainer, staggerItem } from "./AnimatedSection";
import { projects } from "@/lib/data";

const featured = projects.filter((p) => p.featured);

const gradients = [
  "from-blue-600 to-blue-500",
  "from-blue-500 to-blue-600",
  "from-violet-500 to-pink-600",
];

export default function FeaturedProjects() {
  return (
    <section id="projects" className="py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between mb-10 sm:mb-14 gap-4">
          <div>
            <AnimatedSection>
              <span className="text-xs font-semibold uppercase tracking-widest text-accent mb-4 block">
                Projects
              </span>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Things I&apos;ve built.
              </h2>
            </AnimatedSection>
          </div>
          <AnimatedSection delay={0.2} direction="left">
            <Link
              href="/projects"
              className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-accent hover:gap-3 transition-all duration-200"
            >
              View all projects <ArrowRight size={15} />
            </Link>
          </AnimatedSection>
        </div>

        <StaggerContainer staggerDelay={0.12} containerDelay={0.1}>
          <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
            {featured.map((project, i) => (
              <motion.article
                key={project.name}
                variants={staggerItem}
                whileHover={{ y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
                className="group relative bg-white rounded-2xl border border-border overflow-hidden hover:shadow-xl hover:shadow-blue-100/50 transition-shadow duration-300"
              >
                {/* Card header gradient */}
                <div className={`h-2 bg-gradient-to-r ${gradients[i % gradients.length]}`} />

                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-base font-semibold text-foreground group-hover:text-accent transition-colors duration-200 leading-snug">
                      {project.name}
                    </h3>
                    <div className="flex items-center gap-2 flex-shrink-0 ml-2">
                      {project.stars && (
                        <span className="inline-flex items-center gap-1 text-xs text-amber-600 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full">
                          <Star size={10} />
                          {project.stars}
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="text-sm text-muted leading-relaxed mb-5 min-h-[4rem]">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs bg-card border border-border text-muted rounded-lg"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="px-2.5 py-1 text-xs bg-card border border-border text-muted rounded-lg">
                        +{project.tags.length - 4}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-accent transition-colors duration-200"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <GitHubIcon size={14} />
                      GitHub
                    </a>
                    {"liveUrl" in project && project.liveUrl && (
                      <a
                        href={project.liveUrl as string}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-blue-700 transition-colors duration-200"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink size={13} />
                        Live
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </StaggerContainer>

        <AnimatedSection delay={0.3}>
          <div className="mt-10 text-center sm:hidden">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm font-medium text-accent"
            >
              View all projects <ArrowRight size={15} />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
