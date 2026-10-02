---
applyTo: "src/ui/**"
description: "Use when building or updating FrigoMalin UI components, forms, and interactive controls."
---

# Règles UI FrigoMalin

- Préférer les éléments HTML natifs ; pour tout contrôle personnalisé, vérifier Tab, Maj+Tab, Entrée/Espace et un focus visible.
- Associer chaque champ à un label via `for`/`id`; relier les erreurs au champ avec `aria-describedby` et nommer les commandes sans texte.
- Pour toute lecture asynchrone pertinente, afficher un état de chargement, un état vide et une erreur compréhensible selon le cas.
- Garder les composants dédiés à l’affichage et aux interactions ; placer les règles et calculs métier dans `src/domain/`.
