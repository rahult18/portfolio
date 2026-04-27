"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MapPin, Calendar } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { experience } from "@/lib/data";

export default function Experience() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="experience" className="py-16 sm:py-24 bg-card">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <span className="text-xs font-semibold uppercase tracking-widest text-accent mb-4 block">
            Experience
          </span>
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-10 sm:mb-14">
            Where I&apos;ve shipped.
          </h2>
        </AnimatedSection>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border hidden sm:block" />

          <div className="space-y-4">
            {experience.map((job, i) => (
              <AnimatedSection key={i} delay={i * 0.1} direction="left">
                <div className="relative sm:pl-16">
                  {/* Timeline dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.2, type: "spring", stiffness: 300 }}
                    className="absolute left-[18px] top-6 w-4 h-4 rounded-full border-2 border-accent bg-white hidden sm:block z-10"
                    style={{ boxShadow: `0 0 0 4px ${job.color}` }}
                  />

                  <motion.div
                    className="bg-white rounded-2xl border border-border overflow-hidden hover:border-blue-200 hover:shadow-md hover:shadow-blue-50 transition-all duration-300 cursor-pointer"
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                    onClick={() => setOpenIdx(openIdx === i ? null : i)}
                  >
                    <div className="p-6">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-center gap-2 mb-1">
                            <h3 className="text-base font-semibold text-foreground">{job.title}</h3>
                            {i === 0 && (
                              <span className="inline-flex items-center gap-1 px-2 py-0.5 text-xs font-medium bg-green-50 text-green-700 border border-green-200 rounded-full">
                                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                                Current
                              </span>
                            )}
                          </div>
                          <div className="flex flex-wrap items-center gap-3 text-sm text-muted">
                            <span className="font-medium text-foreground">{job.company}</span>
                            {job.client && (
                              <>
                                <span>·</span>
                                <span
                                  className="px-2 py-0.5 text-xs rounded-full"
                                  style={{ background: job.color }}
                                >
                                  {job.client}
                                </span>
                              </>
                            )}
                          </div>
                          <div className="flex flex-wrap items-center gap-4 mt-2 text-xs text-muted">
                            <span className="flex items-center gap-1">
                              <Calendar size={11} />
                              {job.period}
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPin size={11} />
                              {job.location}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 flex-shrink-0">
                          <div className="hidden sm:flex flex-wrap gap-1.5">
                            {job.tags?.map((tag) => (
                              <span
                                key={tag}
                                className="px-2 py-0.5 text-xs bg-card border border-border text-muted rounded-md"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          <motion.div
                            animate={{ rotate: openIdx === i ? 180 : 0 }}
                            transition={{ duration: 0.25 }}
                            className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-lg bg-card text-muted"
                          >
                            <ChevronDown size={16} />
                          </motion.div>
                        </div>
                      </div>
                    </div>

                    <AnimatePresence initial={false}>
                      {openIdx === i && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 border-t border-border pt-5">
                            <ul className="space-y-3">
                              {job.highlights.map((point, j) => (
                                <motion.li
                                  key={j}
                                  initial={{ opacity: 0, x: -12 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: j * 0.06, duration: 0.35 }}
                                  className="flex items-start gap-3 text-sm text-muted leading-relaxed"
                                >
                                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent mt-2" />
                                  {point}
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
