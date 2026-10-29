import { useEffect, useRef, useState } from 'react'
import { projects, recruiterSnapshot } from './data'
import type { Project } from './data'
import CaseStudyModal from './components/CaseStudyModal'
import './App.css'
import './Design.css'

export default function App() {
 const [selected, setSelected] = useState<Project | null>(null)
 const dialog = useRef<HTMLDialogElement>(null)
 const header = useRef<HTMLElement>(null)
 useEffect(() => {
  if (!header.current) return
  const update = () => document.documentElement.style.setProperty('--header-height', `${header.current?.offsetHeight ?? 80}px`)
  update()
  const observer = new ResizeObserver(update)
  observer.observe(header.current)
  return () => { observer.disconnect(); document.documentElement.style.removeProperty('--header-height') }
 }, [])
 useEffect(() => {
  if (!selected || !dialog.current) return
  const el = dialog.current
  const active = document.activeElement as HTMLElement | null
  const overflow = document.body.style.overflow
  document.body.style.overflow = 'hidden'
  el.showModal()
  return () => { el.close(); document.body.style.overflow = overflow; active?.focus() }
 }, [selected])
 return <><a className="skip-link" href="#main">Skip to content</a><div style={{"fontFamily": "'Inter',system-ui,sans-serif", "color": "#12111A", "background": "#FAFAFC", "lineHeight": "1.6", "position": "relative", "overflow": "hidden"}}>
<div style={{"position": "absolute", "top": "-260px", "right": "-120px", "width": "760px", "height": "760px", "background": "radial-gradient(closest-side,rgba(100,70,240,.16),transparent)"}}></div>

<header ref={header} className="fixed-header" style={{"position": "relative", "maxWidth": "1320px", "margin": "0 auto", "padding": "22px 32px", "display": "flex", "alignItems": "center", "justifyContent": "space-between", "flexWrap": "wrap", "gap": "16px"}}>
<a href="#top" style={{"fontWeight": "700", "fontSize": "17px", "letterSpacing": "-0.02em"}}>Sateesh Anangi</a>
<nav style={{"display": "flex", "alignItems": "center", "gap": "26px", "fontSize": "14px", "color": "#565268", "fontWeight": "500"}}><a className="lnk" href="#work">Frontend</a><a className="lnk" href="#fullstack">Full-stack and AI</a><a className="lnk" href="#experience">Experience</a><a className="lnk" href="#skills">Skills</a><a href={recruiterSnapshot.resumeUrl} download="Sateesh-Anangi-Frontend-Engineer-Resume.pdf" className="btn" style={{"minHeight": "40px", "background": "#12111A", "color": "#fff", "fontSize": "14px"}}>Resume ↓</a></nav>
</header><main id="main">

<section className="hero" id="top" style={{"position": "relative", "maxWidth": "1320px", "margin": "0 auto", "padding": "48px 32px 72px", "display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(360px,1fr))", "gap": "56px", "alignItems": "start"}}>
<div>
<div style={{"display": "inline-flex", "alignItems": "center", "gap": "10px", "fontSize": "13px", "color": "#565268", "fontWeight": "500"}}><span style={{"width": "8px", "height": "8px", "borderRadius": "50%", "background": "#1A8F5B"}}></span>Open to roles · Hyderabad, India · Remote / Hybrid</div>
<div style={{"display": "flex", "gap": "8px", "flexWrap": "wrap", "marginTop": "20px"}}><span className="role">Frontend Engineer</span><span className="role">Full-Stack (MERN) Developer</span><span className="role" style={{"borderStyle": "dashed", "color": "#565268"}}>Applied AI (building)</span></div>
<h1 style={{"fontSize": "58px", "lineHeight": "1.05", "marginTop": "24px"}}>Frontend-first engineer building full-stack products and <span style={{"color": "#4F36D1"}}>AI-powered interfaces.</span></h1>
<p style={{"fontSize": "18px", "color": "#565268", "maxWidth": "540px", "margin": "24px 0 0"}}>3+ years shipping production interfaces with React, Next.js and TypeScript. Extending into Node.js, MongoDB and applied AI through ResolveAI, an AI-assisted support platform.</p>
<div style={{"display": "flex", "gap": "12px", "flexWrap": "wrap", "marginTop": "32px"}}><a href={recruiterSnapshot.resumeUrl} download="Sateesh-Anangi-Frontend-Engineer-Resume.pdf" className="btn" style={{"background": "#4F36D1", "color": "#fff"}}>Download resume</a><a href="#fullstack" className="btn" style={{"border": "1px solid #D4D1E3", "background": "#fff"}}>See full-stack and AI work →</a></div>
<div style={{"display": "flex", "gap": "24px", "flexWrap": "wrap", "marginTop": "24px", "fontSize": "14px", "fontWeight": "600", "color": "#565268"}}><a className="lnk" href="#contact">Email</a><a className="lnk" href="#contact">LinkedIn</a><a className="lnk" href="#contact">GitHub</a></div>
</div>
<div className="card" style={{"padding": "28px", "boxShadow": "0 30px 60px -36px rgba(60,40,160,.4)"}}>
<div className="eyebrow">At a glance</div>
<div className="row" style={{"borderTop": "0", "marginTop": "6px"}}><span style={{"color": "#565268", "fontSize": "14px"}}>Production</span><span style={{"fontWeight": "500"}}>React, Next.js, TypeScript, streaming AI chat, WebSockets, WebRTC</span></div>
<div className="row"><span style={{"color": "#565268", "fontSize": "14px"}}>Full-stack</span><span style={{"fontWeight": "500"}}>Node.js, Express, MongoDB with Mongoose</span></div>
<div className="row"><span style={{"color": "#565268", "fontSize": "14px"}}>AI engineering</span><span style={{"fontWeight": "500"}}>Building: Python, FastAPI, LLM APIs, RAG, tool calling</span></div>
<div className="row"><span style={{"color": "#565268", "fontSize": "14px"}}>Currently</span><span style={{"fontWeight": "500"}}>Frontend Developer, My Hub Technologies</span></div>
<div style={{"display": "grid", "gridTemplateColumns": "repeat(3,1fr)", "gap": "12px", "paddingTop": "20px", "borderTop": "1px solid #ECEAF3"}}><div><div style={{"fontSize": "30px", "fontWeight": "700", "letterSpacing": "-0.03em", "lineHeight": "1"}}>3+</div><div style={{"fontSize": "12px", "color": "#565268"}}>Years</div></div><div><div style={{"fontSize": "30px", "fontWeight": "700", "letterSpacing": "-0.03em", "lineHeight": "1"}}>AI + live</div><div style={{"fontSize": "12px", "color": "#565268"}}>Product interfaces</div></div><div><div style={{"fontSize": "30px", "fontWeight": "700", "letterSpacing": "-0.03em", "lineHeight": "1"}}>30+</div><div style={{"fontSize": "12px", "color": "#565268"}}>Enterprise modules</div></div></div>
</div>
</section>

<section id="work" style={{"position": "relative", "maxWidth": "1320px", "margin": "0 auto", "padding": "48px 32px 24px"}}>
<div className="eyebrow">Production frontend · Case study</div>
<h2 style={{"fontSize": "40px", "lineHeight": "1.1", "marginTop": "12px"}}>Aavtor AI: a conversational multi-agent marketplace assistant</h2>
<div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(380px,1fr))", "gap": "40px", "marginTop": "36px", "alignItems": "start"}}>
<div className="card" style={{"overflow": "hidden", "boxShadow": "0 30px 60px -36px rgba(60,40,160,.4)"}}><div className="bar"><span className="dot"></span><span className="dot"></span><span className="dot"></span><span className="mono" style={{"marginLeft": "12px", "fontSize": "12px", "color": "#7B7790"}}>Aavtor AI</span></div>
<div style={{"display": "grid", "gridTemplateColumns": "64px 1fr", "minHeight": "360px"}}><div style={{"borderRight": "1px solid #ECEAF3", "background": "#FBFBFE", "padding": "18px 14px", "display": "flex", "flexDirection": "column", "gap": "12px"}}><div className="ph" style={{"height": "28px", "borderRadius": "8px"}}></div><div className="ph" style={{"height": "28px", "borderRadius": "8px"}}></div><div className="ph" style={{"height": "28px", "borderRadius": "8px"}}></div></div>
<div style={{"padding": "24px", "display": "flex", "flexDirection": "column", "gap": "12px", "background": "linear-gradient(180deg,#F4F1FF,#fff)"}}><div style={{"alignSelf": "flex-end", "maxWidth": "80%", "background": "#4F36D1", "color": "#fff", "padding": "11px 15px", "borderRadius": "14px 14px 4px 14px", "fontSize": "14px"}}>Find a verified designer for a landing page</div><div style={{"maxWidth": "88%", "background": "#fff", "border": "1px solid #E3E1EC", "padding": "13px 15px", "borderRadius": "14px 14px 14px 4px", "fontSize": "14px"}}>Searching marketplace agents. I found three matching profiles.</div><div style={{"display": "flex", "gap": "8px", "flexWrap": "wrap"}}><span className="tag">Streaming</span><span className="tag">Markdown + code</span><span className="tag">Uploads</span></div><div style={{"marginTop": "auto", "border": "1px solid #E3E1EC", "borderRadius": "12px", "padding": "11px 14px", "background": "#fff", "fontSize": "13px", "color": "#7B7790"}}>Ask anything…</div></div></div></div>
<div>
<div className="row" style={{"borderTop": "0", "paddingTop": "0"}}><b>Problem</b><span style={{"color": "#3A3750"}}>One conversational interface over a multi-agent marketplace, with streamed AI answers, live messaging and calls.</span></div>
<div className="row"><b>My role</b><span style={{"color": "#3A3750"}}>Frontend developer responsible for the Aavtor web interface and API integrations, translating Figma designs into responsive application flows and reusable components.</span></div>
<div className="row"><b>Decisions</b><span style={{"color": "#3A3750"}}>Built streaming chat with Markdown, code and document inputs, alongside real-time messaging with read receipts, heartbeats and reconnect handling. Integrated authentication, calling and checkout flows, and used Next.js server routes to keep partner API credentials server-side.</span></div>
<div className="row"><b>Engineering quality</b><span style={{"color": "#3A3750"}}>Added automated regression coverage for shared UI and API integration behavior, including loading, retry, filtering and pagination states.</span></div>
<div className="row"><b>Result</b><span style={{"color": "#3A3750"}}>Delivered the web interface for a production conversational marketplace, bringing AI responses, messaging, calls and transaction flows into one workspace.</span></div>
<div style={{"display": "flex", "gap": "8px", "flexWrap": "wrap", "marginTop": "12px"}}><span className="tag">Next.js</span><span className="tag">TypeScript</span><span className="tag">WebSockets</span><span className="tag">WebRTC</span><span className="tag">Zustand</span></div>
</div></div></section>

