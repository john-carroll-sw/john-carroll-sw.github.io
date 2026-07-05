import {
  Bot,
  BrainCircuit,
  CloudCog,
  Cog,
  DatabaseZap,
  FileJson,
  Gauge,
  GitBranch,
  GraduationCap,
  Medal,
  Mic2,
  Network,
  ScanSearch,
  ShieldCheck,
  Sparkles,
  Trophy,
  Video,
  Workflow,
} from "lucide-react"

export const dossier = [
  {
    icon: BrainCircuit,
    label: "AI Lane",
    value:
      "Agentic AI, RAG, enterprise search, multimodal assistants, and AI platforms for production workflows.",
  },
  {
    icon: Network,
    label: "Domains",
    value:
      "Healthcare, retail, manufacturing, aerospace, public safety, industrial systems, and enterprise operations.",
  },
  {
    icon: CloudCog,
    label: "Delivery Range",
    value:
      "Strategy, architecture, prototypes, production systems, cloud platforms, full-stack apps, and engineering mentorship.",
  },
  {
    icon: Workflow,
    label: "Operating Model",
    value:
      "Scope the workflow, align stakeholders, prototype against real data, validate outputs, then harden what proves useful.",
  },
]

export const operatingPrinciples = [
  {
    title: "Find the operating loop",
    description:
      "Start with the workflow, decision points, data constraints, and the business moment where AI can actually move the outcome.",
    icon: ScanSearch,
  },
  {
    title: "Build the useful system",
    description:
      "Prototype quickly, wire real interfaces, test with messy inputs, and keep the experience close to the people using it.",
    icon: Workflow,
  },
  {
    title: "Make it production-minded",
    description:
      "Harden retrieval, evaluation, guardrails, observability, cost, latency, and deployment until the system can be trusted.",
    icon: ShieldCheck,
  },
]

export const featuredSystems = [
  {
    title: "Supply Chain Reasoning Engine",
    summary:
      "Adaptive reasoning workflows for disruption response, scenario planning, and resilient supply chain decisions.",
    outcome: "Real-time disruption reasoning",
    image:
      "https://github.com/john-carroll-sw/supply-chain-reasoning-engine/raw/master/demo.gif",
    link: "https://github.com/john-carroll-sw/supply-chain-reasoning-engine",
    tags: ["TypeScript", "Python", "AI", "Supply Chain"],
    icon: Workflow,
  },
  {
    title: "Field Technician Assistant",
    summary:
      "Hands-free multimodal RAG for technicians working from complex technical documentation in the field.",
    outcome: "Voice, vision, and grounded retrieval",
    image:
      "https://github.com/john-carroll-sw/field-service-assistant/blob/master/docs/images/demo.gif?raw=true",
    link: "https://github.com/john-carroll-sw/field-service-assistant",
    tags: ["Azure AI Search", "OpenAI", "Voice", "RAG"],
    icon: ScanSearch,
  },
  {
    title: "Coffee Chat Voice Assistant",
    summary:
      "Realtime voice ordering system with live transcription, natural conversation, and streaming order updates.",
    outcome: "Realtime GPT-4o voice UX",
    image:
      "https://github.com/john-carroll-sw/coffee-chat-voice-assistant/blob/main/docs/Demo/Desktop4MinuteInteractionBigOrder_preview.gif?raw=true",
    link: "https://github.com/john-carroll-sw/coffee-chat-voice-assistant",
    tags: ["React", "Python", "Realtime", "Voice"],
    icon: Mic2,
  },
  {
    title: "Video Analysis with LLMs",
    summary:
      "AI vision workflow that segments video, extracts evidence, and enables interactive chat over visual content.",
    outcome: "Chat over video evidence",
    image:
      "https://github.com/john-carroll-sw/video-analysis-with-gpt-4o/blob/main/media/VideoAnalysisWithLLMs.gif?raw=true",
    link: "https://github.com/john-carroll-sw/video-analysis-with-gpt-4o",
    tags: ["Python", "Streamlit", "Vision", "FFmpeg"],
    icon: Video,
  },
  {
    title: "Planogram Analysis",
    summary:
      "Multimodal auditor for retail shelf compliance, product placement, and visual planogram inspection.",
    outcome: "Shelf compliance at a glance",
    image: "/PlanogramCompliance.png",
    link: "https://github.com/SidneyPhoon/azure-openai-planogram-analysis",
    tags: ["Python", "Azure OpenAI", "Vision", "Retail"],
    icon: Network,
  },
  {
    title: "Document Extraction to JSON",
    summary:
      "Schema-guided document extraction pipeline that turns scanned and digital PDFs into structured data.",
    outcome: "Unstructured docs to usable JSON",
    image: "/project-images/document-extraction-json.png",
    link: "https://github.com/john-carroll-sw/pdf_to_json_extractor_gpt4vision",
    tags: ["Python", "OCR", "Vision", "Extraction"],
    icon: FileJson,
  },
]

