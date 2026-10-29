import resumeSource from './resume-data.json'

export const resumeData = resumeSource

export type SkillGroup = {
  title: string
  level: 'Production' | 'Hands-on' | 'Building next'
  description: string
  skills: string[]
}

export type Project = {
  id: string
  title: string
  eyebrow: string
  tagline: string
  description: string
  category: 'all' | 'ai' | 'production' | 'fullstack' | 'enterprise'
  metric: string
  metricLabel: string
  current: string[]
  next: string[]
  github: string
  live: string
  liveLabel?: string
  caseStudy: {
    challenge: string
    solution: string
    techHighlights: string[]
    architecture: string
  }
}

export const recruiterSnapshot = {
  name: resumeData.profile.name,
  role: resumeData.profile.title,
  experienceYears: resumeData.profile.experience,
  location: resumeData.profile.location,
  noticePeriod: 'Please contact me to confirm',
  email: resumeData.profile.email,
  phone: resumeData.profile.phone,
  github: resumeData.profile.github,
  linkedIn: resumeData.profile.linkedIn,
  resumeUrl: '/resume.pdf',
  quickPitch:
    resumeData.summary,
  keyMetrics: [
    { value: '3+', label: 'Years of experience', subtext: 'React, Next.js & TypeScript' },
    { value: 'AI + live', label: 'Product interfaces', subtext: 'Aavtor AI frontend and integrations' },
    { value: '30+', label: 'Enterprise modules', subtext: 'Reusable tables, forms & workflows' },
    { value: 'AI + real-time', label: 'Production interfaces', subtext: 'Streaming chat, messaging & calls' },
  ],
  whyShortlist: [
    {
      title: 'Production AI interfaces',
      description:
        'Built Aavtor AI web experiences with streaming chat, code rendering, document inputs, and image-generation progress.',
      icon: 'sparkles',
    },
    {
      title: 'Reliable real-time experiences',
      description:
        'Implemented WebSocket heartbeats, reconnection handling, read receipts, stale-socket guards, and audio/video calling interfaces.',
      icon: 'zap',
    },
    {
      title: 'Reusable enterprise UI',
      description:
        'Delivered 30+ enterprise modules using shared forms and tables, role-based access, search filters, and pagination.',
      icon: 'shield',
    },
    {
      title: 'Product delivery & backend growth',
      description:
        'Takes features from Figma to production, adds regression tests, and builds hands-on MERN experience through ResolveAI. Python, FastAPI, and RAG are the next milestones.',
      icon: 'layers',
    },
  ],
}

export const skillGroups: SkillGroup[] = [
  {
    "title": "Frontend Engineering",
    "level": "Production",
    "description": "Customer-facing AI and enterprise interfaces.",
    "skills": [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "WebSockets",
      "WebRTC",
      "Zustand",
      "Redux Toolkit",
      "Tailwind CSS",
      "Responsive UI"
    ]
  },
  {
    "title": "MERN & Backend",
    "level": "Hands-on",
    "description": "Full-stack foundation through ResolveAI.",
    "skills": [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "Mongoose",
      "REST APIs",
      "Vercel",
      "Render"
    ]
  },
  {
    "title": "AI Product Interfaces",
    "level": "Production",
    "description": "Web frontend integrations for AI-powered experiences.",
    "skills": [
      "Streaming AI responses",
      "Markdown & code rendering",
      "Document inputs",
      "Generation progress",
      "Conversational UX",
      "AI result cards"
    ]
  },
  {
    "title": "Applied AI Roadmap",
    "level": "Building next",
    "description": "Planned for ResolveAI; not presented as shipped features.",
    "skills": [
      "Python",
      "FastAPI",
      "LLM APIs",
      "Embeddings",
      "Vector search",
      "RAG",
      "Tool calling",
      "Agent workflows"
    ]
  }
]

export const experience = resumeData.experience.map((job, index) => ({
  ...job,
  badge: index === 0 ? 'Current role' : 'Previous role',
}))

