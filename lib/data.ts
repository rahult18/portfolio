export const personalInfo = {
  name: "Rahul Reddy Talatala",
  tagline: "I automate the complex.\nI make AI work at scale.",
  email: "rahul.talatala@gmail.com",
  phone: "716-939-5940",
  linkedin: "https://www.linkedin.com/in/rahul-reddy-t/",
  github: "https://github.com/rahult18",
  resume: "/resume.pdf",
  bio: "I'm a GenAI Engineer who turns cutting-edge AI research into systems that actually ship. I've automated millions of dollars in operational waste, fine-tuned LLMs for production inference, and built agentic pipelines that work at enterprise scale, not just in notebooks. I care about real impact over cool demos.",
};

export const stats = [
  { value: 114, prefix: "$", suffix: "M+", label: "Overcharge exposure surfaced at Verizon" },
  { value: 2.46, prefix: "$", suffix: "M", label: "Annual cost avoidance created" },
  { value: 35, suffix: "%", label: "Infra debugging time cut at Apple" },
];

export const skills: Record<string, string[]> = {
  "Agentic & ML": ["LangGraph", "LangChain", "CrewAI", "Autogen", "PyTorch", "TensorFlow", "Google ADK", "MCP", "A2A"],
  "RAG & Knowledge": ["Hybrid RAG", "LlamaIndex", "Neo4j", "Elastic Vector DB", "pgvector", "Cohere Rerank", "Semantic Search"],
  "MLOps & LLMOps": ["Ray", "ONNX", "MLflow", "NVIDIA Triton", "LangSmith", "LangFuse", "Kubeflow", "W&B", "Axolotl"],
  "Data Engineering": ["Spark", "Airflow", "Kafka", "dbt", "Snowflake", "TimescaleDB", "ETL/ELT"],
  "Cloud & DevOps": ["AWS", "GCP", "Azure", "Kubernetes", "Terraform", "Docker", "ArgoCD", "CI/CD"],
  "Programming": ["Python", "TypeScript", "Java", "SQL", "FastAPI", "Spring Boot", "Node.js", "React", "Next.js"],
};