export const capabilities = [
  {
    title: "Agentic Workflows",
    description:
      "Planning, tool use, orchestration, memory, guardrails, and human-in-the-loop review for workflows that need more than a chatbot.",
    icon: Bot,
  },
  {
    title: "Enterprise RAG and Search",
    description:
      "Ingestion, chunking, indexing, semantic and hybrid search, grounding, citations, evaluation, and reliability monitoring.",
    icon: ScanSearch,
  },
  {
    title: "Voice and Multimodal Assistants",
    description:
      "Realtime speech, image analysis, video understanding, and grounded assistant experiences for hands-free or visual workflows.",
    icon: Mic2,
  },
  {
    title: "AI Automation Prototypes",
    description:
      "Rapid prototypes that prove business value quickly, then harden into secure, scalable, maintainable platforms.",
    icon: Sparkles,
  },
  {
    title: "Evaluation and Guardrails",
    description:
      "Benchmarks, safety controls, cost/latency tradeoffs, quality monitoring, and review loops that keep AI systems accountable.",
    icon: ShieldCheck,
  },
  {
    title: "Cloud-Native Full-Stack Systems",
    description:
      "React, Next.js, Python, APIs, queues, data pipelines, observability, CI/CD, and cloud architecture stitched into real products.",
    icon: CloudCog,
  },
]

export const services = [
  {
    title: "AI Workflow Automation",
    description:
      "Got a repetitive process eating up your team's time? I will find the automation opportunity, scope the solution, and build it. Document processing, data extraction, and integrations between your existing tools, delivered in days, not months.",
    icon: Cog,
  },
  {
    title: "AI Solutions Consulting",
    description:
      "Not sure where to start? I will look at how your business actually runs, identify the highest-value automation opportunities, and give you a clear, honest roadmap. No jargon, no vague promises, just a practical plan for what to build and why.",
    icon: BrainCircuit,
  },
  {
    title: "AI Coaching & Enablement",
    description:
      "Want to get your team using AI effectively? Hands-on coaching for non-technical founders and operators: how to use AI tools well, what to look for in vendors, and how to spot real value versus hype. Learn what's actually possible for a business like yours.",
    icon: GraduationCap,
  },
]

export const systemMap = [
  {
    title: "Data Sources",
    items: ["Enterprise systems", "Documents & files", "APIs & services", "Streaming data"],
    icon: DatabaseZap,
  },
  {
    title: "Ingest & Process",
    items: ["ETL pipelines", "Chunking & blending", "Embeddings", "Metadata"],
    icon: GitBranch,
  },
  {
    title: "Knowledge Layer",
    items: ["Vector stores", "Knowledge graphs", "Hybrid search", "Grounding"],
    icon: Network,
  },
  {
    title: "Agentic Layer",
    items: ["Planning", "Tool use", "Memory", "Evaluation"],
    icon: Bot,
  },
  {
    title: "Delivery",
    items: ["Web apps", "APIs", "Voice UX", "Integrations"],
    icon: CloudCog,
  },
]

