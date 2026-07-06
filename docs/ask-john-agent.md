# Ask John Agent Prototype

## Goal

Add a lightweight portfolio assistant that helps visitors learn what John builds,
where his experience fits, what services he offers, and how to contact him.

## Current v2.2 Prototype

- `components/ask-john-agent.tsx` renders a floating `Ask John` drawer.
- `data/ask-john.ts` contains curated portfolio knowledge, starter prompts, and
  deterministic local answers.
- The drawer works on GitHub Pages with no backend, no secrets, and no browser
  API key exposure.
- If `NEXT_PUBLIC_ASK_JOHN_ENDPOINT` is provided at build time, the drawer will
  post questions to that endpoint first and fall back to local answers if the
  request fails.

## Recommended Backend Shape

Keep GitHub Pages as the static host and deploy one small serverless endpoint:

```text
Portfolio widget -> serverless /ask-john endpoint -> model provider -> grounded answer
```

The endpoint should own:

- Provider credentials.
- Rate limits.
- System prompt and safety rules.
- Curated John knowledge.
- Optional retrieval over resume/project docs.

The browser should never contain a Hugging Face, Cloudflare, OpenAI, or other
provider secret.

## Provider Candidates

- Cloudflare Workers AI: strong fit if we want the serverless function and model
  close together.
- Hugging Face Inference Providers: strong fit if we want broad open-model
  choice behind a simple API.
- Static-only fallback: good enough for a polished first version and costs
  nothing.

## Assistant Voice

The assistant should not pretend to be John. It should say it is John's
portfolio assistant and answer from the portfolio, resume, and curated facts.

Suggested rules:

- Be concise.
- Do not invent employers, roles, metrics, dates, clients, or degrees.
- Point users to portfolio sections and the resume when useful.
- Recommend contacting John for project-specific fit.
- If a question is outside the portfolio, say so and redirect to contact.
