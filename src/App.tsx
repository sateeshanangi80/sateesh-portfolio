import { useEffect, useRef, useState } from 'react'
import { experience, projects, recruiterSnapshot, skillGroups } from './data'
import type { Project } from './data'
import CaseStudyModal from './components/CaseStudyModal'
import ProjectVisual from './components/ProjectVisual'
import CraftLab from './components/CraftLab'
import { IconArrowUpRight, IconGithub, IconLinkedin, IconMail, IconDownload } from './components/Icons'
import './App.css'
import './Portfolio.css'
import './Mobile.css'

export default function App() {
  const [selected, setSelected] = useState<Project | null>(null)
  const [filter, setFilter] = useState('all')
  const [featuredIndex, setFeaturedIndex] = useState(0)
  const [motionPaused, setMotionPaused] = useState(false)
  const featured = projects[featuredIndex]
  const trigger = useRef<HTMLElement | null>(null)
  const dialog = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    if (!selected) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const timer = window.setTimeout(() => dialog.current?.querySelector<HTMLButtonElement>('button')?.focus(), 0)
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelected(null)
      if (event.key === 'Tab') {
        const items = dialog.current?.querySelectorAll<HTMLElement>('a[href], button, [tabindex="0"]')
        if (!items?.length) return
        const first = items[0], last = items[items.length - 1]
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus() }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus() }
      }
    }
    window.addEventListener('keydown', onKey)
    return () => { window.clearTimeout(timer); document.body.style.overflow = previous; window.removeEventListener('keydown', onKey); trigger.current?.focus() }
  }, [selected])
  useEffect(() => {
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('entered')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12 })
    document.querySelectorAll('[data-reveal]').forEach(element => observer.observe(element))
    return () => observer.disconnect()
  }, [filter])
  return <div className={motionPaused ? 'portfolio motion-paused' : 'portfolio'}>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="site-header"><nav className="shell site-nav" aria-label="Main navigation">
      <a className="wordmark" href="#top">Sateesh Anangi<span> / Engineer</span></a>
      <div className="site-links"><a href="#work">Work</a><a href="#experience">Experience</a><a href="#about">About</a></div>
      <a className="nav-contact" href={`mailto:${recruiterSnapshot.email}`}>Let’s talk <IconArrowUpRight size={16}/></a>
    </nav></header>
    <main id="main">
      <section className="shell intro" id="top">
        <div className="intro-copy">
          <span className="open-label"><span/> Available for frontend & full-stack roles</span>
          <p className="intro-name recruiter-role"><span>Sateesh Anangi</span><span>Frontend & MERN Engineer</span></p>
          <h1><span className="headline-line">Thoughtful interfaces.</span><span className="headline-line headline-accent">Real products.</span></h1>
          <p className="intro-description"><strong>3+ years</strong> building React, Next.js, and TypeScript applications—from enterprise dashboards to real-time AI experiences.</p>
          <div className="intro-buttons"><a className="action-button" href="#work">View projects <IconArrowUpRight size={18}/></a><a className="resume-link" href={recruiterSnapshot.resumeUrl} target="_blank" rel="noreferrer">View resume <IconDownload size={17}/></a></div>
          <ul className="hero-core-stack" aria-label="Core technologies">{['React', 'Next.js', 'TypeScript', 'Node.js', 'MongoDB'].map(technology => <li key={technology}>{technology}</li>)}</ul>
          <div className="intro-socials"><span>Based in Hyderabad, India</span><i/><a href={recruiterSnapshot.github} target="_blank" rel="noreferrer" aria-label="GitHub"><IconGithub size={19}/></a><a href={recruiterSnapshot.linkedIn} target="_blank" rel="noreferrer" aria-label="LinkedIn"><IconLinkedin size={19}/></a><a href={`mailto:${recruiterSnapshot.email}`} aria-label="Email Sateesh"><IconMail size={19}/></a></div>
        </div>
        <div className="hero-evidence">
          <CraftLab/>
          <button className="hero-production-link" onClick={event => { trigger.current = event.currentTarget; setSelected(projects[0]) }}>
            <span className="production-monogram" aria-hidden="true">a</span>
            <span><strong>Aavtor AI</strong><span>Production frontend work</span></span>
            <IconArrowUpRight size={19}/>
          </button>
        </div>
        <a className="hero-scroll-cue" href="#work"><span>Selected work below</span><span aria-hidden="true">↓</span></a>
      </section>
      <div className="craft-strip"><div className="shell craft-strip-heading"><span>FRONTEND CRAFT. FULL-STACK THINKING. AI CURIOSITY.</span><button onClick={() => setMotionPaused(paused => !paused)} aria-pressed={motionPaused}>{motionPaused ? 'Resume motion' : 'Pause motion'} <span aria-hidden="true">{motionPaused ? '▷' : 'Ⅱ'}</span></button></div><div className="craft-track" aria-label="React, Next.js, TypeScript, MERN, AI interfaces"><div className="craft-track-inner" aria-hidden="true">{[0,1].map(copy => <div className="craft-track-copy" key={copy}>{['React', 'Next.js', 'TypeScript', 'MERN', 'AI interfaces'].map(skill=><span key={skill}>{skill}<i>/</i></span>)}</div>)}</div></div></div>
      <div className="shell proof-row"><div><strong>3+<span> years</span></strong><span>Building web products</span></div><div><strong>Real-time</strong><span>Chat & real-time interfaces</span></div><div><strong>30+</strong><span>Enterprise modules delivered</span></div><p>From the first interaction<br/>to the details that hold up.</p></div>
      <section className="shell work-section" id="work"><div className="section-heading"><div><p className="eyebrow">SELECTED WORK / 01</p><h2>Selected projects.</h2></div><p>Professional products and independent work.</p></div>
                <aside className="hero-work project-spotlight" aria-label="Featured projects">
          <div className="hero-work-heading"><span>A FEW THINGS I HAVE BUILT</span><span>0{featuredIndex + 1} / 04</span></div>
          <button className="hero-project" onClick={event => { trigger.current = event.currentTarget; setSelected(featured) }} aria-label={`Read ${featured.title} case study`}>
            <div className="showcase-visual" key={featured.id}><ProjectVisual id={featured.id}/></div>
            <span className="showcase-view">View project <IconArrowUpRight size={16}/></span>
          </button>
          <div className="hero-project-caption" aria-live="polite"><div><span>{featured.category === 'fullstack' ? 'INDEPENDENT / MERN + AI ROADMAP' : 'PROFESSIONAL WORK'}</span><h2>{featured.title}</h2></div><a href={featured.live} target="_blank" rel="noreferrer" aria-label={`Open ${featured.title} ${featured.liveLabel || 'live site'}`}><IconArrowUpRight size={23}/></a></div>
          <div className="showcase-controls" aria-label="Choose featured project">{projects.map((project, index) => <button key={project.id} aria-pressed={featuredIndex === index} onClick={() => setFeaturedIndex(index)}><span>0{index+1}</span>{project.title}</button>)}</div>
        </aside>
        <div className="work-filters" aria-label="Filter projects">{[['all','All work'],['production','Production'],['fullstack','Full-stack & AI'],['enterprise','Enterprise']].map(([key,label])=><button key={key} aria-pressed={filter===key} className={filter===key?'selected':''} onClick={()=>setFilter(key)}>{label}</button>)}</div>
        <div className="work-grid">{projects.filter(p=>filter==='all'||p.category===filter).map((project,index)=><article data-reveal className={`work-card project-${project.id}`} key={project.id}><button className="work-art" onClick={e=>{trigger.current=e.currentTarget;setSelected(project)}} aria-label={`Read ${project.title} case study`}><ProjectVisual id={project.id}/><span className="art-label">{project.category==='fullstack'?'INDEPENDENT PROJECT':project.category==='production'?'PRODUCTION':'PROFESSIONAL WORK'}</span><span className="art-index">0{index+1}</span><span className="project-hover-label">Read the story <IconArrowUpRight size={17}/></span></button><div className="work-info"><h3>{project.title}</h3><p>{project.description}</p><div className="work-tech">{project.current.slice(0,3).map(tech=><span key={tech}>{tech}</span>)}</div><div className="work-links"><button onClick={e=>{trigger.current=e.currentTarget;setSelected(project)}}>Read case study <IconArrowUpRight size={15}/></button>{project.live&&<a href={project.live} target="_blank" rel="noreferrer">{project.liveLabel || 'Live site'} ↗</a>}{project.github&&<a href={project.github} target="_blank" rel="noreferrer">Source code ↗</a>}</div></div></article>)}</div>
      </section>
      <section className="shell experience-section" id="experience"><div className="section-heading"><div><p className="eyebrow">EXPERIENCE / 02</p><h2>From design to shipped.</h2></div><a className="resume-link" href={recruiterSnapshot.resumeUrl} target="_blank" rel="noreferrer">Full resume <IconArrowUpRight size={17}/></a></div>{experience.map(job=><article data-reveal className="experience-row" key={job.company}><span className="job-period">{job.period}</span><div><h3>{job.role}</h3><span className="job-company">{job.company}</span><p>{job.summary}</p><div className="work-tech">{job.techStack.slice(0,4).map(tech=><span key={tech}>{tech}</span>)}</div></div></article>)}</section>
      <section data-reveal className="shell about-section" id="about"><div><p className="eyebrow">A LITTLE ABOUT ME / 03</p><h2>An engineer with<br/><span>a product mindset.</span></h2><p>I turn complex workflows into interfaces that feel simple. My work spans AI chat, real-time communication, and enterprise dashboards.</p><p>Frontend is my core. ResolveAI brings together MongoDB, Express, React, and Node.js. Next: Python, FastAPI, RAG, and AI agents.</p></div><div className="skill-list">{skillGroups.map(group=><div key={group.title}><div className="skill-heading"><h3>{group.title}</h3><span>{group.level==='Production'?'Production':group.level==='Hands-on'?'Hands-on':'Planned / learning'}</span></div><p>{group.description}</p><p>{group.skills.join(' · ')}</p></div>)}</div></section>
      <section data-reveal className="shell contact-section"><p className="eyebrow">HAVE A ROLE IN MIND?</p><h2>Have something<br/><span>in mind?</span></h2><a className="contact-orbit" href={`mailto:${recruiterSnapshot.email}`} aria-label="Email Sateesh to discuss an opportunity"><svg className="contact-ring" viewBox="0 0 160 160" aria-hidden="true"><defs><path id="contact-circle" d="M80,80 m-59,0 a59,59 0 1,1 118,0 a59,59 0 1,1 -118,0"/></defs><text><textPath href="#contact-circle" textLength="370">LET’S TALK / LET’S BUILD / LET’S TALK / </textPath></text></svg><IconArrowUpRight size={38}/></a><a className="contact-email" href={`mailto:${recruiterSnapshot.email}`}>{recruiterSnapshot.email}</a><div className="contact-socials"><a href={recruiterSnapshot.linkedIn} target="_blank" rel="noreferrer">LinkedIn <IconArrowUpRight size={14}/></a><a href={recruiterSnapshot.github} target="_blank" rel="noreferrer">GitHub <IconArrowUpRight size={14}/></a></div></section>
    </main><footer className="shell site-footer"><span>© {new Date().getFullYear()} Sateesh Anangi</span><span>Built with React. Made with care.</span><a href="#top">Back to top ↑</a></footer>
    <div ref={dialog}><CaseStudyModal project={selected} onClose={()=>setSelected(null)}/></div>
  </div>
}
