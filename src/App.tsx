import { useId } from 'react'
import './App.css'

function App() {
  const emailId = useId()

  return (
    <div className="page">
      {/* En-tête et navigation principale */}
      <header>
        <div className="logo">DevBlog</div>
        <nav aria-label="Navigation principale">
          <a href="#accueil" className="nav-link">Accueil</a>
          <a href="#articles" className="nav-link">Articles</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>
      </header>

      {/* Contenu principal de la page */}
      <main>
        <article>
          <h1>Pourquoi apprendre TypeScript en 2026</h1>
          <p className="meta">Publié le 3 mars 2026</p>
          
          <h2>Un typage qui rassure</h2>
          <p>TypeScript attrape une classe entière de bugs avant même d'exécuter le code...</p>
          
          <h2>Un écosystème mature</h2>
          <p>La quasi-totalité des librairies JS fournissent désormais leurs types...</p>
        </article>

        {/* Bouton like accessible */}
        <button 
          type="button" 
          className="like-btn" 
          onClick={() => alert("Merci pour le like !")}
        >
          👍 J'aime cet article
        </button>

        {/* Section Newsletter avec formulaire et label associé via useId() */}
        <section className="newsletter">
          <h2>Reste informé</h2>
          <form onSubmit={(e) => { e.preventDefault(); alert('Inscription envoyée'); }}>
            <label htmlFor={emailId}>Ton adresse email</label>
            <input id={emailId} type="email" placeholder="ton@email.fr" />
            <button type="submit" className="submit-btn">
              S'inscrire
            </button>
          </form>
        </section>
      </main>

      {/* Pied de page */}
      <footer>
        <p>© 2026 DevBlog</p>
      </footer>
    </div>
  )
}

export default App