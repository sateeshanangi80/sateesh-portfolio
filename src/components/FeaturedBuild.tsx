import { useState } from 'react'
import { projects } from '../data'
import type { Project } from '../data'
import { IconArrowUpRight } from './Icons'
import ProjectVisual from './ProjectVisual'
import './FeaturedBuild.css'

type Props = {
  onOpenProject: (project: Project, trigger: HTMLButtonElement) => void
}

const builds = [
  {
    id: 'aavtor-ai',
    address: 'aavtar.ai',
    status: 'PRODUCTION / FRONTEND',
    evidence: 'Streaming AI chat, real-time messaging, and calls. One connected web experience.',
  },
  {
    id: 'fi-deal',
    address: 'fideal.in',
    status: 'PRODUCTION / ENTERPRISE',
    evidence: 'Searchable records, reusable tables, and clear approval workflows for enterprise users.',
  },
  {
    id: 'resolve-ai',
    address: 'ResolveAI / personal project',
    status: 'PERSONAL PROJECT / MERN',
    evidence: 'A support-ticket workflow built with React, Express, and MongoDB. AI integration comes next.',
  },
]

export default function FeaturedBuild({ onOpenProject }: Props) {
  const [active, setActive] = useState(0)
  const build = builds[active]
  const project = projects.find(item => item.id === build.id)!

  return (
    <div className="featured-build">
      <div className="build-kicker">
        <span>IDEAS INTO WORKING PRODUCTS</span>
        <span aria-hidden="true">0{active + 1} <i>/ 03</i></span>
      </div>
      <div className="build-frame">
        <div className="build-browser">
          <span className="build-browser-dots" aria-hidden="true"><i/><i/><i/></span>
          <span className="build-address">{build.address}</span>
          <span className="build-preview-caption">INTERFACE PREVIEW</span>
        </div>
        <button
          className="build-preview-button"
          onClick={event => onOpenProject(project, event.currentTarget)}
          aria-label={`Read the ${project.title} case study`}
        >
          <div className="build-illustration" key={project.id}>
            <ProjectVisual id={project.id}/>
            <span className="build-flow-line" aria-hidden="true"/>
            <span className="build-cursor" aria-hidden="true">
              <svg viewBox="0 0 24 28" fill="none"><path d="M3 2L20 16L12 17L8 25L3 2Z" fill="currentColor" stroke="white" strokeWidth="2" strokeLinejoin="round"/></svg>
              <span>Designed & built</span>
            </span>
          </div>
          <span className="build-open-label">Explore the build <IconArrowUpRight size={15}/></span>
        </button>
        <div className="build-caption" aria-live="polite" aria-atomic="true">
          <span className="build-status"><i aria-hidden="true"/>{build.status}</span>
          <div className="build-title-line"><h2>{project.title}</h2><span aria-hidden="true">↗</span></div>
          <p>{build.evidence}</p>
        </div>
        <div className="build-tabs" role="group" aria-label="Explore selected builds">
          {builds.map((item, index) => {
            const itemProject = projects.find(candidate => candidate.id === item.id)!
            return <button key={item.id} aria-pressed={active === index} onClick={() => setActive(index)}><span aria-hidden="true">0{index + 1}</span>{itemProject.title}</button>
          })}
        </div>
      </div>
      <p className="build-footnote"><span aria-hidden="true">✳</span> A glimpse of the interface. The case study explains the work.</p>
    </div>
  )
}
