import { useEffect, useRef, useState } from 'react'
import { experience, projects, recruiterSnapshot, skillGroups } from './data'
import type { Project } from './data'
import CaseStudyModal from './components/CaseStudyModal'
import FeaturedBuild from './components/FeaturedBuild'
import ProjectVisual from './components/ProjectVisual'
import ResumeDocument from './components/ResumeDocument'
import { IconArrowUpRight, IconCheck, IconCopy, IconDownload, IconGithub, IconLinkedin, IconMail } from './components/Icons'
import './App.css'
import './Portfolio.css'
import './Mobile.css'

const filters = [['all', 'All work'], ['production', 'Production'], ['fullstack', 'Full-stack'], ['enterprise', 'Enterprise']]

export default function App() {
  const [selected, setSelected] = useState<Project | null>(null)
  const [filter, setFilter] = useState('all')
  const [motionPaused, setMotionPaused] = useState(() => {
    try { return localStorage.getItem('portfolio-motion') === 'paused' } catch { return false }
  })
  const [reducedMotion, setReducedMotion] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  const [copyStatus, setCopyStatus] = useState('')
  const dialog = useRef<HTMLDialogElement>(null)
  const trigger = useRef<HTMLButtonElement | null>(null)
  const copyTimer = useRef<number | undefined>(undefined)
  const pause = motionPaused || reducedMotion

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)')
    const change = () => setReducedMotion(preference.matches)
    preference.addEventListener('change', change)
    return () => preference.removeEventListener('change', change)
  }, [])

  useEffect(() => {
    if (!selected || !dialog.current) return
    const element = dialog.current
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    element.showModal()
    element.querySelector<HTMLButtonElement>('[aria-label="Close modal"]')?.focus()
    return () => {
      element.close()
      document.body.style.overflow = previousOverflow
      trigger.current?.focus({ preventScroll: true })
    }
  }, [selected])

  useEffect(() => {
    if (pause || !('IntersectionObserver' in window)) return
    const elements = document.querySelectorAll<HTMLElement>('[data-reveal]:not(.entered)')
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('entered')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.08 })
    elements.forEach(element => { element.classList.add('reveal-ready'); observer.observe(element) })
    return () => { observer.disconnect(); elements.forEach(element => element.classList.remove('reveal-ready')) }
  }, [filter, pause])

  useEffect(() => () => window.clearTimeout(copyTimer.current), [])

  const openProject = (project: Project, button: HTMLButtonElement) => {
    trigger.current = button
    setSelected(project)
  }
  const toggleMotion = () => {
    const next = !motionPaused
    setMotionPaused(next)
    try { localStorage.setItem('portfolio-motion', next ? 'paused' : 'on') } catch { /* Motion controls also work without storage. */ }
  }
  const copyEmail = async () => {
    window.clearTimeout(copyTimer.current)
    try {
      await navigator.clipboard.writeText(recruiterSnapshot.email)
      setCopyStatus('Email copied')
    } catch { setCopyStatus('Copy unavailable. Use the email link below.') }
    copyTimer.current = window.setTimeout(() => setCopyStatus(''), 4000)
  }

  return <div className={`portfolio${pause ? ' motion-paused' : ''}`}>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="site-header">
      <nav className="shell site-nav" aria-label="Main navigation">
        <a className="wordmark" href="#top" aria-label="Sateesh Anangi, home"><span className="wordmark-symbol" aria-hidden="true">sa<span>.</span></span><span>Sateesh Anangi</span></a>
        <div className="site-links"><a href="#work">Work</a><a href="#experience">Experience</a><a href="#resume">Resume</a><a href="#about">About</a></div>
        <a className="nav-contact" href={`mailto:${recruiterSnapshot.email}`}>Let’s talk <IconArrowUpRight size={16}/></a>
      </nav>
    </header>
    <main id="main">
      <section className="shell intro" id="top" aria-labelledby="hero-title">
        <div className="intro-copy">
          <span className="open-label"><span aria-hidden="true"/> Open to frontend opportunities</span>
          <p className="intro-name">SATEESH ANANGI <span>/ FRONTEND ENGINEER</span></p>
          <h1 id="hero-title"><span className="headline-line">Good interfaces.</span><span className="headline-line headline-accent">Serious engineering<span className="headline-dot">.</span></span></h1>
          <p className="intro-description"><strong>3+ years turning complex product ideas into clear, usable web experiences.</strong> I build with React, Next.js, and TypeScript — from real-time AI chat to enterprise dashboards.</p>
          <div className="intro-buttons">
            <a className="action-button" href={recruiterSnapshot.resumeUrl} download="Sateesh-Anangi-Frontend-Engineer-Resume.pdf"><IconDownload size={17}/> Download resume <span className="button-format">PDF</span></a>
            <a className="text-button" href="#work">Explore my work <IconArrowUpRight size={18}/></a>
          </div>
          <ul className="hero-core-stack" aria-label="Production frontend skills">{['React', 'Next.js', 'TypeScript', 'WebSockets'].map(tech => <li key={tech}>{tech}</li>)}</ul>
          <div className="intro-socials"><span>Hyderabad, India <span aria-hidden="true">↗</span> Remote / hybrid</span><div><a href={recruiterSnapshot.github} target="_blank" rel="noreferrer" aria-label="Sateesh on GitHub"><IconGithub size={18}/></a><a href={recruiterSnapshot.linkedIn} target="_blank" rel="noreferrer" aria-label="Sateesh on LinkedIn"><IconLinkedin size={18}/></a><a href={`mailto:${recruiterSnapshot.email}`} aria-label="Email Sateesh"><IconMail size={18}/></a></div></div>
        </div>
        <div className="hero-evidence"><FeaturedBuild onOpenProject={openProject}/><p className="hero-evidence-note"><span aria-hidden="true">↳</span> A little of what I build. A lot of attention to detail.</p></div>
        <div className="hero-bottom"><a href="#overview">The quick introduction <span aria-hidden="true">↓</span></a><button className="motion-toggle" onClick={toggleMotion} aria-pressed={pause} disabled={reducedMotion}>{reducedMotion ? 'Reduced motion enabled' : motionPaused ? 'Enable animations' : 'Pause animations'} <span aria-hidden="true">{pause ? '▷' : 'Ⅱ'}</span></button></div>
      </section>

      <section className="proof-band" aria-label="Experience at a glance"><div className="shell proof-row">
        {recruiterSnapshot.keyMetrics.map(metric => <div key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></div>)}
      </div></section>

      <section className="shell recruiter-overview section-space" id="overview" aria-labelledby="overview-title">
        <div className="section-heading"><div><p className="eyebrow">01 / THE QUICK INTRODUCTION</p><h2 id="overview-title">The experience behind the interface.</h2></div><p>Production frontend depth.<br/>Full-stack curiosity. Product ownership.</p></div>
        <div className="capability-grid">{[
          { index: '01', title: 'AI products people can use.', text: 'Streaming responses, Markdown and code, document inputs, and generation progress. Frontend integrations that make complex AI workflows understandable.', tags: ['Aavtor AI', 'Production'] },
          { index: '02', title: 'Real-time, without the friction.', text: 'WebSocket messaging with reconnect handling and read receipts, WebRTC calling interfaces, and web push notifications. Built for the states between the happy paths.', tags: ['WebSockets', 'WebRTC', 'FCM'] },
          { index: '03', title: 'Built once. Used across products.', text: '30+ enterprise modules using reusable tables and forms, search, filtering, pagination, and role-based access. From Figma designs through API integration.', tags: ['Reusable UI', 'Enterprise workflows'] },
        ].map(item => <article className="capability" data-reveal key={item.index}><span className="capability-index">{item.index} <span aria-hidden="true">↗</span></span><h3>{item.title}</h3><p>{item.text}</p><div className="capability-tags">{item.tags.map(tag => <span key={tag}>{tag}</span>)}</div></article>)}</div>
      </section>

      <section className="shell work-section section-space" id="work" aria-labelledby="work-title">
        <div className="section-heading"><div><p className="eyebrow">02 / SELECTED WORK</p><h2 id="work-title">Less talk. More shipped.</h2></div><p>A closer look at the products,<br/>the problems, and my contribution.</p></div>
        <div className="work-filters" aria-label="Filter projects">{filters.map(([key, label]) => <button key={key} aria-pressed={filter === key} onClick={() => setFilter(key)}>{label}{key === 'all' && <span>{projects.length.toString().padStart(2, '0')}</span>}</button>)}</div>
        <div className="work-grid">{projects.filter(project => filter === 'all' || project.category === filter).map((project, index) => <article className={`work-card project-${project.id}`} key={project.id} data-reveal>
          <button className="work-art" onClick={event => openProject(project, event.currentTarget)} aria-label={`Read ${project.title} case study`}><ProjectVisual id={project.id}/><span className="art-label">{project.category === 'fullstack' ? 'PERSONAL / IN DEVELOPMENT' : 'PROFESSIONAL WORK'}</span><span className="art-index">0{index + 1}</span><span className="project-hover-label">Inside the project <IconArrowUpRight size={16}/></span></button>
          <div className="work-info"><div className="project-title-row"><h3>{project.title}</h3><span className="project-status">{project.category === 'fullstack' ? 'MERN · Hands-on' : project.category === 'enterprise' ? 'Fintech' : 'Production'}</span></div><p>{project.description}</p><div className="work-tech">{project.current.slice(0, 4).map(tech => <span key={tech}>{tech}</span>)}</div><div className="work-links"><button onClick={event => openProject(project, event.currentTarget)}>Read case study <IconArrowUpRight size={15}/></button><div>{project.live && <a href={project.live} target="_blank" rel="noreferrer">{project.liveLabel || 'Live site'} <IconArrowUpRight size={14}/></a>}{project.github && <a href={project.github} target="_blank" rel="noreferrer" aria-label={`${project.title} source code on GitHub`}><IconGithub size={16}/> Code</a>}</div></div></div>
        </article>)}</div>
      </section>

      <section className="shell experience-section section-space" id="experience" aria-labelledby="experience-title">
        <div className="section-heading"><div><p className="eyebrow">03 / EXPERIENCE</p><h2 id="experience-title">From design to production.</h2></div><a className="text-button" href="#resume">Read the full resume <IconArrowUpRight size={16}/></a></div>
        <div className="experience-timeline">{experience.map((job, index) => <article className="experience-row" key={job.company} data-reveal><div className="experience-meta"><span className="job-number">0{index + 1}</span><span className="job-period">{job.period}</span>{index === 0 && <span className="current-role"><span aria-hidden="true"/> Current role</span>}</div><div className="experience-detail"><h3>{job.role}</h3><span className="job-company">{job.company}</span><p>{job.summary}</p><ul className="experience-highlights">{job.highlights.map(item => <li key={item}>{item}</li>)}</ul><div className="work-tech">{job.techStack.map(tech => <span key={tech}>{tech}</span>)}</div></div></article>)}</div>
      </section>

      <section className="resume-section-wrap" id="resume" aria-labelledby="resume-section-title"><div className="shell section-space">
        <div className="section-heading"><div><p className="eyebrow">04 / THE RESUME</p><h2 id="resume-section-title">Everything in one place.</h2></div><p>The details, ready for your next step.</p></div>
        <div className="resume-layout"><aside className="resume-sidebar"><span className="resume-file-icon" aria-hidden="true">SA<span>.pdf</span></span><h3>A quick read.<br/> A clear picture.</h3><p>Experience, technical skills, selected projects, and education in a clean, single-column document.</p><a className="action-button" href={recruiterSnapshot.resumeUrl} download="Sateesh-Anangi-Frontend-Engineer-Resume.pdf"><IconDownload size={16}/> Download PDF</a><a className="text-button" href="/resume.txt" download="Sateesh-Anangi-Resume.txt">Plain text version <IconArrowUpRight size={15}/></a><a className="text-button" href={recruiterSnapshot.resumeUrl} target="_blank" rel="noreferrer">Open PDF in a new tab <IconArrowUpRight size={15}/></a><div className="resume-sidebar-note"><IconCheck size={16}/><p>Selectable text. Standard headings.<br/>Easy to read, save, and share.</p></div></aside><div className="resume-paper"><div className="resume-paper-topline"><span>RESUME / SATEESH ANANGI</span><span aria-hidden="true">↗</span></div><ResumeDocument/></div></div>
      </div></section>

      <section className="shell about-section section-space" id="about" aria-labelledby="about-title"><div className="about-copy"><p className="eyebrow">05 / ALWAYS BUILDING</p><h2 id="about-title">Frontend is my core.<br/><span>Curiosity keeps it moving.</span></h2><p>I enjoy the point where engineering meets the person using the product: a response that arrives clearly, a form that explains itself, a complicated workflow that finally feels simple.</p><p>My professional work is frontend engineering. With ResolveAI, I’m building hands-on experience across MongoDB, Express, React, and Node.js. Python, FastAPI, RAG, and AI agents are the next steps.</p><a className="text-button" href={recruiterSnapshot.github} target="_blank" rel="noreferrer">Follow what I’m building <IconGithub size={17}/></a></div><div className="skill-list">{skillGroups.map(group => <article key={group.title}><div className="skill-heading"><h3>{group.title}</h3><span className={`skill-level level-${group.level.toLowerCase().replace(' ', '-')}`}>{group.level === 'Building next' ? 'Planned / learning' : group.level}</span></div><p>{group.description}</p><ul>{group.skills.map(skill => <li key={skill}>{skill}</li>)}</ul></article>)}</div></section>

      <section className="shell contact-section" id="contact" aria-labelledby="contact-title" data-reveal><div><p className="eyebrow">LET’S BUILD SOMETHING USEFUL.</p><h2 id="contact-title">Your next frontend<br/>engineer<span>?</span></h2><p>Hiring for React, Next.js, or TypeScript?<br/>I’d love to hear about the team and the challenge.</p><div className="contact-actions"><a className="action-button" href={`mailto:${recruiterSnapshot.email}?subject=Frontend%20Engineering%20Opportunity`}>Let’s talk <IconArrowUpRight size={18}/></a><a className="text-button" href={recruiterSnapshot.resumeUrl} download="Sateesh-Anangi-Frontend-Engineer-Resume.pdf">Get my resume <IconDownload size={16}/></a></div></div><div className="contact-details"><span className="contact-location">HYDERABAD, INDIA / OPEN TO REMOTE</span><a className="contact-email" href={`mailto:${recruiterSnapshot.email}`}>{recruiterSnapshot.email}</a><button className="copy-email" onClick={copyEmail}>{copyStatus === 'Email copied' ? <IconCheck size={14}/> : <IconCopy size={14}/>} Copy email</button><span className="copy-status" role="status" aria-live="polite">{copyStatus}</span><div className="contact-socials"><a href={recruiterSnapshot.linkedIn} target="_blank" rel="noreferrer">LinkedIn <IconArrowUpRight size={15}/></a><a href={recruiterSnapshot.github} target="_blank" rel="noreferrer">GitHub <IconArrowUpRight size={15}/></a></div></div></section>
    </main>
    <footer className="shell site-footer"><span>© {new Date().getFullYear()} Sateesh Anangi</span><span>Designed with intent. Built with React.</span><a href="#top">Back to top ↑</a></footer>
    <dialog className="project-dialog" ref={dialog} aria-labelledby="case-study-title" onCancel={() => setSelected(null)}><CaseStudyModal project={selected} onClose={() => setSelected(null)}/></dialog>
  </div>
}