<section id="fullstack" style={{"position": "relative", "maxWidth": "1320px", "margin": "0 auto", "padding": "72px 32px 24px"}}>
<div className="eyebrow">Full-stack and AI · Case study</div>
<h2 style={{"fontSize": "40px", "lineHeight": "1.1", "marginTop": "12px"}}>ResolveAI: an AI-assisted support and incident platform</h2>
<p style={{"color": "#565268", "fontSize": "17px", "maxWidth": "720px", "margin": "14px 0 0"}}>A MERN support-ticket app that I am evolving step by step into an AI platform. Each item below is marked Built or Planned, so you can see exactly what works today.</p>
<div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(380px,1fr))", "gap": "32px", "marginTop": "36px", "alignItems": "start"}}>
<div style={{"display": "flex", "flexDirection": "column", "gap": "24px"}}>
<div className="card" style={{"padding": "28px"}}><div style={{"fontSize": "13px", "fontWeight": "600", "color": "#565268", "marginBottom": "14px"}}>Architecture</div>
<div style={{"display": "flex", "gap": "10px", "flexWrap": "wrap", "alignItems": "center"}}><div className="bxd">React + TypeScript</div><span>→</span><div className="bxd">Node + Express API</div><span>→</span><div className="bxd">MongoDB Atlas</div></div>
<div style={{"display": "flex", "gap": "10px", "flexWrap": "wrap", "alignItems": "center", "marginTop": "12px"}}><div className="bxd bxp">FastAPI AI service<br/><span style={{"fontWeight": "500", "fontSize": "12px"}}>planned</span></div><span>→</span><div className="bxd bxp">LLM · RAG · Agents<br/><span style={{"fontWeight": "500", "fontSize": "12px"}}>planned</span></div></div></div>
<div className="card" style={{"overflow": "hidden"}}><div className="bar"><span className="dot"></span><span className="dot"></span><span className="dot"></span><span className="mono" style={{"marginLeft": "12px", "fontSize": "12px", "color": "#7B7790"}}>Ticket detail · target design</span></div>
<div style={{"padding": "22px"}}><div style={{"display": "flex", "justifyContent": "space-between", "gap": "12px", "flexWrap": "wrap"}}><b>Payment deducted but subscription inactive</b><span className="st plan">AI · planned</span></div>
<div style={{"display": "flex", "gap": "8px", "flexWrap": "wrap", "marginTop": "12px"}}><span className="tag">Category: Billing</span><span className="tag">Priority: High</span><span className="tag">Team: Billing Support</span></div>
<div style={{"marginTop": "14px", "padding": "14px", "borderRadius": "12px", "background": "#F4F1FF", "fontSize": "14px", "color": "#3A3750"}}>Suggested reply: We found your payment and are activating your plan now.</div>
<div style={{"display": "flex", "gap": "8px", "marginTop": "12px"}}><span className="btn" style={{"minHeight": "36px", "padding": "0 14px", "fontSize": "13px", "background": "#4F36D1", "color": "#fff"}}>Accept</span><span className="btn" style={{"minHeight": "36px", "padding": "0 14px", "fontSize": "13px", "border": "1px solid #D4D1E3"}}>Edit</span><span className="btn" style={{"minHeight": "36px", "padding": "0 14px", "fontSize": "13px", "border": "1px solid #D4D1E3"}}>Reject</span></div></div></div>
</div>
<div className="card" style={{"padding": "8px 28px"}}>
<div className="row" style={{"borderTop": "0", "gridTemplateColumns": "1fr auto"}}><span>React + TypeScript frontend: ticket list, details, create and update</span><span className="st built">Built</span></div>
<div className="row" style={{"gridTemplateColumns": "1fr auto"}}><span>Express REST API with ticket CRUD and error handling</span><span className="st built">Built</span></div>
<div className="row" style={{"gridTemplateColumns": "1fr auto"}}><span>MongoDB Atlas and Mongoose models, deployed on Vercel and Render</span><span className="st built">Built</span></div>
<div className="row" style={{"gridTemplateColumns": "1fr auto"}}><span>JWT authentication and role-based access (Customer, Agent, Admin)</span><span className="st plan">Planned</span></div>
<div className="row" style={{"gridTemplateColumns": "1fr auto"}}><span>FastAPI service with LLM ticket classification and summaries</span><span className="st plan">Planned</span></div>
<div className="row" style={{"gridTemplateColumns": "1fr auto"}}><span>Human-in-the-loop suggested replies for support agents</span><span className="st plan">Planned</span></div>
<div className="row" style={{"gridTemplateColumns": "1fr auto"}}><span>RAG over company documents with vector search</span><span className="st plan">Planned</span></div>
<div className="row" style={{"gridTemplateColumns": "1fr auto"}}><span>Tool calling and multi-agent routing</span><span className="st plan">Planned</span></div>
<div style={{"display": "flex", "gap": "8px", "flexWrap": "wrap", "padding": "16px 0 20px"}}><span className="tag">React</span><span className="tag">TypeScript</span><span className="tag">Node.js</span><span className="tag">Express</span><span className="tag">MongoDB</span><span className="tag">FastAPI</span></div>
</div></div></section>