export const experienceHighlights = [
  {
    organization: "Cigna / Evernorth",
    role: "Senior Principal Architect",
    timeframe: "Nov 2025 - Present",
    impact:
      "Lead applied AI architecture and forward deployed engineering for enterprise workflows, prototypes, and production systems.",
  },
  {
    organization: "Freelance",
    role: "Full-Stack Developer and Consultant",
    timeframe: "Jan 2011 - Present",
    impact:
      "Partner with clients to design, build, and host scalable web applications; recently served as sole developer for a stealth startup, shipping two MVPs to production in May 2025 after a two-month build and helping generate six-figure profits and new contracts.",
  },
  {
    organization: "Microsoft",
    role: "Senior Solution Engineer",
    timeframe: "Sep 2023 - Nov 2025",
    impact:
      "Shaped enterprise AI adoption, built agentic systems, and influenced $200M+ in AI-related revenue across Fortune 500 customers.",
  },
  {
    organization: "Boeing",
    role: "Senior AI/ML Software Engineer",
    timeframe: "Jun 2019 - Sep 2023",
    impact:
      "Delivered AI and analytics systems for high-profile programs, including work credited with $25M in annual efficiency savings.",
  },
  {
    organization: "Hexagon",
    role: "Full-Stack Software Engineer",
    timeframe: "Jun 2016 - Jul 2019",
    impact:
      "Built cloud-native public safety systems spanning IoT, command-and-control, video analytics, and DevSecOps delivery.",
  },
  {
    organization: "Auburn University",
    role: "Computer Science Teaching Assistant",
    timeframe: "Aug 2015 - May 2016",
    impact:
      "Supported computer science instruction and student learning while completing the software engineering foundation behind later production work.",
  },
  {
    organization: "Neptune Technology Group",
    role: "Software Engineer, Co-op Program",
    timeframe: "Jan 2013 - May 2015",
    impact:
      "Completed three software and electrical engineering co-op rotations in industrial technology before moving into full-stack and AI systems work.",
  },
]

export const recognition = [
  {
    title: "Fastest Production Release",
    date: "Jan 2026",
    meta: "Lead Engineer / Cigna",
    detail: "Recognized for the fastest production release in the AI Enablement Office.",
    icon: Gauge,
  },
  {
    title: "Microsoft Global Hackathon",
    date: "Aug 2025",
    meta: "Judge / AI Agents Category",
    detail: "Served as a judge for agentic AI submissions across the global hackathon.",
    icon: BrainCircuit,
  },
  {
    title: "AI Global Black Belt Hackathon",
    date: "Apr 2024",
    meta: "Lead Developer / 1st Place",
    detail: "Led development for the winning Microsoft AI Global Black Belt entry.",
    icon: Trophy,
  },
  {
    title: "Alabama 20th Annual STARS Award",
    date: "Feb 2023",
    meta: "Team Lead / Boeing",
    detail:
      "Predictability and Stability recognition tied to $25M in annual efficiency savings.",
    icon: Medal,
  },
]

export const education = [
  {
    institution: "Georgia Institute of Technology",
    date: "Expected Start: August 2026",
    meta: "M.S. Computer Science, AI Specialization",
    detail:
      "Graduate computer science study connected to applied AI systems and production engineering.",
    logo: {
      alt: "Georgia Tech",
      compactSrc: "/logos/georgia-tech-compact.png",
      href: "https://omscs.gatech.edu/",
      src: "/logos/georgia-tech.svg",
      wideSrc: "/logos/georgia-tech.svg",
    },
  },
  {
    institution: "Quantic School of Business and Technology",
    date: "March 2025 - Expected July 2026",
    meta: "Executive MBA",
    detail:
      "Business, strategy, and operating-model context for translating technical systems into useful outcomes.",
    logo: {
      alt: "Quantic School of Business and Technology",
      compactSrc: "/logos/quantic-icon.png",
      href: "https://quantic.edu/",
      src: "/logos/quantic.png",
      wideSrc: "/logos/quantic-wordmark-cropped.png",
    },
  },
  {
    institution: "Auburn University",
    date: "August 2011 - May 2016",
    meta: "B.S. Software Engineering",
    detail:
      "Undergraduate technical foundation plus hands-on computer science teaching experience.",
    logo: {
      alt: "Auburn University",
      compactSrc: "/logos/auburn-icon.png",
      href: "https://www.auburn.edu/",
      src: "/logos/auburn-white-orange.png",
      wideSrc: "/logos/auburn.svg",
    },
  },
]
