import { useState, useId } from 'react'

type Props = { title: string; children: React.ReactNode }

export default function Accordion({ title, children }: Props) {
  const [expanded, setExpanded] = useState(false)
  const panelId = useId()

  return (
    <div className="accordion">
      <button 
        type="button"
        className="accordion-trigger" 
        aria-expanded={expanded}
        aria-controls={panelId}
        onClick={() => setExpanded(!expanded)}
      >
        {title} {expanded ? '▲' : '▼'}
      </button>
      <div id={panelId} className="accordion-panel" hidden={!expanded}>
        {children}
      </div>
    </div>
  )
}