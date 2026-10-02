---
applyTo: "**/*.test.ts"
description: "Use when writing or changing FrigoMalin unit tests, especially date, IndexedDB, and offline behavior."
---

# Règles de tests FrigoMalin

- Utiliser des fixtures explicites et déterministes ; ne pas dépendre de l’ordre, du hasard ou de l’horloge réelle.
- Pour un test dépendant d’aujourd’hui, activer les faux timers et figer l’horloge avec `vi.setSystemTime`; restaurer les timers après le test.
- Couvrir les bornes pertinentes : hier, aujourd’hui et dates futures ; vérifier séparément DLC et DDM lorsqu’elles changent le résultat.
- Isoler la base IndexedDB de test et nettoyer ses données entre les tests.
- Ne faire aucun appel réseau réel dans les tests unitaires ; simuler Open Food Facts et les autres services externes.