export const projects: Project[] = [
  {
    "id": "aavtor-ai",
    "title": "Aavtor AI",
    "eyebrow": "Production AI assistant & marketplace",
    "tagline": "From an AI conversation to discovery, matching, and connection.",
    "description": "A conversational AI and marketplace product with streaming responses, Active Tasks, business discovery, messaging, calls, and business tools. My focus: the web frontend and its integrations.",
    "category": "production",
    "metric": "AI + real-time",
    "metricLabel": "Web frontend & product integrations",
    "current": [
      "Next.js",
      "TypeScript",
      "React",
      "Zustand",
      "WebSockets",
      "WebRTC",
      "AI Streaming UX",
      "Document Uploads",
      "Razorpay"
    ],
    "next": [],
    "github": "",
    "live": "https://aavtar.ai/",
    "caseStudy": {
      "challenge": "Keep a complex AI product understandable as users move between streamed answers, marketplace results, saved requirements, and personal or business conversations.",
      "solution": "Build the web experience around clear response and progress states, reusable result cards, and identity-aware navigation. Connect chat, Active Tasks, conversations, and account flows without losing the user’s context.",
      "techHighlights": [
        "Streaming formatted AI responses with document inputs and generation progress.",
        "Active Tasks and marketplace results that lead into the relevant conversation.",
        "Personal and business experiences, catalog tools, and Customer Care flows.",
        "WebSocket messaging with read receipts, heartbeats and reconnect handling, plus calling and checkout integrations.",
        "Next.js server routes keep partner API credentials server-side.",
        "Automated regression coverage for shared UI and API integrations, including loading, retry, filtering and pagination states."
      ],
      "architecture": "Next.js / React web client → application APIs & real-time services → AI responses, discovery, tasks & conversations"
    }
  },
  {
    "id": "resolve-ai",
    "title": "ResolveAI",
    "eyebrow": "Personal MERN project · AI roadmap",
    "tagline": "A full-stack incident platform, growing into an AI support assistant.",
    "description": "A React and TypeScript interface backed by Node.js, Express, and MongoDB. Building the ticket workflow first, with Python, FastAPI, and retrieval-assisted support planned next.",
    "category": "fullstack",
    "metric": "MERN",
    "metricLabel": "Full-stack foundation · AI integration planned",
    "current": [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "REST APIs",
      "Vercel",
      "Render"
    ],
    "next": [
      "Python",
      "FastAPI",
      "LLM APIs",
      "Ticket classification & summaries",
      "Embeddings & vector search",
      "RAG",
      "Tool calling & agents"
    ],
    "github": "https://github.com/sateeshanangi80/resolve-ai",
    "live": "https://esolve-ai-three-alpha.vercel.app/",
    "caseStudy": {
      "challenge": "Create a clear support-ticket workflow and a backend foundation that can later support AI-assisted triage and knowledge retrieval.",
      "solution": "Start with a React client, Express API, and MongoDB ticket storage. Keep the future AI service separate so classification, summaries, and retrieval can be introduced incrementally.",
      "techHighlights": [
        "Current foundation: React / TypeScript client and Node.js / Express APIs.",
        "MongoDB / Mongoose for ticket persistence.",
        "Frontend deployment on Vercel and backend deployment on Render."
      ],
      "architecture": "Current: React → Express REST API → MongoDB. Planned: Express → Python / FastAPI → retrieval + LLM services."
    }
  },
  {
    "id": "fi-deal",
    "title": "FI Deal",
    "eyebrow": "Production enterprise application",
    "tagline": "Enterprise deal workflows with searchable data and clear actions.",
    "description": "A production deal-management interface with reusable tables, filtering, pagination, and approval workflows.",
    "category": "production",
    "metric": "Production",
    "metricLabel": "Enterprise web application",
    "current": [
      "React",
      "TypeScript",
      "REST APIs",
      "Search & Filters",
      "Pagination",
      "Reusable UI"
    ],
    "next": [],
    "github": "",
    "live": "https://fideal.in/",
    "caseStudy": {
      "challenge": "Help users navigate enterprise records and complete deal-management workflows without overwhelming the interface.",
      "solution": "Use reusable tables and forms, debounced search, server-side pagination, and explicit confirmation steps for important actions.",
      "techHighlights": [
        "Search and multi-parameter filters for enterprise records.",
        "Server-side pagination and reusable data-table patterns.",
        "Approval and confirmation workflows with clear loading and error states."
      ],
      "architecture": "React interface → REST APIs → enterprise data services"
    }
  },
  {
    "id": "amogapay",
    "title": "AmogaPay",
    "eyebrow": "Professional fintech project",
    "tagline": "Payment dashboards and authentication flows, made easier to navigate.",
    "description": "Fintech interface work spanning reusable dashboards, authentication, transaction tables, and form validation. Explore the published project study at Yenmin.",
    "category": "enterprise",
    "metric": "Fintech",
    "metricLabel": "Dashboard & authentication interfaces",
    "current": [
      "Next.js",
      "React",
      "TypeScript",
      "OTP Flows",
      "Tailwind CSS",
      "Axios"
    ],
    "next": [],
    "github": "",
    "live": "https://yenmin.com/studies/amogapay/",
    "liveLabel": "Project study",
    "caseStudy": {
      "challenge": "Make payment-related dashboards and multi-step authentication easy to follow while handling validation and session states clearly.",
      "solution": "Build reusable interface patterns for forms, transaction data, and authentication feedback, with consistent API error and session handling.",
      "techHighlights": [
        "OTP verification interface and resend states.",
        "Reusable dashboard layouts and transaction tables.",
        "Form validation and API feedback across authentication workflows."
      ],
      "architecture": "React / Next.js interface → authenticated APIs → payment and transaction services"
    }
  }
]

