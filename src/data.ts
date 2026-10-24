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
  name: 'Sateesh Anangi',
  role: 'Frontend Engineer → Full-Stack AI Application Engineer',
  experienceYears: '3+ Years',
  location: 'Hyderabad, India (Open to Remote & Hybrid)',
  noticePeriod: 'Available Immediately / Short Notice',
  email: 'sateeshanangi80@gmail.com',
  github: 'https://github.com/sateeshanangi80',
  linkedIn: 'https://www.linkedin.com/in/sateesh-anangi-5338b0259',
  resumeUrl: '/resume.pdf',
  quickPitch:
    'Frontend engineer with 3+ years specializing in high-performance React/Next.js, realtime WebSockets, and production AI streaming chat UX. Currently building ResolveAI to bring full-stack MERN, Python/FastAPI, and agentic RAG capabilities to life.',
  keyMetrics: [
    { value: '3+ Years', label: 'Engineering Experience', subtext: 'React, Next.js, TS' },
    { value: '1,000+', label: 'Active Users Served', subtext: 'On Aavtor AI production' },
    { value: '30+', label: 'Enterprise Modules', subtext: 'Shipped from Figma to Prod' },
    { value: '<50ms', label: 'Realtime Latency', subtext: 'Streaming AI & WebSockets' },
  ],
  whyShortlist: [
    {
      title: 'Proven Production AI UX',
      description:
        'Sole frontend owner of Aavtor AI (1K+ users). Designed and implemented real-time streaming AI chat, code syntax highlighting, document upload pipelines, and image-generation tracking.',
      icon: 'sparkles',
    },
    {
      title: 'Resilient Realtime Engineering',
      description:
        'Expert in WebSocket connections with automated heartbeats, exponential backoff reconnects, stale-socket guards, and WebRTC audio/video integration.',
      icon: 'zap',
    },
    {
      title: 'Enterprise Architecture & Speed',
      description:
        'Delivered 30+ enterprise CRUD modules with reusable form architectures, role-based access control (RBAC), and debounced search filters without UI lag.',
      icon: 'shield',
    },
    {
      title: 'End-to-End Product Ownership',
      description:
        'Takes features from Figma designs to production deploy. Expanding depth with full-stack MERN, FastAPI, vector embeddings, and autonomous agent workflows.',
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

export const experience = [
  {
    company: 'My Hub Technologies',
    role: 'Frontend Developer',
    period: 'Jun 2025 — Present',
    badge: 'Current Role',
    summary:
      'Frontend development for Aavtor AI, spanning streaming chat, marketplace discovery, and real-time communication.',
    highlights: [
      'Built real-time streaming AI chat interface with Markdown/code syntax rendering, document upload flows, and live image-generation status tracking.',
      'Architected resilient WebSocket messaging with heartbeat pings, read receipts, auto-reconnect backoff, and stale-socket garbage collection.',
      'Integrated OTP + QR-based Single Sign-On (SSO), Firebase Cloud Messaging (FCM) web push, WebRTC audio/video calling, and Razorpay subscription flows.',
      'Delivered 30+ enterprise CRUD modules using modular component patterns, dynamic forms, and role-based access control (RBAC).',
    ],
    techStack: ['Next.js', 'React', 'TypeScript', 'Zustand', 'WebSockets', 'WebRTC', 'FCM', 'Razorpay', 'Tailwind CSS'],
  },
  {
    company: 'Yenmin Communications',
    role: 'Junior Software Developer',
    period: 'Apr 2023 — Mar 2025',
    badge: '2 Years',
    summary:
      'Built responsive React applications, dashboard interfaces, and enterprise workflows with reusable component design systems.',
    highlights: [
      'Developed dynamic data tables, complex forms, search filters, and nested client-side routing using hooks-based React patterns.',
      'Implemented Redux Toolkit state architecture, Axios interceptors for auth tokens, centralized error handling, and Yup/Zod form validation.',
      'Converted Figma wireframes and design systems into pixel-perfect, responsive Tailwind CSS layouts across mobile, tablet, and widescreen desktop.',
    ],
    techStack: ['React', 'JavaScript ES6+', 'Redux Toolkit', 'Axios', 'Tailwind CSS', 'REST APIs', 'Figma'],
  },
]

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
        "WebSocket messaging, WebRTC calling interfaces, and backend-verified subscription flows."
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
    role: 'Sub-50ms message delivery, ticket status broadcast, distributed pub/sub event queue.',
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
    role: 'Knowledge base chunking, semantic retrieval, grounded runbook solutions without hallucination.',
    badge: 'AI Engine',
  },
  {
    step: '06',
    name: 'Agentic Workflows',
    tech: 'LangChain / Tool Calling',
    role: 'Autonomous tool execution: re-assign tickets, trigger webhooks, draft resolution with human approval.',
    badge: 'Autonomous Layer',
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
