"use client";

import { motion } from "framer-motion";
import { ExternalLink, Check } from "lucide-react";
import { GitHubIcon } from "./icons";
import AnimatedSection, { StaggerContainer, staggerItem } from "./AnimatedSection";
import { products } from "@/lib/data";

function ChromeIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-label="Google Chrome">
      <circle cx="12" cy="12" r="12" fill="white" />
      {/* Red — top segment */}
      <path fill="#EA4335" d="M12 0C8.21 0 4.831 1.757 2.632 4.501l3.953 6.848A5.454 5.454 0 0 1 12 6.545h10.691A12 12 0 0 0 12 0Z" />
      {/* Green — bottom-left segment */}
      <path fill="#34A853" d="M1.931 5.47A11.943 11.943 0 0 0 0 12c0 6.012 4.42 10.991 10.189 11.864l3.953-6.847a5.45 5.45 0 0 1-6.865-2.29Z" />
      {/* Yellow — bottom-right segment (m13.342 2.166 relative to green M point 1.931,5.47 = 15.273,7.636) */}
      <path fill="#FBBC05" d="M15.273 7.636a5.446 5.446 0 0 1 1.45 7.09l.002.001h-.002l-5.344 9.257c.206.01.413.016.621.016 6.627 0 12-5.373 12-12 0-1.54-.29-3.011-.818-4.364Z" />
      {/* Blue center circle */}
      <circle cx="12" cy="12" r="4.364" fill="#4285F4" />
    </svg>
  );
}

export default function Products() {
  return (
    <section id="products" className="py-16 sm:py-24 bg-card/40">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-10 sm:mb-14">
          <AnimatedSection>
            <span className="text-xs font-semibold uppercase tracking-widest text-accent mb-4 block">
              Products
            </span>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Things I&apos;ve shipped.
            </h2>
          </AnimatedSection>
        </div>

        <StaggerContainer staggerDelay={0.15} containerDelay={0.1}>
          <div className="flex flex-col gap-6">
            {products.map((product) => (
              <motion.article
                key={product.name}
                variants={staggerItem}
                whileHover={{ y: -4, transition: { duration: 0.2, ease: "easeOut" } }}
                className="group bg-white rounded-2xl border border-border overflow-hidden hover:shadow-xl hover:shadow-blue-100/60 transition-shadow duration-300"
              >
                {/* Top accent bar */}
                <div className="h-1.5 bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-500" />

                <div className="p-6 sm:p-8">
                  <div className="flex flex-col lg:flex-row lg:gap-12">
                    {/* Left column */}
                    <div className="flex-1 min-w-0 mb-8 lg:mb-0">
                      {/* Header */}
                      <div className="flex flex-wrap items-center gap-2.5 mb-3">
                        <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors duration-200">
                          {product.name}
                        </h3>
                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse inline-block" />
                          Live
                        </span>
                        <span className="inline-flex items-center text-xs font-medium text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-0.5 rounded-full">
                          Solo build
                        </span>
                      </div>

                      <p className="text-base font-medium text-muted mb-1">{product.tagline}</p>
                      <p className="text-sm text-muted leading-relaxed mb-6">
                        {product.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-7">
                        {product.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 text-xs bg-card border border-border text-muted rounded-lg"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Links */}
                      <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:gap-3">
                        <a
                          href={product.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-accent hover:bg-blue-700 rounded-lg transition-colors duration-200"
                        >
                          <ExternalLink size={13} />
                          {product.liveLabel ?? "Live App"}
                        </a>
                        {product.chromeStoreUrl && (
                          <a
                            href={product.chromeStoreUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-gray-700 bg-white border border-border hover:bg-gray-50 rounded-lg transition-colors duration-200"
                          >
                            <ChromeIcon size={15} />
                            Chrome Store
                          </a>
                        )}
                        <a
                          href={product.github}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-muted hover:text-accent border border-border hover:border-accent/30 rounded-lg transition-colors duration-200"
                        >
                          <GitHubIcon size={14} />
                          GitHub
                        </a>
                        {product.pageUrl && (
                          <a
                            href={product.pageUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center justify-center gap-1.5 px-4 py-2.5 text-sm font-medium text-muted hover:text-accent border border-border hover:border-accent/30 rounded-lg transition-colors duration-200"
                          >
                            Learn more
                            <ExternalLink size={11} />
                          </a>
                        )}
                        {product.blog && (
                          <a
                            href={product.blog}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center justify-center gap-1.5 px-4 py-2.5 text-sm font-medium text-muted hover:text-accent border border-border hover:border-accent/30 rounded-lg transition-colors duration-200"
                          >
                            Read story
                            <ExternalLink size={11} />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Right column — features */}
                    <div className="lg:w-80 xl:w-96 flex-shrink-0 border-t border-border pt-6 lg:border-t-0 lg:pt-0">
                      <p className="text-xs font-semibold uppercase tracking-widest text-muted mb-4">
                        What it does
                      </p>
                      <ul className="flex flex-col gap-3.5">
                        {product.features.map((feat) => (
                          <li key={feat} className="flex items-start gap-3">
                            <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center">
                              <Check size={11} className="text-accent" strokeWidth={2.5} />
                            </span>
                            <span className="text-sm text-muted leading-relaxed">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}
