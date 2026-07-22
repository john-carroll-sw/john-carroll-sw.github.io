export type AskJohnSource = {
  label: string
  href: string
}

export type AskJohnAnswer = {
  answer: string
  sources: AskJohnSource[]
}

export type AskJohnPrompt = {
  label: string
  prompt: string
}

const sources = {
  about: { label: "About", href: "#about" },
  experience: { label: "Experience", href: "#experience" },
  systems: { label: "Systems", href: "#systems" },
  services: { label: "Services", href: "#services" },
  capabilities: { label: "Capabilities", href: "#capabilities" },
  contact: { label: "Contact", href: "#contact" },
  resume: { label: "Resume", href: "/John_Carroll_Resume.pdf" },
}

export const askJohnPrompts: AskJohnPrompt[] = [
  {
    label: "What does John build?",
    prompt: "What kind of AI systems does John build?",
  },
  {
    label: "Could he help my team?",
    prompt: "Could John help my team move an AI prototype into production?",
  },
  {
    label: "What is his background?",
    prompt: "Summarize John's work history and education.",
  },
  {
    label: "What services does he offer?",
    prompt: "What services does John offer?",
  },
]

const johnProfileSummary = [
  "John Carroll is an AI systems architect and builder based in Atlanta. He builds AI systems that move from prototype to production, with an emphasis on adoption, workflow fit, and production-grade engineering.",
  "His work spans agentic AI, enterprise RAG and search, multimodal assistants, AI platforms, cloud-native full-stack systems, evaluation, governance, and forward-deployed delivery models.",
].join("\n\n")

const fallbackAnswer: AskJohnAnswer = {
  answer: [
    johnProfileSummary,
    "Good questions to ask here: what John builds, where he has shipped systems, how he helps teams adopt AI, what services he offers, or how to contact him.",
  ].join("\n\n"),
  sources: [sources.about, sources.systems, sources.services, sources.contact],
}

function hasAny(text: string, terms: string[]) {
  return terms.some((term) => text.includes(term))
}

function normalizeQuestion(question: string) {
  return question.trim().toLowerCase()
}

export function answerFromPortfolio(question: string): AskJohnAnswer {
  const normalized = normalizeQuestion(question)

  if (!normalized) return fallbackAnswer

  if (hasAny(normalized, ["contact", "email", "linkedin", "reach", "talk", "hire", "book", "connect"])) {
    return {
      answer: [
        "The fastest path is the contact section: email John directly or connect on LinkedIn.",
        "He is a good fit for conversations around AI workflow automation, RAG and agentic systems, AI operating models, forward-deployed engineering teams, and production-minded prototypes.",
      ].join("\n\n"),
      sources: [sources.contact, sources.services, sources.resume],
    }
  }

  if (hasAny(normalized, ["service", "offer", "consult", "consulting", "coach", "automation", "advisory"])) {
    return {
      answer: [
        "John offers AI workflow automation, AI operating model advisory, forward-deployed AI team design, and practical AI coaching and enablement.",
        "The common thread is useful production work: finding a real workflow, scoping the opportunity, building or advising the system, and making sure the team can actually adopt it.",
      ].join("\n\n"),
      sources: [sources.services, sources.capabilities, sources.contact],
    }
  }

  if (hasAny(normalized, ["project", "system", "demo", "github", "portfolio", "built", "build"])) {
    return {
      answer: [
        "John's portfolio emphasizes demo-rich AI systems: HelixGuard for clinical AI governance and decision support, supply chain reasoning, field technician assistance, realtime voice assistants, video analysis, planogram inspection, and document extraction to JSON.",
        "The pattern is not just demos. The systems are framed around workflows, grounding, multimodal input, evaluation, and production delivery.",
      ].join("\n\n"),
      sources: [sources.systems, sources.capabilities, sources.resume],
    }
  }

  if (hasAny(normalized, ["rag", "retrieval", "search", "agent", "agentic", "platform", "governance", "eval", "evaluation"])) {
    return {
      answer: [
        "John's technical lane is agentic AI, enterprise RAG and search, multimodal assistants, AI platforms, evaluation, guardrails, and cloud-native full-stack delivery.",
        "He tends to approach AI as an engineering system: retrieval quality, grounding, interfaces, observability, cost, latency, governance, and adoption all matter.",
      ].join("\n\n"),
      sources: [sources.about, sources.capabilities, sources.systems],
    }
  }

  if (hasAny(normalized, ["adoption", "stakeholder", "workflow", "fail", "people", "operate", "operating", "change"])) {
    return {
      answer: [
        "John's core view is that AI usually fails because adoption, ownership, and workflow fit are not designed into the system from day one.",
        "His approach starts with the workflow and decision points, aligns stakeholders, prototypes against real constraints, then hardens what proves useful into production-minded software.",
      ].join("\n\n"),
      sources: [sources.about, sources.services, sources.capabilities],
    }
  }

  if (hasAny(normalized, ["team", "staff", "hiring", "hire", "scale", "leadership", "leader", "engineer", "pod"])) {
    return {
      answer: [
        "John has built and staffed AI and software engineering capacity, including forward-deployed team models. His experience includes hiring across engineering, data science, TPM, and ontology-oriented roles.",
        "That matters because production AI is usually a team and operating-model problem, not only a model-selection problem.",
      ].join("\n\n"),
      sources: [sources.about, sources.experience, sources.services],
    }
  }

  if (hasAny(normalized, ["experience", "resume", "work history", "career", "microsoft", "boeing", "cigna", "evernorth", "hexagon", "neptune", "freelance"])) {
    return {
      answer: [
        "John's experience includes Cigna / Evernorth, Microsoft, Boeing, Hexagon, Neptune Technology Group, Auburn University, and independent consulting.",
        "Recent work centers on enterprise AI architecture and enablement. Earlier work includes Fortune 500 AI adoption at Microsoft, aerospace AI and analytics at Boeing, public safety SaaS at Hexagon, industrial systems at Neptune, and full-stack consulting.",
      ].join("\n\n"),
      sources: [sources.experience, sources.resume, sources.about],
    }
  }

  if (hasAny(normalized, ["education", "degree", "school", "georgia tech", "gatech", "quantic", "auburn", "mba", "masters", "master", "bachelor"])) {
    return {
      answer: [
        "John completed an Executive Master of Business Administration at Quantic in July 2026 and a Bachelor of Science in Software Engineering at Auburn University. He is also an incoming Master of Science in Computer Science student with an AI specialization at Georgia Tech.",
        "His Quantic capstone was HelixGuard, a clinical AI governance and decision-support platform for clinicians, healthcare leaders, and compliance teams.",
        "That mix is pretty on-brand for him: deep software foundations, AI specialization, and operating-model/business context for making technical systems useful.",
      ].join("\n\n"),
      sources: [sources.experience, sources.resume],
    }
  }

  return fallbackAnswer
}