export const experience = [
  {
    title: "GenAI Engineer",
    company: "Infinite Computer Solutions",
    client: "Client: Verizon",
    location: "Tampa, FL",
    period: "Aug 2025 – Present",
    color: "#EFF6FF",
    tags: ["LangGraph", "Gemini", "DSPy"],
    highlights: [
      "Built a five-stage document-audit pipeline with Gemini 2.5 Flash and a 70-rule engine that matches invoice line items to purchase orders via hybrid search, surfacing $114–140M in annual overcharge exposure across 500–2,000 capital projects.",
      "Fine-tuned Qwen2.5-3B with LoRA to mask sensitive financial fields on-prem before any data reaches a frontier LLM, then used DSPy to optimize extraction prompts — lifting structured-field accuracy from 74% to 91%.",
      "Solved the cold-start problem for a 346-table text-to-SQL agent by building an offline pipeline that builds a 1,536-dim ChromaDB vector store and a 17,772-edge NetworkX join graph, enabling accurate retrieval from day one across 11.8M+ rows.",
      "Designed a multi-agent FiOS planning system that clusters copper-circuit addresses with DBSCAN and coordinates six specialist agents into prioritized build plans, cutting manual fiber build planning effort by 65%.",
      "Built a LangGraph routing agent that triages 278,350 tickets at 90% accuracy using vendor-specific, glossary-grounded LLM prompts — eliminating ~47,000 hours of annual L1/L2 work for a projected $2.46M in cost avoidance.",
    ],
  },
  {
    title: "MLOps Engineer (Contract)",
    company: "Apple Inc.",
    client: "Data Platform Efficiency",
    location: "Dallas, TX",
    period: "Apr 2025 – Aug 2025",
    color: "#F0FDF4",
    tags: ["LangGraph", "NVIDIA Triton", "Apache Spark"],
    highlights: [
      "Built an MCP-based Kubernetes debugger with LangGraph orchestration and gRPC streaming, cutting infrastructure triage time by 60%.",
      "Fine-tuned Qwen 1.5B with LoRA on synthetic telemetry data and deployed via NVIDIA Triton, achieving 35% faster LLM inference.",
      "Built Spark pipelines processing 5M+ daily GPU metrics into TimescaleDB, delivering $1.5M in annual cloud savings and $17M/month in cost transparency.",
      "Implemented Run:AI fractional scheduling across shared Ray workloads, boosting GPU utilization by 60%.",
    ],
  },
  {
    title: "Software & AI Engineer",
    company: "Eminent Services Corporation",
    location: "Frederick, MD",
    period: "May 2024 – Apr 2025",
    color: "#FFF7ED",
    tags: ["React", "Node.js", "Azure DevOps"],
    highlights: [
      "Migrated a legacy VB6 system to a modular MERN architecture, improving scalability by 35% and reducing maintenance effort by 40%.",
      "Automated CI/CD pipelines with Azure DevOps, standardizing and stabilizing deployment cycles across the engineering org.",
    ],
  },
  {
    title: "ML Research Assistant",
    company: "University at Buffalo",
    location: "Buffalo, NY",
    period: "Jan 2024 – May 2024",
    color: "#FDF4FF",
    tags: ["PyTorch", "Python", "Transformers"],
    highlights: [
      "Applied quantization and knowledge distillation to GPT models, reducing inference energy consumption by 20% without significant accuracy loss.",
    ],
  },
  {
    title: "Solutions Engineer",
    company: "Swym Corporation",
    location: "Bangalore, India",
    period: "Aug 2021 – Aug 2023",
    color: "#F0FDF4",
    tags: ["REST APIs", "JavaScript", "E-commerce"],
    highlights: [
      "Engineered 30+ bespoke wishlist solutions for e-commerce stores using REST APIs, optimizing user journeys and aligning with diverse business requirements.",
      "Built an internal knowledge base tool for the development and support teams, streamlining collaboration and reducing time spent on repetitive technical queries.",
      "Resolved 8+ server-side caching issues by optimizing in-memory caching, improving API response times by 12% and enabling faster real-time updates.",
      "Revamped external developer documentation with code recipes and API demos, driving a 10% increase in developer docs traffic.",
    ],
  },
];

export const products = [
  {
    name: "prism-mem",
    tagline: "Post-session memory for AI coding agents.",
    description:
      "An open-source CLI tool I built solo. After every git commit, it reads Claude Code session transcripts and git diffs, extracts structured knowledge as (subject, predicate, object) triples, links them by cosine similarity, auto-detects stale facts, and rewrites CLAUDE.md, .cursorrules, and AGENTS.md. In a 3-session demo, it compressed 411,463 bytes of raw transcripts into 11,707 characters of structured knowledge — a 35x reduction.",
    liveUrl: "https://pypi.org/project/prism-mem/",
    liveLabel: "PyPI",
    pageUrl: "https://rahult.dev/prism",
    github: "https://github.com/rahult18/prism-mem",
    blog: "https://dev.to/rahul_talatala/prism-mem-automatic-knowledge-extraction-for-ai-coding-agents-2bgo",
    tags: ["kg-gen", "sentence-transformers", "numpy", "SQLite", "FastMCP", "FastAPI", "LiteLLM", "Python"],
    features: [
      "Extracts (subject, predicate, object) triples from Claude Code session transcripts and git diffs via kg-gen and an LLM",
      "Links related triples by cosine similarity and marks contradicted facts stale automatically — no manual input",
      "Rewrites CLAUDE.md, .cursorrules, and AGENTS.md after every git commit via a post-commit hook",
      "MCP server exposes get_context, query_knowledge, and crystallize tools to Claude Code, Cursor, and Codex",
    ],
  },
  {
    name: "ApplyAI",
    tagline: "Apply to jobs 10× faster.",
    description:
      "A full-stack job application assistant I built solo — Chrome extension, web dashboard, and AI backend. It autofills application forms using a LangGraph agent, tracks every application in one place, and scores your resume against each job posting.",
    liveUrl: "https://apply-ai-extension.vercel.app/",
    github: "https://github.com/rahult18/apply-ai-extension",
    chromeStoreUrl:
      "https://chromewebstore.google.com/detail/ApplyAI/ckknfphllkanlgikfaadoikjionkbmpf",
    tags: ["LangGraph", "Gemini", "FastAPI", "Next.js", "Chrome Extension MV3", "Supabase"],
    features: [
      "LangGraph DAG agent autofills entire forms — dropdowns, React Select, and file uploads included",
      "Resume-to-job match scoring with matched and missing keyword breakdown",
      "Application tracking dashboard with status pipeline, KPI cards, and charts",
      "Job board discovery across Lever, Ashby, and Greenhouse via SERP search",
    ],
    blog: "https://dev.to/rahul_talatala/i-got-tired-of-filling-out-the-same-form-50-times-so-i-built-an-ai-to-do-it-4jfj",
  },
];

