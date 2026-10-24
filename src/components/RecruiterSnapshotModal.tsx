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

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(recruiterSnapshot.email)
    setCopied(true)
    onToast('Email copied to clipboard!')
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className="modal-container recruiter-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-title-wrap">
            <span className="badge-pill">
              <IconSparkles size={13} /> Recruiter Executive Summary
            </span>
            <h2 id="modal-title">Candidate Snapshot & Value Proposition</h2>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
            <IconClose size={20} />
          </button>
        </div>

        <div className="modal-body">
          <div className="recruiter-quick-stats">
            <div className="stat-card">
              <span className="stat-label">Core Target Role</span>
              <strong>Frontend / Full-Stack AI</strong>
            </div>
            <div className="stat-card">
              <span className="stat-label">Experience</span>
              <strong>{recruiterSnapshot.experienceYears}</strong>
            </div>
            <div className="stat-card">
              <span className="stat-label">Location</span>
              <strong>{recruiterSnapshot.location}</strong>
            </div>
            <div className="stat-card">
              <span className="stat-label">Notice Period</span>
              <strong className="text-emerald">{recruiterSnapshot.noticePeriod}</strong>
            </div>
          </div>

          <div className="recruiter-pitch">
            <h4>Quick Pitch for Technical Recruiters:</h4>
            <p>{recruiterSnapshot.quickPitch}</p>
          </div>

          <div className="reasons-grid">
            {recruiterSnapshot.whyShortlist.map((reason, idx) => (
              <div key={idx} className="reason-card">
                <div className="reason-header">
                  <div className="reason-idx">{String(idx + 1).padStart(2, '0')}</div>
                  <h4>{reason.title}</h4>
                </div>
                <p>{reason.description}</p>
              </div>
            ))}
          </div>

          <div className="modal-contact-strip">
            <div className="email-display">
              <IconMail size={16} />
              <span>{recruiterSnapshot.email}</span>
              <button className="copy-btn" onClick={handleCopyEmail} title="Copy email address">
                {copied ? <IconCheck size={14} /> : <IconCopy size={14} />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
            <div className="modal-actions">
              <a href={recruiterSnapshot.resumeUrl} target="_blank" rel="noreferrer" className="btn primary small">
                <IconDownload size={15} /> Download PDF Resume
              </a>
              <a href={recruiterSnapshot.linkedIn} target="_blank" rel="noreferrer" className="btn secondary small">
                <IconLinkedin size={15} /> LinkedIn
              </a>
              <a href={recruiterSnapshot.github} target="_blank" rel="noreferrer" className="btn secondary small">
                <IconGithub size={15} /> GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
