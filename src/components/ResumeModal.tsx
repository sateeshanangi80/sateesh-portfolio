import { recruiterSnapshot } from '../data'
import { IconClose, IconDownload, IconFileText } from './Icons'
import ResumeDocument from './ResumeDocument'

type Props = {
  isOpen: boolean
  onClose: () => void
  onToast: (msg: string) => void
}

export default function ResumeModal({ isOpen, onClose }: Props) {
  if (!isOpen) return null
  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="resume-title">
      <div className="modal-container resume-modal" onClick={(event) => event.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-title-wrap">
            <span className="badge-pill"><IconFileText size={13} /> The resume</span>
            <h2 id="resume-title">Experience, at a glance.</h2>
          </div>
          <div className="modal-header-actions">
            <a href={recruiterSnapshot.resumeUrl} download="Sateesh-Anangi-Frontend-Engineer-Resume.pdf" className="btn primary small"><IconDownload size={14} /> Download PDF</a>
            <button className="modal-close-btn" onClick={onClose} aria-label="Close resume"><IconClose size={20} /></button>
          </div>
        </div>
        <div className="modal-body"><ResumeDocument /></div>
      </div>
    </div>
  )
}