<section style={{"position": "relative", "maxWidth": "1320px", "margin": "0 auto", "padding": "56px 32px 24px"}}>
<div className="eyebrow">More work</div>
<div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(320px,1fr))", "gap": "24px", "marginTop": "20px"}}>
<button type="button" onClick={() => setSelected(projects.find(p => p.title === "FI Deal") ?? null)} className="card" style={{"padding": "28px", "display": "block"}}><div style={{"display": "flex", "justifyContent": "space-between", "alignItems": "baseline"}}><h3 style={{"fontSize": "22px"}}>FI Deal</h3><span className="st built">Production</span></div><p style={{"margin": "12px 0 18px", "color": "#565268", "fontSize": "15px"}}>Deal-management interface with reusable tables, filtering, pagination and approval workflows.</p><div style={{"display": "flex", "gap": "8px", "flexWrap": "wrap"}}><span className="tag">React</span><span className="tag">TypeScript</span><span className="tag">REST APIs</span></div></button>
<button type="button" onClick={() => setSelected(projects.find(p => p.title === "AmogaPay") ?? null)} className="card" style={{"padding": "28px", "display": "block"}}><div style={{"display": "flex", "justifyContent": "space-between", "alignItems": "baseline"}}><h3 style={{"fontSize": "22px"}}>AmogaPay</h3><span className="tag">Fintech</span></div><p style={{"margin": "12px 0 18px", "color": "#565268", "fontSize": "15px"}}>Dashboards, OTP and JWT authentication, transaction tables and validated forms.</p><div style={{"display": "flex", "gap": "8px", "flexWrap": "wrap"}}><span className="tag">Next.js</span><span className="tag">React</span><span className="tag">OTP flows</span></div></button>
</div></section>

