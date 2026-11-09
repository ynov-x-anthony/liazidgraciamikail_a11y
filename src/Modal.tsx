import { useEffect, useRef } from 'react'

type Props = { onClose: () => void }

export default function Modal({ onClose }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const previousFocusRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    // 1. Mémorise l'élément qui avait le focus avant l'ouverture
    previousFocusRef.current = document.activeElement as HTMLElement

    const container = ref.current
    if (!container) return

    // Sélection de tous les éléments focusables de la modale
    const focusableSelector =
      'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
    const focusableElements = container.querySelectorAll<HTMLElement>(focusableSelector)

    const firstElement = focusableElements[0]
    const lastElement = focusableElements[focusableElements.length - 1]

    // Place le focus sur le premier élément de la modale dès l'ouverture
    firstElement?.focus()

    const onKeyDown = (e: KeyboardEvent) => {
      // Gestion de la touche Échap
      if (e.key === 'Escape') {
        onClose()
        return
      }

      // Implémentation du Focus Trap sur la touche Tab
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          // Shift + Tab sur le premier élément -> saute vers le dernier
          if (document.activeElement === firstElement) {
            e.preventDefault()
            lastElement?.focus()
          }
        } else {
          // Tab sur le dernier élément -> saute vers le premier
          if (document.activeElement === lastElement) {
            e.preventDefault()
            firstElement?.focus()
          }
        }
      }
    }

    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      // 2. Restaure le focus sur le bouton déclencheur à la fermeture
      previousFocusRef.current?.focus()
    }
  }, [onClose])

  return (
    <div className="modal-overlay">
      <div className="modal" role="dialog" aria-modal="true" aria-labelledby="m-title" ref={ref}>
        <h2 id="m-title">Préférences avancées</h2>
        <label htmlFor="lang">Langue</label>
        <select id="lang">
          <option>Français</option>
          <option>English</option>
        </select>
        <button type="button" onClick={onClose}>
          Fermer
        </button>
      </div>
    </div>
  )
}