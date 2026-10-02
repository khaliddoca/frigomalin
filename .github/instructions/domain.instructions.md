---
applyTo: "src/domain/**"
description: "Use when defining FrigoMalin domain types, validation, or business rules."
---

# Règles domaine FrigoMalin

- Aux frontières des validateurs et transformations, utiliser `StockItem` et ses unions déclarées plutôt qu’un DTO métier parallèle.
- Pour une donnée externe non fiable, partir de `unknown` et la réduire explicitement ; aucun `any` ni cast qui contourne une union.
- Écrire une logique TypeScript pure, indépendante de Vue, du DOM, de Dexie et d’IndexedDB.
- Valider les dates ISO `AAAA-MM-JJ` et traiter explicitement DLC et DDM dans les règles qui les concernent.
