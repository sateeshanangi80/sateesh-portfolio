import { useState } from 'react'
import { architectureFlow } from '../data'
import { IconArrowUpRight, IconBot, IconCpu, IconDatabase, IconLayers, IconTerminal, IconZap } from './Icons'

export default function ArchitectureVisualizer() {
  const [activeStep, setActiveStep] = useState(0)

  const current = architectureFlow[activeStep]

  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return <IconLayers size={18} />
      case 1:
        return <IconTerminal size={18} />
      case 2:
        return <IconZap size={18} />
      case 3:
        return <IconCpu size={18} />
      case 4:
        return <IconDatabase size={18} />
      case 5:
        return <IconBot size={18} />
      default:
        return <IconLayers size={18} />
    }
  }

  return (
    <div className="arch-visualizer">
      <div className="arch-header">
        <div className="arch-title-wrap">
          <span className="badge-pill">
            <IconTerminal size={12} /> Interactive Architecture Inspector
          </span>
          <h3>ResolveAI End-to-End System Design</h3>
          <p>
            Click any layer in the pipeline below to inspect technical trade-offs, technologies, and data flow.
          </p>
        </div>
        <div className="arch-counter">
          Layer <strong>{activeStep + 1}</strong> of {architectureFlow.length}
        </div>
      </div>

      <div className="arch-pipeline-strip" role="tablist" aria-label="System architecture layers">
        {architectureFlow.map((flow, index) => {
          const isSelected = index === activeStep
          return (
            <button
              key={flow.step}
              role="tab"
              aria-selected={isSelected}
              className={`pipeline-node ${isSelected ? 'active' : ''}`}
              onClick={() => setActiveStep(index)}
            >
              <div className="node-icon">{getStepIcon(index)}</div>
              <div className="node-info">
                <span className="node-num">{flow.step}</span>
                <strong className="node-name">{flow.name}</strong>
              </div>
              <span className={`node-badge status-${index <= 1 ? 'ready' : 'next'}`}>
                {flow.badge}
              </span>
            </button>
          )
        })}
      </div>

      <div className="arch-inspector-card">
        <div className="inspector-top">
          <div>
            <span className="step-eyebrow">SYSTEM LAYER {current.step}</span>
            <h4>{current.name}</h4>
          </div>
          <div className="tech-tag">
            <span>Stack:</span>
            <strong>{current.tech}</strong>
          </div>
        </div>

        <div className="inspector-body">
          <div className="inspector-desc">
            <h5>Role & Functionality in Production:</h5>
            <p>{current.role}</p>
          </div>

          <div className="inspector-code-preview">
            <div className="code-header">
              <span className="code-dot red"></span>
              <span className="code-dot yellow"></span>
              <span className="code-dot green"></span>
              <span className="code-title">{current.name.toLowerCase().replace(/\s+/g, '_')}_spec.ts</span>
            </div>
            <pre className="code-block">
              <code>
                {activeStep === 0 && `// Frontend Client Layer
interface TicketViewProps {
  ticketId: string;
  streamUpdates: boolean;
}
export const TicketDetail = ({ ticketId, streamUpdates }: TicketViewProps) => {
  const { data: ticket, isPending } = useTicketQuery(ticketId);
  const { messages, status } = useWebSocketStream(ticketId);
  // Optimistic UI updates with instant feedback
  return <IncidentWorkspace ticket={ticket} stream={messages} />;
};`}
                {activeStep === 1 && `// API Gateway & Role-Based Auth
router.post('/api/v1/incidents', 
  authenticateJWT,
  requireRole(['admin', 'support_engineer']),
  validateTicketPayload,
  async (req: Request, res: Response) => {
    const incident = await incidentService.create(req.body, req.user);
    res.status(201).json({ success: true, data: incident });
  }
);`}
                {activeStep === 2 && `// WebSocket Event Streamer with Heartbeats
wss.on('connection', (ws: ExtendedWebSocket, req) => {
  ws.isAlive = true;
  ws.on('pong', () => { ws.isAlive = true; });
  
  // Subscribe to Redis pub/sub ticket channel
  redisSubscriber.subscribe(\`ticket:\${ticketId}\`, (message) => {
    ws.send(JSON.stringify({ event: 'TICKET_UPDATE', payload: message }));
  });
});`}
                {activeStep === 3 && `# FastAPI AI Microservice for Incident Triage
@app.post("/api/ai/classify")
async def classify_incident(payload: TicketPayload):
    classification = await llm_engine.generate_structured(
        model="claude-3-5-sonnet",
        prompt=build_triage_prompt(payload.description),
        response_schema=TriageDecisionSchema
    )
    return {"severity": classification.severity, "tags": classification.tags}`}
                {activeStep === 4 && `# ChromaDB Vector Knowledge Retrieval (RAG)
async def query_runbook_context(query: str, top_k: int = 3):
    query_vector = await embedding_model.embed_query(query)
    results = chroma_collection.query(
        query_embeddings=[query_vector],
        n_results=top_k,
        where={"category": "production_runbooks"}
    )
    return format_grounded_context(results)`}
                {activeStep === 5 && `# Agentic Workflow Supervisor with Tool Calling
tools = [reassign_ticket_tool, trigger_pagerduty_webhook, draft_reply_tool]
supervisor_agent = create_react_agent(
    model=llm,
    tools=tools,
    state_modifier="Always request human-in-the-loop sign-off before closing P1 alerts."
)`}
              </code>
            </pre>
          </div>
        </div>

        <div className="inspector-footer">
          <div className="flow-nav">
            <button
              disabled={activeStep === 0}
              onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
              className="btn secondary small"
            >
              ← Previous Layer
            </button>
            <button
              disabled={activeStep === architectureFlow.length - 1}
              onClick={() => setActiveStep((prev) => Math.min(architectureFlow.length - 1, prev + 1))}
              className="btn secondary small"
            >
              Next Layer →
            </button>
          </div>
          <a
            href="https://github.com/sateeshanangi80/resolve-ai"
            target="_blank"
            rel="noreferrer"
            className="repo-link"
          >
            Inspect ResolveAI Repository <IconArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </div>
  )
}
