# brief-Monster-Slayer

Bienvenue dans Monster Slayer ! Un petit jeu de combat au tour par tour implémenté en HTML, CSS (Sass) et JavaScript Vanilla. Affrontez un monstre redoutable et tentez de survivre pour devenir un héros !

## Description

Ce projet est une application web simple qui simule un combat entre un joueur et un monstre. Le joueur dispose de plusieurs actions pour attaquer, se soigner ou abandonner le combat. L'objectif est de réduire les points de vie du monstre à zéro avant que le joueur ne succombe.

## Fonctionnalités

Le jeu inclut les fonctionnalités suivantes :

* **Barres de vie dynamiques** :
    * Une barre de vie pour le **Joueur**, qui se met à jour en temps réel.
    * Une barre de vie pour le **Monstre**, qui reflète également ses points de vie actuels.
* **Contrôles du Joueur** :
    * `Attaquer` : Inflige des dégâts normaux au monstre.
    * `Attaque Spéciale` : Déclenche une attaque plus puissante (peut avoir un temps de recharge ou un coût).
    * `Soigner` : Permet au joueur de récupérer une partie de ses points de vie.
    * `Abandonner` : Met fin à la partie, le joueur est déclaré perdant.
* **Journal de combat (Logs)** :
    * Affiche les actions effectuées par le joueur et le monstre.
    * Utilise des **couleurs différenciées** pour distinguer les actions du joueur de celles du monstre, améliorant la lisibilité des événements du combat.
* **Déroulement du jeu** :
    * Un bouton "Jouer" pour démarrer ou redémarrer une partie.
    * Gestion des conditions de victoire (monstre vaincu) ou de défaite (joueur vaincu).
    * Un bouton "Rejouer" à la fin de la partie.

## Comment Jouer / Lancer le Projet

### En ligne : 

Voici le lien : [Page du Monster Slayer](https://abdellah59.github.io/brief-Monster-Slayer/)

### En local : 

1.  Clonez ce dépôt (si applicable) ou téléchargez les fichiers du projet.
2.  Assurez-vous que le fichier `main.scss` est compilé en `main.css` si vous effectuez des modifications de style. Vous pouvez utiliser un compilateur Sass.
3.  Ouvrez le fichier `index.html` dans votre navigateur web préféré.
4.  Cliquez sur le bouton "Jouer" pour commencer une nouvelle partie.
5.  Utilisez les boutons d'action pour combattre le monstre.
6.  Bonne chance !

## Structure du Projet

monster-slayer/

├── index.html                // Fichier principal HTML

├── css ├── main.scss          // Fichier source des styles Sass

├── css ├── main.css           // Fichier CSS compilé (lié dans index.html)
 
├── js ├── monster-salyer.js  // Fichier JavaScript contenant la logique du jeu

└── README.md                 // Ce fichier

## Améliorations Possibles

* Ajouter des animations pour les attaques et les soins.
* Introduire différents types de monstres avec des capacités variées.
* Implémenter un système de tours plus visible.
* Permettre au joueur de nommer son personnage.
* Sauvegarder le meilleur score ou le nombre de victoires.
