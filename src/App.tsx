import { useState } from 'react'
import Modal from './Modal'
import './App.css'

function App() {
  const [open, setOpen] = useState(false)

  return (
    <div className="page">
      {/* Skip Link pour sauter directement au contenu principal */}
      <a href="#form" className="skip-link">
        Aller au formulaire
      </a>

      <h1>Paramètres du compte</h1>

      <main id="form" tabIndex={-1} style={{ outline: 'none' }}>
        <form className="form" onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="name">Nom</label>
          <input id="name" type="text" />

          <label htmlFor="email">Email</label>
          <input id="email" type="email" />

          <button type="button" onClick={() => setOpen(true)}>
            Ouvrir les préférences avancées
          </button>
        </form>
      </main>

      {open && <Modal onClose={() => setOpen(false)} />}
    </div>
  )
}

export default App