export const projects = [
  {
    name: "apply-ai-extension",
    description:
      "Full-stack job application assistant with a Chrome extension, LangGraph autofill agent, resume match scoring, and application tracking dashboard. Built solo and live on the Chrome Web Store.",
    tags: ["LangGraph", "Gemini", "FastAPI", "Next.js", "Chrome Extension", "Supabase"],
    github: "https://github.com/rahult18/apply-ai-extension",
    liveUrl: "https://apply-ai-extension.vercel.app/",
    featured: true,
  },
  {
    name: "springcommerce",
    description:
      "Production-grade microservices e-commerce platform built with Spring Boot, secured with Keycloak, orchestrated on Kubernetes, and monitored via Grafana + Prometheus.",
    tags: ["Spring Boot", "Kubernetes", "Grafana", "Keycloak", "Microservices"],
    github: "https://github.com/rahult18/springcommerce",
    stars: 7,
    featured: true,
  },
  {
    name: "secure-stack",
    description:
      "End-to-end DevSecOps pipeline implementing a three-tier architecture on AWS EKS with ArgoCD, GitOps workflows, and automated security scanning.",
    tags: ["AWS EKS", "ArgoCD", "GitOps", "DevSecOps", "Terraform"],
    github: "https://github.com/rahult18/secure-stack",
    featured: true,
  },
  {
    name: "atmo-flow",
    description:
      "Real-time weather and air quality data pipeline on GCP using Cloud Composer (Airflow), PySpark transformations, and interactive visualizations.",
    tags: ["GCP", "Airflow", "PySpark", "Data Pipeline"],
    github: "https://github.com/rahult18/atmo-flow",
    featured: true,
  },
  {
    name: "NYC Yellow Taxi Pipeline",
    description:
      "End-to-end streaming data pipeline processing NYC taxi trips with Kafka, Spark Streaming, ML demand forecasting, and a REST API layer.",
    tags: ["Kafka", "Spark", "Machine Learning", "REST API", "Python"],
    github: "https://github.com/rahult18/NYC-Yellow-Taxi-Trip-Data-Pipeline",
    stars: 1,
    featured: false,
  },
  {
    name: "Story Generation (LSTM + GRU)",
    description:
      "NLP project for autonomous story generation leveraging bidirectional LSTMs and GRUs trained on literary corpora.",
    tags: ["NLP", "LSTM", "GRU", "PyTorch", "Deep Learning"],
    github: "https://github.com/rahult18/Story-Generation-using-LSTM-and-GRU",
    stars: 2,
    featured: false,
  },
  {
    name: "Stock Market Forecasting",
    description:
      "Hybrid forecasting model combining LSTM-based RNNs and Random Forest to predict market trends using technical indicators.",
    tags: ["LSTM", "Random Forest", "Time Series", "Python"],
    github: "https://github.com/rahult18/Stock-Market-Prediction-and-Forecasting",
    featured: false,
  },
  {
    name: "spring-boot-microservices",
    description:
      "Microservices-based e-commerce demonstrating Spring Boot, Spring Security, distributed tracing, and full observability.",
    tags: ["Spring Boot", "Spring Security", "Observability", "Java"],
    github: "https://github.com/rahult18/spring-boot-microservices",
    featured: false,
  },
  {
    name: "DES Parallelization",
    description:
      "Enhanced DES cryptographic algorithm efficiency through OpenMP and MPI parallelization in C++.",
    tags: ["C++", "OpenMP", "MPI", "Cryptography"],
    github: "https://github.com/rahult18/Parallelisation-of-DES-Algorithm",
    featured: false,
  },
];

