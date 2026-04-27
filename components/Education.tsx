"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar } from "lucide-react";
import AnimatedSection, { StaggerContainer, staggerItem } from "./AnimatedSection";
import { education } from "@/lib/data";

export default function Education() {
  return (
    <section id="education" className="py-16 sm:py-24 bg-card">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <span className="text-xs font-semibold uppercase tracking-widest text-accent mb-4 block">
            Education
          </span>
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-14">
            Where it started.
          </h2>
        </AnimatedSection>

        <StaggerContainer staggerDelay={0.12}>
          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl">
            {education.map((edu) => (
              <motion.div
                key={edu.school}
                variants={staggerItem}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-white rounded-2xl border border-border p-6 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-50 transition-all duration-300 group"
              >
                <div className="w-11 h-11 rounded-xl bg-accent-light flex items-center justify-center mb-5">
                  <GraduationCap size={20} className="text-accent" />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-1 group-hover:text-accent transition-colors duration-200">
                  {edu.degree}
                </h3>
                <p className="text-sm font-medium text-muted mb-3">{edu.school}</p>
                <div className="flex flex-wrap gap-3 text-xs text-muted">
                  <span className="flex items-center gap-1">
                    <MapPin size={11} />
                    {edu.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar size={11} />
                    {edu.period}
                  </span>
                </div>
                <div className="mt-4 pt-4 border-t border-border">
                  <span className="text-xs text-muted">GPA </span>
                  <span className="text-sm font-semibold text-accent">{edu.gpa}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}
