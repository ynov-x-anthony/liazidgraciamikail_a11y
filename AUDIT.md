# AUDIT.md : complété

Pour chaque ligne, voici le problème correspondant dans `src/App.tsx` et son analyse selon les principes WCAG (POUR) :

| # | Problème trouvé (où, quoi) | Principe WCAG (P / O / U / R) | Pourquoi c'est bloquant, et pour qui |
|---|-----------------------------|-------------------------------|--------------------------------------|
| 1 | `<img src="/hero.jpg" />` sans `alt` | Perceptible (P) | Un lecteur d'écran ne peut pas décrire l'image ; elle est invisible pour un utilisateur aveugle ou alors malvoyante. |
| 2 | `h1` suivi directement d'un `h3` | Robuste (R) | Il manque le h2 ce qui provoque une casse dans la structure. |
| 3 | `<div className="see-more" onClick>` au lieu d'un `<button>` | Opérable (O) | Pas accesible avec un clavier et pas reconnu comme un bouton par un lecteur d'écran. |
| 4 | Bandeau `.carousel` informatif sans contrôle | Opérable (O) |il n'y a aucun moyen de le fermer ou de le masquer. |
| 5 | Trois liens distincts avec le même texte "cliquez ici" | Compréhensible (U) | Le texte d'un lien doit etre précis hors pour les utilisateurs naviguant par liste de liens. |
| 6 | Statut "annulé" / "publié" porté uniquement par la couleur du point | Perceptible (P) | L'information ne doit pas etre uniquement sur la couleur car potentielement les personnes daltoniennes pourrait rencontrer des difficultés. |