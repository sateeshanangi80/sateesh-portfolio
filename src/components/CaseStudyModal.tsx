import { Project } from '../data'
import { IconArrowUpRight, IconClose, IconGithub } from './Icons'

type Props = {
  project: Project | null
  onClose: () => void
}

export default function CaseStudyModal({ project, onClose }: Props) {
  if (!project) return null

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="case-study-title">
      <div className="modal-container case-study-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-title-wrap">
            <span className="badge-pill">
              Project case study
            </span>
            <h2 id="case-study-title">{project.title} — {project.eyebrow}</h2>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
            <IconClose size={20} />
          </button>
        </div>

        <div className="modal-body">
          <div className="case-study-metric-banner">
            <div>
              <span className="metric-tag">Project focus</span>
              <div className="metric-val">{project.metric}</div>
              <small>{project.metricLabel}</small>
            </div>
            <div className="case-study-links">
              {project.live ? (
                <a href={project.live} target="_blank" rel="noreferrer" className="btn primary small">
                  {project.liveLabel || 'Live application'} <IconArrowUpRight size={14} />
                </a>
              ) : null}
              {project.github ? (
                <a href={project.github} target="_blank" rel="noreferrer" className="btn secondary small">
                  GitHub Code <IconGithub size={14} />
                </a>
              ) : null}
            </div>
          </div>

          <div className="case-grid">
            <div className="case-box challenge">
              <h4>
                The challenge
              </h4>
              <p>{project.caseStudy.challenge}</p>
            </div>

            <div className="case-box solution">
              <h4>
                The approach
              </h4>
              <p>{project.caseStudy.solution}</p>
            </div>
          </div>

          <div className="case-architecture-strip">
            <span className="label">Data & Event Flow:</span>
            <code>{project.caseStudy.architecture}</code>
          </div>

          <div className="case-highlights">
            <h4>Implementation details</h4>
            <ul>
              {project.caseStudy.techHighlights.map((hl, idx) => (
                <li key={idx}>{hl}</li>
              ))}
            </ul>
          </div>

          <div className="case-tech-tags">
            <span className="label">Current stack:</span>
            <div className="chips">
              {project.current.map((t) => (
                <span key={t} className="active">{t}</span>
              ))}
            </div>
          </div>
          {project.next.length > 0 && <section className="case-roadmap"><h4>Next: AI integration</h4><p>Planned development, separate from the current implementation.</p><div className="chips">{project.next.map(skill => <span className="planned" key={skill}>{skill}</span>)}</div></section>}
        </div>
      </div>
    </div>
  )
}
