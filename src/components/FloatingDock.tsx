import { useState } from 'react'
import { recruiterSnapshot } from '../data'
import { IconCheck, IconCopy, IconFileText, IconGithub, IconLinkedin, IconSparkles } from './Icons'

type Props = {
  onOpenRecruiterModal: () => void
  onOpenResumeModal: () => void
  onToast: (msg: string) => void
}

export default function FloatingDock({ onOpenRecruiterModal, onOpenResumeModal, onToast }: Props) {
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(recruiterSnapshot.email)
    setCopied(true)
    onToast('sateeshanangi80@gmail.com copied to clipboard!')
    setTimeout(() => setCopied(false), 2200)
  }

  return (
    <aside className="floating-dock-wrap" aria-label="Recruiter quick access toolbar">
      <div className="floating-dock">
        <button
          className="dock-item highlight"
          onClick={onOpenRecruiterModal}
          title="Open Recruiter 30-Second Snapshot"
        >
          <IconSparkles size={16} />
          <span className="dock-label">Recruiter Snapshot</span>
        </button>

        <div className="dock-separator"></div>

        <button
          className="dock-item"
          onClick={onOpenResumeModal}
          title="Preview or Download Resume"
        >
          <IconFileText size={16} />
          <span className="dock-label">Resume</span>
        </button>

        <button
          className="dock-item"
          onClick={handleCopyEmail}
          title="Copy Email Address"
        >
          {copied ? <IconCheck size={16} className="text-emerald" /> : <IconCopy size={16} />}
          <span className="dock-label">{copied ? 'Copied!' : 'Copy Email'}</span>
        </button>

        <a
          href={recruiterSnapshot.linkedIn}
          target="_blank"
          rel="noreferrer"
          className="dock-item"
          title="Connect on LinkedIn"
        >
          <IconLinkedin size={16} />
          <span className="dock-label">LinkedIn</span>
        </a>

        <a
          href={recruiterSnapshot.github}
          target="_blank"
          rel="noreferrer"
          className="dock-item"
          title="View GitHub Repositories"
        >
          <IconGithub size={16} />
          <span className="dock-label">GitHub</span>
        </a>
      </div>
    </aside>
  )
}