export const blogs = [
  {
    title: "prism-mem: Automatic Knowledge Extraction for AI Coding Agents",
    description:
      "Built prism-mem, an open-source CLI that reads Claude Code session transcripts and git diffs after every commit, extracts (subject, predicate, object) triples via kg-gen, links them by cosine similarity, auto-detects stale facts, and rewrites CLAUDE.md automatically — no manual context updates needed.",
    date: "May 31, 2026",
    tags: ["AI Agents", "Knowledge Graph", "Python", "MCP"],
    url: "https://dev.to/rahul_talatala/prism-mem-automatic-knowledge-extraction-for-ai-coding-agents-2bgo",
  },
  {
    title: "I Got Tired of Filling Out the Same Form 50 Times, So I Built an AI to Do It",
    description:
      "Built ApplyAI, a Chrome extension that automates job application form filling using a LangGraph agent and Gemini AI, cutting the process from 10 minutes to under 10 seconds.",
    date: "Mar 6, 2025",
    tags: ["AI Agents", "Automation", "Python", "LangGraph"],
    url: "https://dev.to/rahul_talatala/i-got-tired-of-filling-out-the-same-form-50-times-so-i-built-an-ai-to-do-it-4jfj",
  },
  {
    title: "AtmoFlow: Real-Time Weather and Air Quality Insights",
    description:
      "End-to-end data pipeline on GCP using Cloud Functions, Pub/Sub, Dataproc, and BigQuery to ingest, process, and visualize environmental data with Looker dashboards.",
    date: "Jan 20, 2025",
    tags: ["Data Engineering", "Google Cloud", "PySpark", "BigQuery"],
    url: "https://dev.to/rahul_talatala/atmoflow-breathing-life-into-data-real-time-weather-and-air-quality-insights-5db0",
  },
  {
    title: "Spring Commerce: Building a Resilient E-commerce System with Spring Boot Microservices",
    description:
      "A complete microservices e-commerce system with four core services communicating via REST and Kafka, secured with Keycloak, and monitored through the Grafana observability stack.",
    date: "Mar 12, 2025",
    tags: ["Spring Boot", "Microservices", "Kubernetes", "Kafka"],
    url: "https://dev.to/rahul_talatala/spring-commerce-building-a-resilient-e-commerce-system-with-spring-boot-microservices-43ek",
  },
  {
    title: "Spring Core Fundamentals: A Beginner Guide",
    description:
      "A practical guide to Spring's core concepts: dependency injection, inversion of control, bean management, and aspect-oriented programming for building maintainable Java apps.",
    date: "Mar 12, 2025",
    tags: ["Java", "Spring Boot", "Backend", "Dependency Injection"],
    url: "https://dev.to/rahul_talatala/spring-core-fundamentals-a-beginner-guide-3daa",
  },
];

export const education = [
  {
    degree: "MS, Computer Science",
    school: "University at Buffalo",
    location: "Buffalo, NY",
    gpa: "3.8 / 4.0",
  },
  {
    degree: "BTech, Computer Science",
    school: "Vellore Institute of Technology",
    location: "Chennai, India",
    gpa: "3.9 / 4.0",
  },
];

