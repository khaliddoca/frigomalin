# FrigoMalin — Périmètre du POC

## Must

1. **PWA installable et utilisable hors ligne**
   Critère de réussite : sur un navigateur compatible, l’application peut être installée ; après une première ouverture en ligne, elle s’ouvre sans réseau et permet de consulter et modifier l’inventaire et la liste de courses.

2. **Stockage local des données**
   Critère de réussite : après modification de l’inventaire ou de la liste, un rechargement hors ligne conserve les données dans le même navigateur et sur le même appareil.

3. **Gestion de l’inventaire**
   Critère de réussite : l’utilisateur peut ajouter, modifier et supprimer un produit avec son nom, sa quantité et son emplacement (frigo ou placard).

4. **Suivi des DLC et DDM**
   Critère de réussite : l’utilisateur peut associer une date et son type (DLC ou DDM) à un produit, puis retrouver ces informations dans l’inventaire.

5. **Repérage des produits à consommer bientôt**
   Critère de réussite : une vue dédiée liste les produits dont la date renseignée arrive dans les 3 jours, ainsi que ceux dont la date est dépassée.

6. **Liste de courses avec détection des doublons**
   Critère de réussite : lorsqu’un produit ajouté à la liste correspond à un produit présent dans l’inventaire, l’application signale le doublon avant validation de l’ajout.

## Should

- **Scan de codes-barres avec Open Food Facts** : proposer le scan et préremplir les informations trouvées lorsque le service est accessible. La saisie manuelle reste disponible ; le scan ne doit pas bloquer l’usage hors ligne.
- **« Que cuisiner ? »** : suggérer des idées à partir des produits proches de leur date, sans dépendre d’un backend.
- **Tableau de bord des kg et € sauvés** : à réaliser après définition d’une méthode de calcul fiable ; distinguer clairement les estimations des données mesurées.

## Could

- **Filtres et tri de l’inventaire** : filtrer par emplacement et trier par nom ou date.
- **Personnalisation du délai d’alerte** : choisir le nombre de jours avant une date pour signaler un produit.

## Won’t

- **Partage ou synchronisation entre membres du foyer** : nécessite un backend, exclu du POC.
- **Backend, comptes utilisateur et authentification** : exclus ; les données restent dans le navigateur et ne sont pas synchronisées entre appareils.
- **Calcul présenté comme mesure certaine des kg ou € sauvés** : exclu tant qu’une méthode fiable n’est pas définie et vérifiée.