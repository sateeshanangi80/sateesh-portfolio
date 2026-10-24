import { useState } from 'react'
import { recruiterSnapshot } from '../data'
import { IconCheck, IconClose, IconCopy, IconDownload, IconFileText, IconLinkedin, IconMail } from './Icons'

type Props = {
  isOpen: boolean
  onClose: () => void
  onToast: (msg: string) => void
}

export default function ResumeModal({ isOpen, onClose, onToast }: Props) {
  const [copied, setCopied] = useState(false)

  if (!isOpen) return null

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(recruiterSnapshot.email)
    setCopied(true)
    onToast('Email copied to clipboard!')
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="resume-title">
      <div className="modal-container resume-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-title-wrap">
            <span className="badge-pill">
              <IconFileText size={13} /> Curriculum Vitae Preview
            </span>
            <h2 id="resume-title">Sateesh Anangi — Engineering Resume</h2>
          </div>
          <div className="modal-header-actions">
            <a href={recruiterSnapshot.resumeUrl} target="_blank" rel="noreferrer" className="btn primary small">
              <IconDownload size={14} /> Download PDF
            </a>
            <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
              <IconClose size={20} />
            </button>
          </div>
        </div>

        <div className="modal-body resume-document">
          {/* Resume Header */}
          <header className="resume-head">
            <div>
              <h3>Sateesh Anangi</h3>
              <p className="resume-subhead">Frontend Engineer · Full-Stack & AI Application Developer</p>
              <div className="resume-contact-line">
                <span>📍 Hyderabad, India</span>
                <span>•</span>
                <span className="text-emerald">🟢 Ready to Join / Immediate Notice</span>
                <span>•</span>
                <span>📧 {recruiterSnapshot.email}</span>
              </div>
            </div>
          </header>

          {/* Professional Summary */}
          <section className="resume-section">
            <h4>PROFESSIONAL SUMMARY</h4>
            <div className="resume-divider"></div>
            <p className="resume-text">
              Frontend Engineer with 3+ years of commercial experience architecting and shipping production-grade React, Next.js, and TypeScript web applications. Proven track record owning the frontend for <strong>Aavtor AI</strong> (1,000+ active users), building real-time WebSocket streaming chat, WebRTC audio/video, Firebase push notifications, and Razorpay billing. Expanding into full-stack AI engineering with Node.js, Express, MongoDB, Python, FastAPI, and agentic RAG workflows.
            </p>
          </section>

          {/* Work Experience */}
          <section className="resume-section">
            <h4>WORK EXPERIENCE</h4>
            <div className="resume-divider"></div>

            <div className="resume-job">
              <div className="job-head">
                <div>
                  <strong>Frontend Developer</strong> — <em>My Hub Technologies</em>
                </div>
                <span>Jun 2025 — Present | Hyderabad</span>
              </div>
              <p className="job-desc">
                Sole frontend developer owning the user-facing web client and creator dashboards for <strong>Aavtor AI</strong>, a multi-agent marketplace serving 1,000+ active users.
              </p>
              <ul className="job-bullets">
                <li>Engineered real-time streaming AI chat interface with Markdown rendering, token stream optimization, syntax highlighting, and dynamic image generation tracking.</li>
                <li>Architected resilient WebSocket connection layer with heartbeat pings, exponential backoff reconnection, offline message queues, and stale-socket handling.</li>
                <li>Implemented secure OTP and QR-based Single Sign-On (SSO), WebRTC audio/video calls, Firebase web push notifications, and Razorpay checkout workflows.</li>
                <li>Delivered 30+ enterprise CRUD modules, dynamic filterable tables, and role-based access control (RBAC).</li>
              </ul>
            </div>

            <div className="resume-job">
              <div className="job-head">
                <div>
                  <strong>Junior Software Developer</strong> — <em>Yenmin Communications</em>
                </div>
                <span>Apr 2023 — Mar 2025 | Hyderabad</span>
              </div>
              <p className="job-desc">
                Built and maintained enterprise React applications, customer portals, and internal administrative dashboards.
              </p>
              <ul className="job-bullets">
                <li>Developed complex dynamic tables, multi-step forms, search filters, and nested client-side routing using modern hooks-based React patterns.</li>
                <li>Configured Redux Toolkit state architectures, Axios token interceptors, centralized error boundaries, and Yup/Zod form validation.</li>
                <li>Translated Figma wireframes into pixel-perfect, responsive Tailwind CSS layouts across mobile, tablet, and widescreen desktop.</li>
              </ul>
            </div>
          </section>

          {/* Technical Skills */}
          <section className="resume-section">
            <h4>TECHNICAL EXPERTISE</h4>
            <div className="resume-divider"></div>
            <div className="resume-skill-row">
              <strong>Frontend Core:</strong>
              <span>React.js, Next.js (App Router/SSR), TypeScript, JavaScript ES6+, HTML5, CSS3, Tailwind CSS</span>
            </div>
            <div className="resume-skill-row">
              <strong>State & APIs:</strong>
              <span>Redux Toolkit, Zustand, React Query, WebSockets (WS), WebRTC, REST APIs, Axios</span>
            </div>
            <div className="resume-skill-row">
              <strong>Backend & Data:</strong>
              <span>Node.js, Express.js, MongoDB, Mongoose, JWT Authentication, RBAC, Redis, Python, FastAPI</span>
            </div>
            <div className="resume-skill-row">
              <strong>AI & Cloud:</strong>
              <span>OpenAI API, Prompt Engineering, Text Embeddings, ChromaDB (Vector Search), Docker, Vercel, Render, Git</span>
            </div>
          </section>

          {/* Featured Engineering Projects */}
          <section className="resume-section">
            <h4>KEY ENGINEERING PROJECTS</h4>
            <div className="resume-divider"></div>

            <div className="resume-project-item">
              <div className="item-title">
                <strong>Aavtor AI (Production Multi-Agent Platform)</strong> — <a href="https://aavtor.ai" target="_blank" rel="noreferrer">https://aavtor.ai ↗</a>
              </div>
              <p>Next.js, TypeScript, Zustand, WebSockets, WebRTC, Firebase Cloud Messaging, Razorpay. Serving 1,000+ active users.</p>
            </div>

            <div className="resume-project-item">
              <div className="item-title">
                <strong>ResolveAI (Full-Stack Support & Incident AI Platform)</strong> — <a href="https://github.com/sateeshanangi80/resolve-ai" target="_blank" rel="noreferrer">github.com/sateeshanangi80/resolve-ai ↗</a>
              </div>
              <p>React, TypeScript, Node.js, Express, MongoDB, REST APIs, FastAPI AI microservice, ChromaDB vector RAG.</p>
            </div>
          </section>

          {/* Footer Actions */}
          <div className="resume-footer-strip">
            <div className="contact-quick">
              <button className="copy-btn" onClick={handleCopyEmail}>
                {copied ? <IconCheck size={14} /> : <IconCopy size={14} />}
                <span>{copied ? 'Email Copied!' : recruiterSnapshot.email}</span>
              </button>
            </div>
            <div className="footer-links">
              <a href={recruiterSnapshot.linkedIn} target="_blank" rel="noreferrer" className="btn secondary small">
                <IconLinkedin size={14} /> LinkedIn
              </a>
              <a href={recruiterSnapshot.resumeUrl} target="_blank" rel="noreferrer" className="btn primary small">
                <IconDownload size={14} /> Download PDF File
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
