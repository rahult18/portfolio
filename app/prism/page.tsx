"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Copy, Check, ExternalLink } from "lucide-react";
import Link from "next/link";
import AnimatedSection, {
  StaggerContainer,
  staggerItem,
} from "@/components/AnimatedSection";
import { GitHubIcon } from "@/components/icons";

const problemCards = [
  {
    session: "Session 1",
    text: "You write CLAUDE.md. Tech stack, decisions, conventions. It is accurate.",
  },
  {
    session: "Session 3",
    text: "You migrated from SQLite to PostgreSQL. You forgot to update CLAUDE.md.",
  },
  {
    session: "Session 5",
    text: "The agent confidently uses SQLite APIs. Because that is what the context file says.",
  },
];

const stats = [
  { value: "35x", label: "compression ratio" },
  { value: "700", label: "triples extracted" },
  { value: "45.7%", label: "auto-detected as stale" },
  { value: "416", label: "cross-session links" },
];

const steps = [
  {
    title: "Ingest",
    description:
      "Reads Claude Code session transcripts from ~/.claude/projects/ and the git diff after every commit.",
  },
  {
    title: "Extract",
    description:
      "kg-gen passes the combined text through an LLM and returns (subject, predicate, object) triples.",
  },
  {
    title: "Store + Link",
    description:
      "Triples are embedded locally with sentence-transformers, stored in SQLite, and linked by cosine similarity. Facts that contradict newer ones are marked stale automatically.",
  },
  {
    title: "Generate",
    description:
      "The top 30 triples by recency and confidence score go to your configured LLM. CLAUDE.md, .cursorrules, and AGENTS.md are rewritten in place.",
  },
];

const installSteps = [
  {
    label: "Install",
    command: "pip install prism-mem",
  },
  {
    label: "Configure your LLM provider",
    command:
      "prism config set provider anthropic\nprism config set model claude-haiku-4-5-20251001\nprism config set api-key <your-api-key>",
  },
  {
    label: "Install the post-commit hook. Runs in the background after every commit.",
    command: "prism hook install --project .",
  },
];

const agentConfigs = [
  {
    name: "Claude Code",
    subtitle: "terminal",
    snippet: `claude mcp add prism -- \\
  prism serve --project /path/to/project`,
  },
  {
    name: "Cursor",
    subtitle: ".cursor/mcp.json",
    snippet: `{
  "mcpServers": {
    "prism": {
      "command": "prism",
      "args": [
        "serve",
        "--project",
        "/path/to/project"
      ]
    }
  }
}`,
  },
  {
    name: "Codex",
    subtitle: "agents.json",
    snippet: `{
  "mcpServers": {
    "prism": {
      "command": "prism",
      "args": [
        "serve",
        "--project",
        "/path/to/project"
      ]
    }
  }
}`,
  },
];

