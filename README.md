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

