# FrigoMalin — Instructions développeur

## Architecture décidée
- Frontend Vue + TypeScript construit avec Vite ; application 100 % navigateur.
- Persistance locale IndexedDB via Dexie ; fonctionnement hors ligne pour les parcours Must.
- Déploiement GitHub Pages sous `/frigomalin/` ; routage hash si plusieurs vues sont nécessaires.
- Réutiliser les types de `src/domain/types.ts` ; ne pas redéfinir les types métier.
- Repères : `src/domain/` types et règles métier ; `src/data/` Dexie et données ; `docs/adr/` décisions ; `.github/` instructions et agents.

## Interdits FrigoMalin
- Ne pas ajouter de backend, API de persistance, comptes, authentification ou synchronisation distante.
- Ne pas déplacer les données utilisateur hors du navigateur ni exposer de secret ou contenu de `.env*`.
- Ne pas traiter une DDM comme une DLC ; distinguer les deux dans les modèles et l’interface.
- Ne pas afficher des kg/€ sauvés comme des mesures sans méthode fiable ; signaler les estimations.
- Ne pas rendre les fonctions Must dépendantes d’un service réseau ; Open Food Facts reste facultatif et en ligne.

## Qualité et accessibilité
- Toute modification de `src/domain/` ou `src/data/` doit avoir des tests Vitest pertinents ; vérifier build et lint.
- Rendre les parcours clavier utilisables ; associer un label explicite à chaque champ et employer une structure HTML sémantique.
- Ne jamais transmettre une information uniquement par la couleur ; rendre erreurs et états compréhensibles par texte.
- Garder les types stricts ; aucun `any`.

## Budget Copilot
- Lire et rechercher d’abord les seuls fichiers utiles ; ne pas parcourir `node_modules/`, `dist/` ou `coverage/`.
- Respecter `.copilotignore` ; ne pas lire ni recopier les fichiers d’environnement ou exports utilisateurs.
- Ajouter une dépendance uniquement si le besoin POC est établi ; privilégier une solution simple côté navigateur.

## Commandes npm
- `npm run dev` : serveur de développement.
- `npm run build` : typecheck TypeScript et build de production.
- `npm run lint` : ESLint.
- `npm test` : tests Vitest.