export default function PrismPage() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText("pip install prism-mem");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="min-h-screen">
      <div className="max-w-6xl mx-auto px-6 pt-24 pb-20">

        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-14"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors duration-200"
          >
            <ArrowLeft size={15} />
            Back to home
          </Link>
        </motion.div>

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mb-24"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-accent mb-4 block">
            Open Source Tool
          </span>
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight mb-5 gradient-text">
            prism-mem
          </h1>
          <p className="text-muted text-lg max-w-xl leading-relaxed mb-8">
            Every coding session leaves behind artifacts. Prism reads them and
            turns them into structured, reusable knowledge. Automatically.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-foreground text-white text-sm font-mono rounded-xl hover:bg-foreground/90 active:scale-95 transition-all duration-200"
            >
              {copied ? <Check size={14} /> : <Copy size={14} />}
              {copied ? "Copied!" : "pip install prism-mem"}
            </button>
            <a
              href="https://github.com/rahult18/prism-mem"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-border text-foreground text-sm font-medium rounded-xl hover:border-accent hover:text-accent hover:bg-accent-light active:scale-95 transition-all duration-200"
            >
              <GitHubIcon size={15} />
              View on GitHub
            </a>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap items-center gap-2">
            {["v0.1.5 on PyPI", "MIT License", "Python 3.13+"].map((badge) => (
              <span
                key={badge}
                className="px-2.5 py-1 text-xs bg-card border border-border text-muted rounded-md font-mono"
              >
                {badge}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Demo video */}
        <AnimatedSection className="mb-24">
          <div className="mb-8">
            <span className="text-xs font-semibold uppercase tracking-widest text-accent mb-3 block">
              Demo
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              See it in action
            </h2>
          </div>
          <div className="relative w-full rounded-2xl overflow-hidden border border-border shadow-lg" style={{ paddingBottom: "56.25%" }}>
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/b3jWN1cnlEE"
              title="prism-mem demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </AnimatedSection>

        {/* Problem */}
        <AnimatedSection className="mb-24">
          <div className="mb-8">
            <span className="text-xs font-semibold uppercase tracking-widest text-accent mb-3 block">
              The Problem
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              The problem with manual context files
            </h2>
          </div>
          <StaggerContainer staggerDelay={0.08} containerDelay={0.1}>
            <div className="grid sm:grid-cols-3 gap-4">
              {problemCards.map((card) => (
                <motion.div
                  key={card.session}
                  variants={staggerItem}
                  className="bg-card rounded-2xl border border-border border-l-4 border-l-accent p-5"
                >
                  <span className="text-xs font-semibold text-accent mb-2 block">
                    {card.session}
                  </span>
                  <p className="text-sm text-foreground leading-relaxed">
                    {card.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </StaggerContainer>
        </AnimatedSection>

        {/* Results */}
        <AnimatedSection className="mb-24">
          <div className="mb-8">
            <span className="text-xs font-semibold uppercase tracking-widest text-accent mb-3 block">
              Results
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Real numbers from a 3-session demo
            </h2>
          </div>
          <div className="bg-accent-light rounded-2xl border border-blue-200 p-8 sm:p-10">
            <StaggerContainer staggerDelay={0.08} containerDelay={0.1}>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-8">
                {stats.map((stat) => (
                  <motion.div
                    key={stat.label}
                    variants={staggerItem}
                    className="text-center"
                  >
                    <div className="text-4xl sm:text-5xl font-bold text-accent mb-2">
                      {stat.value}
                    </div>
                    <div className="text-xs text-muted leading-snug">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </StaggerContainer>
            <p className="text-center text-xs text-muted border-t border-blue-200 pt-6">
              411,463 bytes of raw Claude Code transcripts condensed to 11,707
              characters of structured, queryable knowledge
            </p>
          </div>
        </AnimatedSection>

        {/* How it works */}
        <AnimatedSection className="mb-24">
          <div className="mb-8">
            <span className="text-xs font-semibold uppercase tracking-widest text-accent mb-3 block">
              Pipeline
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              How it works
            </h2>
          </div>
          <div className="relative">
            <div className="absolute left-4 top-4 bottom-0 w-px bg-border" />
            <StaggerContainer staggerDelay={0.1} containerDelay={0.1}>
              <div className="flex flex-col gap-8">
                {steps.map((step, i) => (
                  <motion.div
                    key={step.title}
                    variants={staggerItem}
                    className="flex gap-6"
                  >
                    <div className="relative z-10 flex-shrink-0 w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center text-xs font-bold">
                      {i + 1}
                    </div>
                    <div className="pt-1">
                      <h3 className="text-sm font-semibold text-foreground mb-1">
                        {step.title}
                      </h3>
                      <p className="text-sm text-muted leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </StaggerContainer>
          </div>
        </AnimatedSection>

        {/* Staleness proof */}
        <AnimatedSection className="mb-24">
          <div className="mb-8">
            <span className="text-xs font-semibold uppercase tracking-widest text-accent mb-3 block">
              Key Feature
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3">
              Automatic staleness detection
            </h2>
            <p className="text-sm text-muted max-w-lg">
              No config. No prompt. No manual update. Prism detected the
              migration automatically.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <span className="text-xs font-semibold text-muted mb-2 block">
                After session 1
              </span>
              <div className="bg-foreground rounded-xl p-5 font-mono text-xs leading-loose">
                <div>
                  <span className="text-green-400">
                    {"(snap-url) [uses] (SQLite)"}
                  </span>
                  <span className="text-white/40">{" ← active"}</span>
                </div>
              </div>
            </div>
            <div>
              <span className="text-xs font-semibold text-muted mb-2 block">
                After session 3 (PostgreSQL migration)
              </span>
              <div className="bg-foreground rounded-xl p-5 font-mono text-xs leading-loose">
                <div>
                  <span className="text-red-400">
                    {"(snap-url) [uses] (SQLite)"}
                  </span>
                  <span className="text-white/40">{" ← stale, auto-detected"}</span>
                </div>
                <div>
                  <span className="text-green-400">
                    {"(snap-url) [uses] (PostgreSQL)"}
                  </span>
                  <span className="text-white/40">{" ← active"}</span>
                </div>
                <div>
                  <span className="text-green-400">
                    {"(snap-url) [uses] (Redis)"}
                  </span>
                  <span className="text-white/40">{" ← active"}</span>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Install */}
        <AnimatedSection className="mb-24">
          <div className="mb-8">
            <span className="text-xs font-semibold uppercase tracking-widest text-accent mb-3 block">
              Setup
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Get started in 3 commands
            </h2>
          </div>
          <StaggerContainer staggerDelay={0.1} containerDelay={0.1}>
            <div className="flex flex-col gap-5">
              {installSteps.map((step, i) => (
                <motion.div key={i} variants={staggerItem}>
                  <p className="text-xs text-muted mb-2">
                    <span className="font-semibold text-foreground">
                      {i + 1}.
                    </span>{" "}
                    {step.label}
                  </p>
                  <pre className="bg-foreground text-white text-sm font-mono p-4 rounded-xl overflow-x-auto leading-relaxed">{step.command}</pre>
                </motion.div>
              ))}
            </div>
          </StaggerContainer>
        </AnimatedSection>

        {/* Agent configs */}
        <AnimatedSection className="mb-24">
          <div className="mb-8">
            <span className="text-xs font-semibold uppercase tracking-widest text-accent mb-3 block">
              Integrations
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Works with Claude Code, Cursor, and Codex
            </h2>
          </div>
          <StaggerContainer staggerDelay={0.08} containerDelay={0.1}>
            <div className="grid sm:grid-cols-3 gap-4">
              {agentConfigs.map((agent) => (
                <motion.div
                  key={agent.name}
                  variants={staggerItem}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="group bg-white rounded-2xl border border-border p-5 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/40 transition-all duration-300"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors duration-200">
                      {agent.name}
                    </span>
                    <span className="text-[10px] font-mono text-muted bg-card border border-border px-1.5 py-0.5 rounded">
                      {agent.subtitle}
                    </span>
                  </div>
                  <pre className="bg-foreground text-white text-[11px] font-mono p-3 rounded-lg overflow-x-auto leading-relaxed">{agent.snippet}</pre>
                </motion.div>
              ))}
            </div>
          </StaggerContainer>
        </AnimatedSection>

        {/* Footer strip */}
        <AnimatedSection>
          <div className="border-t border-border pt-8 flex flex-wrap items-center justify-center gap-8">
            <a
              href="https://github.com/rahult18/prism-mem"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors duration-200"
            >
              <GitHubIcon size={14} />
              GitHub
            </a>
            <a
              href="https://pypi.org/project/prism-mem/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors duration-200"
            >
              <ExternalLink size={14} />
              PyPI
            </a>
            <a
              href="https://dev.to/rahul_talatala/prism-mem-automatic-knowledge-extraction-for-ai-coding-agents-2bgo"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors duration-200"
            >
              <ExternalLink size={14} />
              Blog
            </a>
          </div>
        </AnimatedSection>

      </div>
    </main>
  );
}
