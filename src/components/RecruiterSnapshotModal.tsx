import { useState } from 'react'
import { recruiterSnapshot } from '../data'
import { IconCheck, IconClose, IconCopy, IconDownload, IconGithub, IconLinkedin, IconMail, IconSparkles } from './Icons'

type Props = {
  isOpen: boolean
  onClose: () => void
  onToast: (msg: string) => void
}

export default function RecruiterSnapshotModal({ isOpen, onClose, onToast }: Props) {
  const [copied, setCopied] = useState(false)
  if (!isOpen) return null

  async function handleCopyEmail() {
    try {
      await navigator.clipboard.writeText(recruiterSnapshot.email)
      setCopied(true)
      onToast('Email copied')
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      onToast('Copy unavailable. Email: ' + recruiterSnapshot.email)
    }
  }

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="snapshot-title">
      <div className="modal-container recruiter-modal" onClick={(event) => event.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-title-wrap">
            <span className="badge-pill"><IconSparkles size={13} /> The 30-second overview</span>
            <h2 id="snapshot-title">Frontend depth. Product experience.</h2>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close recruiter overview"><IconClose size={20} /></button>
        </div>
        <div className="modal-body">
          <div className="recruiter-quick-stats">
            <div className="stat-card"><span className="stat-label">Target role</span><strong>{recruiterSnapshot.role}</strong></div>
            <div className="stat-card"><span className="stat-label">Experience</span><strong>{recruiterSnapshot.experienceYears}</strong></div>
            <div className="stat-card"><span className="stat-label">Based in</span><strong>{recruiterSnapshot.location}</strong></div>
            <div className="stat-card"><span className="stat-label">Core stack</span><strong>React · Next.js · TypeScript</strong></div>
          </div>
          <div className="recruiter-pitch"><h4>What I bring</h4><p>{recruiterSnapshot.quickPitch}</p></div>
          <div className="reasons-grid">
            {recruiterSnapshot.whyShortlist.map((reason, index) => (
              <div key={reason.title} className="reason-card">
                <div className="reason-header"><div className="reason-idx">{String(index + 1).padStart(2, '0')}</div><h4>{reason.title}</h4></div>
                <p>{reason.description}</p>
              </div>
            ))}
          </div>
          <div className="modal-contact-strip">
            <div className="email-display"><IconMail size={16} /><a href={`mailto:${recruiterSnapshot.email}`}>{recruiterSnapshot.email}</a><button className="copy-btn" onClick={handleCopyEmail} aria-label="Copy email address">{copied ? <IconCheck size={14} /> : <IconCopy size={14} />}</button></div>
            <div className="modal-actions">
              <a href={recruiterSnapshot.resumeUrl} download="Sateesh-Anangi-Frontend-Engineer-Resume.pdf" className="btn primary small"><IconDownload size={15} /> Download resume</a>
              <a href={recruiterSnapshot.linkedIn} target="_blank" rel="noreferrer" className="btn secondary small"><IconLinkedin size={15} /> LinkedIn</a>
              <a href={recruiterSnapshot.github} target="_blank" rel="noreferrer" className="btn secondary small"><IconGithub size={15} /> GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