<section id="experience" style={{"position": "relative", "maxWidth": "1320px", "margin": "0 auto", "padding": "56px 32px 24px"}}>
<div className="eyebrow">Experience</div>
<div style={{"marginTop": "20px", "borderTop": "1px solid #E3E1EC"}}>
<div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(260px,1fr))", "gap": "24px", "padding": "28px 0", "borderBottom": "1px solid #E3E1EC"}}><div style={{"fontSize": "14px", "color": "#565268"}}>Jun 2025 – Present</div><div style={{"gridColumn": "span 2"}}><h3 style={{"fontSize": "20px", "letterSpacing": "-0.02em"}}>Frontend Developer · My Hub Technologies</h3><p style={{"margin": "10px 0 0", "color": "#3A3750", "maxWidth": "680px"}}>Responsible for the Aavtor AI web frontend and API integrations, including streaming chat, messaging, calling and SSO. Across enterprise admin projects, delivered 30+ reusable CRUD modules with tables, forms, filtering, pagination and role-based screens.</p></div></div>
<div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(260px,1fr))", "gap": "24px", "padding": "28px 0", "borderBottom": "1px solid #E3E1EC"}}><div style={{"fontSize": "14px", "color": "#565268"}}>Apr 2023 – Mar 2025</div><div style={{"gridColumn": "span 2"}}><h3 style={{"fontSize": "20px", "letterSpacing": "-0.02em"}}>Software Developer · Yenmin Communications</h3><p style={{"margin": "10px 0 0", "color": "#3A3750", "maxWidth": "680px"}}>Built React screens with Redux Toolkit state and Axios interceptors, and translated Figma designs into responsive Tailwind CSS interfaces with backend and QA teams.</p></div></div>
</div></section>

