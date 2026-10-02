# FrigoMalin — Contexte produit

## Problème utilisateur

Les foyers perdent de vue les aliments stockés dans le frigo et les placards. Ils peuvent oublier les dates de péremption, racheter des produits déjà disponibles ou manquer d’idées pour cuisiner les aliments à consommer rapidement.

Aucune donnée chiffrée fiable sur l’ampleur du problème ou les économies possibles n’est établie ici : **à vérifier**.

## Utilisateurs cibles

- **Personne qui gère les courses du foyer** — veut vérifier rapidement les stocks et éviter les achats en double ; se retrouve frustrée par des listes et des inventaires qui ne sont pas à jour.
- **Personne qui cuisine au quotidien** — veut trouver quoi préparer avec les produits proches de leur date ; perd du temps à chercher une idée et risque d’oublier certains aliments.
- **Foyer attentif à son budget et au gaspillage** — veut suivre les produits consommés à temps et les économies associées ; ne peut pas facilement mesurer les aliments et l’argent réellement préservés.

## Proposition de valeur

Aider le foyer à savoir ce qu’il possède, à repérer ce qu’il faut consommer bientôt et à organiser ses achats, depuis une application utilisable dans le navigateur, installable et disponible hors ligne.

## Besoins principaux

- Gérer un inventaire des produits du frigo et des placards.
- Ajouter des produits par saisie ou par scan de code-barres, avec les informations disponibles via Open Food Facts.
- Suivre les dates limites de consommation (DLC) et dates de durabilité minimale (DDM).
- Identifier les produits proches de leur date et proposer « Que cuisiner ? » à partir de ces produits.
- Créer une liste de courses qui signale ou évite les doublons avec l’inventaire.
- Afficher un tableau de bord des kilogrammes et euros sauvés. Les méthodes de calcul et leur fiabilité sont **à vérifier** ; ne pas présenter d’estimations comme des résultats mesurés.
- Fonctionner comme une PWA installable et permettre l’accès hors ligne aux fonctionnalités compatibles.
- Conserver les données et exécuter l’application dans le navigateur.

## Hors périmètre

- Aucun backend.
- Aucun compte utilisateur ni authentification.
- Aucune synchronisation entre appareils ou utilisateurs via un service distant.
- Aucune affirmation chiffrée sur les économies ou la réduction du gaspillage sans méthode fiable et documentée.

## Hypothèses restant à vérifier

- Les utilisateurs sont prêts à maintenir l’inventaire et les dates à jour.
- Les données Open Food Facts couvrent suffisamment les produits utilisés par les foyers ciblés.
- Les utilisateurs comprennent la différence entre DLC et DDM.
- Les suggestions de recettes basées sur les produits proches de leur date sont utiles et réalisables.
- Une liste de courses liée à l’inventaire réduit effectivement les achats en double.
- Une méthode défendable permet de calculer les kilogrammes et euros sauvés.
- Le fonctionnement hors ligne répond aux besoins malgré l’absence de backend et de synchronisation.