export const chatPersona = `You are an AI assistant representing Rahul Reddy Talatala on his personal portfolio website. Respond as Rahul, in first person — warm, direct, confident, and a little personable. Not robotic.

IDENTITY:
Name: Rahul Reddy Talatala
Email: rahul.talatala@gmail.com
LinkedIn: https://www.linkedin.com/in/rahul-reddy-t/
GitHub: https://github.com/rahult18
Current Location: Tampa, FL

CURRENT ROLE: GenAI Engineer at Infinite Computer Solutions (Client: Verizon), Tampa FL. Aug 2025–Present.

SUMMARY: GenAI Engineer specializing in LLM systems, agentic workflows, Graph RAG, and DevOps automation.

WHAT I'M CURRENTLY WORKING ON (use this when asked "what are you working on" or about current work):
I'm embedded with the team at Verizon in Tampa, building a five-stage document pipeline that uses Gemini 2.5 Flash and a 70-rule audit engine to catch overcharges on capital project invoices — it surfaces $114–140M in annual exposure. To keep sensitive financial data on-prem, I fine-tuned a Qwen2.5-3B model with LoRA to mask it before anything reaches a frontier LLM, then used DSPy to push structured-extraction accuracy from 74% to 91%.

On the agentic side, I also built a LangGraph routing agent that triages network tickets — it runs at 90% accuracy across 278,350 tickets, eliminating roughly 47,000 hours of L1/L2 work a year for a projected $2.46M in cost avoidance. It's the kind of work I love: deep technical problems with clear, measurable business impact.

When I'm not heads-down on that, I'm experimenting with MCP (Model Context Protocol) to explore how to better bridge LLMs with local development environments.

KEY ACHIEVEMENTS:
- Built a Gemini-powered document-audit pipeline at Verizon surfacing $114–140M in annual overcharge exposure
- Fine-tuned Qwen2.5-3B with LoRA + DSPy for privacy-preserving extraction, lifting accuracy from 74% to 91%
- Built a LangGraph ticket-triage agent at Verizon: 278,350 tickets at 90% accuracy, $2.46M projected cost avoidance
- Reduced infra triage time 60% at Apple via MCP-based Kubernetes debugger with LangGraph
- Fine-tuned Qwen 1.5B with LoRA → 35% faster inference deployed on NVIDIA Triton
- $1.5M annual cloud savings at Apple via Spark + TimescaleDB GPU analytics pipelines
- 60% GPU utilization improvement using Run:AI fractional scheduling on Ray workloads

SKILLS: LangGraph, LangChain, CrewAI, Autogen, PyTorch, TensorFlow, Google ADK, MCP, A2A, Hybrid RAG, LlamaIndex, Neo4j, Elastic, pgvector, Cohere Rerank, Ray, MLflow, NVIDIA Triton, LangFuse, Kubeflow, Spark, Airflow, Kafka, dbt, Snowflake, AWS, GCP, Azure, Kubernetes, Terraform, Docker, Python, TypeScript, Java, SQL, FastAPI, Spring Boot, React, Next.js

EXPERIENCE:
1. GenAI Engineer @ Infinite Computer Solutions (Client: Verizon) — Aug 2025–Present, Tampa FL
2. MLOps Engineer (Contract) @ Apple Inc. — Apr 2025–Aug 2025, Dallas TX
3. Software & AI Engineer @ Eminent Services Corporation — May 2024–Apr 2025, Frederick MD
4. ML Research Assistant @ University at Buffalo — Jan 2024–May 2024, Buffalo NY

EDUCATION:
- MS Computer Science, University at Buffalo, GPA 3.8/4 (2023–2025)
- BTech Computer Science, Vellore Institute of Technology, GPA 3.9/4 (2019–2023)

WHAT I'M LOOKING FOR:
- Fun, challenging environments where I can push the boundaries of AI
- Teams that move fast, value deep technical work, and care about real-world impact
- Open to relocation anywhere

WORK STYLE & PERSONALITY:
- I genuinely enjoy being in the weeds; debugging a gnarly distributed system at 11pm is my idea of a good time
- I care about measurable impact: code that saves millions, not just cool demos
- I'm collaborative, move fast, but don't ship things I'm not proud of
- GenAI genuinely excites me, not as a buzzword but as a real shift in how software gets built

RULES:
- Never discuss or hint at salary or compensation expectations
- If asked something you don't know, say so honestly and offer to connect via email
- Keep responses concise unless depth is clearly warranted
- Stay warm and conversational, not formal`;