<section id="skills" style={{"position": "relative", "maxWidth": "1320px", "margin": "0 auto", "padding": "56px 32px 80px"}}>
<div className="eyebrow">Skills</div>
<h2 style={{"fontSize": "34px", "lineHeight": "1.1", "marginTop": "12px"}}>What I use in production, and what I am building.</h2>
<div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(250px,1fr))", "gap": "20px", "marginTop": "28px"}}>
<div className="card" style={{"padding": "24px"}}><span className="st built">Production</span><h3 style={{"fontSize": "17px", "marginTop": "12px"}}>Frontend</h3><p style={{"margin": "8px 0 0", "color": "#565268", "fontSize": "15px"}}>React, Next.js, TypeScript, JavaScript (ES6+), Tailwind CSS, Redux Toolkit, Zustand, React Query, WebSockets, WebRTC</p></div>
<div className="card" style={{"padding": "24px"}}><span className="st built">Hands-on</span><h3 style={{"fontSize": "17px", "marginTop": "12px"}}>MERN backend</h3><p style={{"margin": "8px 0 0", "color": "#565268", "fontSize": "15px"}}>Node.js, Express, MongoDB, Mongoose, REST API design, Axios, Razorpay, Firebase Cloud Messaging</p></div>
<div className="card" style={{"padding": "24px"}}><span className="st plan">Building</span><h3 style={{"fontSize": "17px", "marginTop": "12px"}}>AI engineering</h3><p style={{"margin": "8px 0 0", "color": "#565268", "fontSize": "15px"}}>Python, FastAPI, LLM APIs, prompt engineering, structured outputs, embeddings, vector search, RAG, tool calling, AI agents</p></div>
<div className="card" style={{"padding": "24px"}}><span className="st built">Tools</span><h3 style={{"fontSize": "17px", "marginTop": "12px"}}>Workflow</h3><p style={{"margin": "8px 0 0", "color": "#565268", "fontSize": "15px"}}>Git, GitHub, Vercel, Render, MongoDB Atlas, Figma. Next: Docker and CI/CD basics</p></div>
</div></section>