export const architectureFlow = [
  {
    step: '01',
    name: 'Frontend Client',
    tech: 'React 19 / Next.js + TS',
    role: 'Responsive ticket portal, real-time agent chat, optimistic UI updates & accessible forms.',
    badge: 'Production Core',
  },
  {
    step: '02',
    name: 'Gateway & Auth',
    tech: 'Node.js + Express + JWT',
    role: 'Centralized API gateway, Role-Based Access Control (Admin/Agent/User), request validation.',
    badge: 'In Development',
  },
  {
    step: '03',
    name: 'Realtime & Cache',
    tech: 'WebSockets + Redis',
    role: 'Planned ticket-status broadcasts, connection recovery, and distributed pub/sub events.',
    badge: 'Planned',
  },
  {
    step: '04',
    name: 'AI Microservice',
    tech: 'Python + FastAPI',
    role: 'Ticket sentiment analysis, automated priority classification, structured LLM extraction.',
    badge: 'Next Milestone',
  },
  {
    step: '05',
    name: 'Knowledge RAG',
    tech: 'ChromaDB + Vector Search',
    role: 'Planned document chunking, semantic retrieval, and source-backed runbook suggestions.',
    badge: 'Planned',
  },
  {
    step: '06',
    name: 'Agentic Workflows',
    tech: 'LangChain / Tool Calling',
    role: 'Autonomous tool execution: re-assign tickets, trigger webhooks, draft resolution with human approval.',
    badge: 'Planned',
  },
]

export const roadmap = [
  {
    title: 'MERN Foundation & Ticket Engine',
    status: 'completed',
    text: 'Complete ticket CRUD, field validation, service layer architecture, search, filtering, and server-side pagination.',
  },
  {
    title: 'Production Backend & Security',
    status: 'active',
    text: 'JWT authentication, RBAC authorization matrices, WebSockets for instant ticket sync, Redis caching, and Docker containerization.',
  },
  {
    title: 'FastAPI AI Microservice',
    status: 'next',
    text: 'Introduce high-speed Python/FastAPI service for ticket sentiment scoring, automated severity categorization, and structured LLM responses.',
  },
  {
    title: 'RAG Knowledge Ingestion',
    status: 'next',
    text: 'Build document ingestion, chunking, OpenAI/local embeddings, ChromaDB vector indexing, and context retrieval.',
  },
  {
    title: 'Agentic Supervisor Workflows',
    status: 'next',
    text: 'Add function/tool calling for automated triage, incident auto-routing, and human-in-the-loop approval loops.',
  },
]
