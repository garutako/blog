---
title: Application Restaurant
author: Garutako
image: ../../images/restaurant_app_banner.png
thumbnail: ../../images/restaurant_app.png
---

Il s’agissait de mon premier projet en équipe. Pendant 4 mois, j’ai eu l’occasion de travailler avec 4 autres développeurs (des camarades de classe dans ce cas). Deux d’entre eux étaient chargés de créer la base de données et l’architecture backend, tandis que deux autres construisaient le site web. De mon côté, je me suis occupé seul de la partie mobile.

C’était ma première expérience de travail avec Android (en dehors de mes cours). J’ai pu couvrir une grande partie du processus de développement. Voici un résumé de ce que j’ai appris et appliqué durant ce projet.

## Conception et modélisation logicielle

Durant cette session, j’apprenais les bases de la conception logicielle et de la modélisation UML dans un cours. J’ai utilisé ces connaissances dans le cadre de ce projet afin de ne pas trop complexifier mon travail. Comme je travaillais seul sur ma partie, je n’avais pas de retour extérieur sur ma programmation. Ainsi, je me suis assuré de bien définir le résultat souhaité avant de plonger dans le code des différents systèmes.

## Programmation

J’ai utilisé Java pour programmer l’application, car c’était le langage avec lequel j’étais le plus à l’aise à ce moment-là. Ce n’était pas une tâche facile, car il y a énormément à apprendre à partir de la documentation Android, même pour implémenter des fonctionnalités de base qu’on retrouve dans toutes les applications mobiles. Le premier obstacle que j’ai rencontré était l’intégration de l’API Google Maps dans mon application. C’était ma première expérience avec une API, et j’ai choisi celle de Google pour deux raisons principales :

1. La documentation est très complète, ce qui m’évitait de devoir fouiller dans des exemples ou des blogs pour comprendre comment utiliser certaines fonctionnalités.  
2. Je n’avais pas à m’inquiéter des crédits d’utilisation. Comme ce projet était réalisé dans un cadre académique, il n’a jamais été rendu public. Ainsi, notre consommation d’API restait très faible.

Un autre défi a été de gérer correctement les marqueurs sur la carte. J’ai décidé de les dessiner en fonction des coordonnées de projection de l’écran de la carte.

Le deuxième obstacle concernait la base de données. Mes coéquipiers n’ont pas pu la déployer à temps pour la présentation du projet, donc j’ai dû rapidement trouver une solution de secours pour avoir quelque chose à montrer. J’ai choisi d’utiliser SQLite, car il était facile à intégrer localement. Il m’a fallu un peu de temps pour le configurer, mais une fois cela fait, tout a bien fonctionné. Puisque la base de données avait déjà été conçue par mes coéquipiers, je n’ai eu qu’à adapter leur code SQL et le connecter au reste de mon application.

## Conception de l’interface utilisateur

De la même manière, je ne voulais pas commencer la conception de l’interface sans prototype complet. J’ai utilisé [Figma](https://www.figma.com/files/team/1369372511904256955/recents-and-sharing?fuid=1369372507615014223) à cet effet. Il est beaucoup plus simple de faire des modifications dans un outil comme Figma que dans [Android Studio](https://developer.android.com/studio). Cela m’a également permis d’expérimenter différents styles avant de me fixer sur un design. Au final, j’ai choisi un style très minimaliste afin de consacrer plus de temps au développement des systèmes.

![Prototype de design Figma de l’application](../../images/restaurant_app_figma.png) 

## Méthode Agile

Ce projet a été réalisé dans le cadre d'un cours sur la gestion de projets. L’une des exigences était d’utiliser la méthode Agile SCRUM pour gérer notre travail. Nous avons pu expérimenter tous les rôles tout au long du semestre. Chaque semaine, une nouvelle personne devenait Chef de projet, SCRUM Master, etc. Nous utilisions Jira pour suivre nos tâches et gérer notre flux de travail général. Nous faisions des réunions quotidiennes (« standups ») ainsi que des réunions hebdomadaires pour discuter de nos avancements.

## Images

Voici quelques images issues de la présentation du projet ! :)

![Page d’accueil](../../images/restaurant_app_home.png) 

![Page de la carte](../../images/restaurant_app_map.png) 

![Page de description du restaurant](../../images/restaurant_app_restaurant.png) 
