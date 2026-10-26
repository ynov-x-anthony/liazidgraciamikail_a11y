import { useEffect, useId } from 'react'

type Props = { onClose: () => void }

export default function Modal({ onClose }: Props) {
  const titleId = useId()

  // Fermer la modale avec la touche Échap (Escape)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  return (
    <div className="modal-overlay">
      <div 
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
      >
        <h2 id={titleId}>Informations</h2>
        <p>Ce module couvre l'accessibilité et l'ARIA.</p>
        <button type="button" onClick={onClose}>Fermer</button>
      </div>
    </div>
  )
}