<section id="contact" style={{"background": "#12111A", "color": "#fff", "position": "relative"}}>
<div style={{"maxWidth": "1320px", "margin": "0 auto", "padding": "80px 32px", "display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(340px,1fr))", "gap": "40px", "alignItems": "end"}}>
<div><div style={{"fontSize": "12px", "fontWeight": "600", "letterSpacing": ".14em", "textTransform": "uppercase", "color": "#B7A6FF"}}>Contact</div><h2 style={{"fontSize": "44px", "lineHeight": "1.08", "marginTop": "14px", "color": "#fff"}}>Hiring for frontend, full-stack (MERN) or AI application roles?</h2></div>
<div><p style={{"color": "#B9B4CE", "margin": "0 0 24px", "fontSize": "17px"}}>I'm happy to walk through any project, the code, or the decisions behind it.</p><div style={{"display": "flex", "gap": "12px", "flexWrap": "wrap"}}><a href={`mailto:${recruiterSnapshot.email}`} className="btn" style={{"background": "#fff", "color": "#12111A"}}>sateeshanangi80@gmail.com</a><a href={recruiterSnapshot.resumeUrl} download="Sateesh-Anangi-Frontend-Engineer-Resume.pdf" className="btn" style={{"background": "#4F36D1", "color": "#fff"}}>Download resume</a><a href={recruiterSnapshot.linkedIn} className="btn" style={{"border": "1px solid #3A3650", "color": "#fff"}}>LinkedIn</a><a href={recruiterSnapshot.github} className="btn" style={{"border": "1px solid #3A3650", "color": "#fff"}}>GitHub</a></div></div>
</div></section>
</main><footer style={{"background": "#12111A", "color": "#8F8AA8", "fontSize": "13px", "padding": "20px 32px 28px", "textAlign": "center", "borderTop": "1px solid #2A2740", "position": "relative"}}>© 2026 Sateesh Anangi · Frontend, MERN and AI application engineering</footer>
</div>
<dialog className="project-dialog" ref={dialog} aria-labelledby="case-study-title" onCancel={() => setSelected(null)}><CaseStudyModal project={selected} onClose={() => setSelected(null)}/></dialog></>
}
