type Props = { id: string }

/** Schematic project illustrations, intentionally distinct from product screenshots. */
export default function ProjectVisual({ id }: Props) {
  if (id === 'aavtor-ai') return (
    <div className="project-visual visual-aavtor" aria-hidden="true">
      <div className="visual-window">
        <div className="visual-toolbar"><span className="visual-product">aavtor<span>.ai</span></span><span className="visual-window-label">WORKSPACE</span></div>
        <div className="visual-workspace">
          <div className="visual-rail"><span className="rail-active"/><span/><span/><span/></div>
          <div className="visual-conversation"><span className="visual-overline">ASK. DISCOVER. CONNECT.</span><strong>One conversation.<br/>More possibilities.</strong><div className="visual-query">Find what you’re looking for.<span>↗</span></div><div className="visual-results"><div><span className="result-mark">01</span><span>Discover<small>Relevant results</small></span></div><div><span className="result-mark">02</span><span>Connect<small>Keep it moving</small></span></div></div></div>
        </div>
      </div><span className="visual-footnote">PRODUCT FLOW ILLUSTRATION</span>
    </div>
  )
  if (id === 'resolve-ai') return (
    <div className="project-visual visual-resolve" aria-hidden="true"><div className="visual-window"><div className="visual-toolbar"><span className="visual-product">resolve<span> / support</span></span><span className="visual-window-label">MERN APPLICATION</span></div><div className="ticket-board"><div className="ticket-board-title"><strong>A clearer path to resolution.</strong><span>Support workspace</span></div><div className="ticket-columns">{[['New','Review account access','Check request details'],['In progress','Investigate the issue','Keep the team updated'],['Resolved','Confirm the outcome','Close the loop']].map(([title,first,second])=><div key={title}><span className="ticket-column-label">{title}<i/></span><div className="ticket-note"><span className="ticket-note-line"/><strong>{first}</strong><span className="ticket-note-line short"/></div><div className="ticket-note secondary-note"><strong>{second}</strong><span className="ticket-note-line"/></div></div>)}</div></div></div><span className="visual-footnote">WORKFLOW ILLUSTRATION · AI INTEGRATION PLANNED</span></div>
  )
  const fintech = id === 'amogapay'
  return <div className={`project-visual ${fintech ? 'visual-amoga' : 'visual-fideal'}`} aria-hidden="true"><div className="visual-window"><div className="visual-toolbar"><span className="visual-product">{fintech ? 'amogapay' : 'FI Deal'}<span> / overview</span></span><span className="visual-window-label">{fintech ? 'PAYMENTS' : 'DEAL WORKSPACE'}</span></div><div className="visual-dashboard"><div className="dashboard-title"><strong>{fintech ? 'Every transaction. In view.' : 'Clarity at every stage.'}</strong><span className="dashboard-filter">This month ↓</span></div><div className="dashboard-summary">{(fintech ? ['Transactions','Payments','Activity'] : ['Pipeline','In review','Completed']).map((label,i)=><div key={label}><span>{label}</span><span className={`summary-bar bar-${i}`}/><span className="summary-rule"/></div>)}</div><div className="dashboard-table"><div className="dashboard-table-head"><span>{fintech ? 'TRANSACTION' : 'DEAL'}</span><span>STATUS</span><span>DETAILS</span></div>{[0,1,2].map(i=><div className="dashboard-table-row" key={i}><span className="table-placeholder"/><span className={`table-status status-${i}`}/><span className="table-placeholder short"/></div>)}</div></div></div><span className="visual-footnote">INTERFACE ILLUSTRATION</span></div>
}
