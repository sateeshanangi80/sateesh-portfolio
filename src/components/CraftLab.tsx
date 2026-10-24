import { useState } from 'react'
import MotionSurface from './MotionSurface'

const modes = [
  { id: 'interface', tab: '01 / Frontend', title: 'A better interface starts here.', status: 'Production experience', center: 'UI', tags: ['React', 'Next.js', 'TypeScript'], input: 'Complex workflows', output: 'Clear experiences', lines: ['Responsive components', 'Real-time interactions', 'Thoughtful states'] },
  { id: 'fullstack', tab: '02 / MERN', title: 'The interface is only the start.', status: 'Hands-on / ResolveAI', center: 'API', tags: ['Node.js', 'Express', 'MongoDB'], input: 'User actions', output: 'Connected services', lines: ['React client', 'Express REST API', 'MongoDB persistence'] },
  { id: 'ai', tab: '03 / AI next', title: 'Making room for intelligence.', status: 'ResolveAI / planned next', center: 'AI', tags: ['Python', 'FastAPI', 'RAG'], input: 'Questions + context', output: 'Grounded assistance', lines: ['Knowledge retrieval', 'LLM integration', 'Human-reviewed responses'] },
]

export default function CraftLab() {
  const [active, setActive] = useState(0)
  const mode = modes[active]
  return <div className={`craft-lab lab-${mode.id}`}>
    <div className="lab-topline"><span>THE INTERSECTION OF CODE & EXPERIENCE</span><span className="lab-status-dot"/></div>
    <MotionSurface><div className="lab-stage">
      <div className="lab-grid" aria-hidden="true"/>
      <div className="lab-stage-copy" aria-live="polite"><span>{mode.status}</span><h2>{mode.title}</h2></div>
      <div className="lab-network" aria-hidden="true">
        <svg viewBox="0 0 440 220" fill="none"><path className="network-guide" d="M60 110 C130 110 130 110 220 110 S330 110 380 110"/><path className="network-guide" d="M220 24 C300 24 300 196 220 196 C140 196 140 24 220 24Z"/><path className="network-beam" pathLength="1" d="M60 110 C130 110 130 110 220 110 S330 110 380 110"/><path className="network-orbit" pathLength="1" d="M220 24 C300 24 300 196 220 196 C140 196 140 24 220 24Z"/></svg>
        <div className="network-node node-input"><span>IN</span><strong>{mode.input}</strong></div>
        <div className="network-core"><span>{mode.center}</span><i/></div>
        <div className="network-node node-output"><span>OUT</span><strong>{mode.output}</strong></div>
        <span className="network-label">DESIGN / BUILD / CONNECT</span>
      </div>
      <div className="lab-code" key={mode.id}><div className="lab-code-title"><span>the approach</span><span>↗</span></div>{mode.lines.map((line,i)=><div className="lab-code-line" key={line}><span>0{i+1}</span><p>{line}</p><span className="code-line-end"/></div>)}</div>
      <div className="lab-stack">{mode.tags.map(tag=><span key={tag}>{tag}</span>)}</div>
      <span className="lab-disclaimer">INTERACTIVE PRACTICE MAP</span>
    </div></MotionSurface>
    <div className="lab-tabs" aria-label="Explore engineering focus">{modes.map((item,index)=><button key={item.id} aria-pressed={active===index} onClick={()=>setActive(index)}>{item.tab}<span>↗</span></button>)}</div>
  </div>
}
