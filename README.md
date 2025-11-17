# **Browser extensions manager UI main**

Ce projet est un exercice réalisé dans le cadre des défis de [Frontend Mentor](https://www.frontendmentor.io/). 
 Il consiste à créer une interface de gestion d'extensions du navigateur en respectant la maquette fournie.

 Les utilisateurs doivent pouvoir :
   - activer ou désactiver une extension ;
   - filtrer les extensions par statut (toutes, actives, inactives) ;
   - supprimer une extension de la liste ;
   - sélectionner le thème clair ou sombre ;
   - afficher une mise en page responsive adaptée aux différentes tailles d’écran ;
   - voir les états hover et focus de tous les éléments interactifs.

 Les données sont fournies dans un fichier data.json local et peuvent être implémentées dynamiquement.

## Ce que j'ai fait

 J’ai choisi d’implémenter :
   - un système complet de cartes dynamiques en JavaScript ;
   - une architecture en modules ES et en POO (Programmmation Orientée Objet) ;
   - la synchronisation des données avec localStorage pour conserver l’état des extensions ;
   - un système d’évènement personnalisé (CustomEvent) pour actualiser automatiquement le filtrage lorsqu’une carte change d’état ;
   - un bouton de restauration pour réafficher les extensions supprimées ;
   - la gestion de l’accessibilité (blur du focus avant masquage, aria-hidden, etc.) ;
   - un filtrage réactif fonctionnant aussi bien après suppression qu’après restauration ;
   - une interface responsive fidèle à la maquette, avec transitions et états interactifs.

 Ce projet m’a permis de pratiquer :
   - la manipulation avancée du DOM ;
   - la gestion d’état et la persistance locale ;
   - la création de classes JavaScript avec méthodes et propriétés privées ;
   - la structure modulaire ;
   - la gestion d’évènements personnalisés ;
   - l’intégration responsive (mobile-first / desktop).


## Construit avec

- HTML5
- CSS3
- JavaScript

## Modèles fournis

[Aperçu du profil version desktop light-theme](https://github.com/jlepan/browser-extensions-manager-ui-main/blob/main/public/design/desktop-design-light.jpg)

[Aperçu du profil version desktop dark-theme](https://github.com/jlepan/browser-extensions-manager-ui-main/blob/main/public/design/desktop-design-dark.jpg)

[Aperçu du profil version mobile light-theme](https://github.com/jlepan/browser-extensions-manager-ui-main/blob/main/public/design/mobile-design-light.jpg)

[Aperçu du profil version mobile dark-theme](https://github.com/jlepan/browser-extensions-manager-ui-main/blob/main/design/mobile-design-dark.jpg)

## Captures d'écran du projet

![Aperçu de ma version desktop en mode clair](https://github.com/jlepan/browser-extensions-manager-ui-main/blob/main/public/apercu-projet/apercu-desktop-light.png)

![Aperçu de ma version mobile en mode clair](https://github.com/jlepan/browser-extensions-manager-ui-main/blob/main/public/apercu-projet/apercu-mobile-light.png)

![Aperçu de ma version desktop en mode sombre](https://github.com/jlepan/browser-extensions-manager-ui-main/blob/main/public/apercu-projet/apercu-desktop-dark.png)

![Aperçu de ma version mobile en mode sombre](https://github.com/jlepan/browser-extensions-manager-ui-main/blob/main/public/apercu-projet/apercu-mobile-dark.png)

## Projet en ligne

[Voir le projet en ligne](https://jlepan.github.io/browser-extensions-manager-ui-main/)

## Installation
   ```bash
   git clone https://github.com/jlepan/browser-extensions-manager-ui-main.git
   ```
2. Ouvrir le fichier index.html dans le navigateur pour voir la page.

## Auteur
- [Juliette Lepan](https://github.com/jlepan)  
- [Mon profil Frontend Mentor](https://www.frontendmentor.io/profile/jlepan)

## Crédits
Design original par [Frontend Mentor](https://www.frontendmentor.io/)
