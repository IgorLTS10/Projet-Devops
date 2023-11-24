# Projet-Devops

# GitFlow

Ce projet suit le modèle de flux de travail GitFlow pour organiser le développement et la gestion des versions. GitFlow est une méthodologie de gestion de branches qui définit un ensemble strict de règles pour la création et la fusion des branches. Voici comment nous avons configuré notre flux de travail GitFlow :

# Branches Principales

master : La branche master est la branche principale du projet. Elle représente la version la plus stable et à jour du logiciel. Les déploiements en production sont effectués à partir de cette branche.

develop : La branche develop est utilisée comme branche de développement principale. Toutes les fonctionnalités et correctifs sont fusionnés dans cette branche avant d'être intégrés dans la branche master.

# Branches de Fonctionnalités

feature/xxx : Les nouvelles fonctionnalités sont développées dans des branches de fonctionnalités spécifiques. Ces branches sont créées à partir de la branche develop et fusionnées de nouveau dans develop une fois que la fonctionnalité est terminée.

# Branches de Correctifs

fix/xxx : Les correctifs de bugs sont gérés de manière similaire aux fonctionnalités, mais à partir de la branche develop. Une fois le correctif appliqué, il est fusionné à la fois dans develop et master.



# Règles de Protection des Branches
Ce projet intègre des règles de protection des branches sur GitHub pour garantir un processus de fusion robuste et fiable. Les règles actuelles sont définies comme suit :

# Status Checks Obligatoires
Avant toute fusion dans une branche qui correspond à cette règle, les status checks doivent être passés avec succès. Les status checks sont des vérifications automatisées qui assurent la qualité du code, les tests réussis, et d'autres critères définis par l'équipe de développement. Voici comment cela fonctionne :

Les commits doivent d'abord être poussés vers une autre branche.
Après que les status checks ont réussi, les commits peuvent être fusionnés ou poussés directement vers une branche qui correspond à cette règle.
Cela garantit que seuls les changements validés sont intégrés dans les branches principales.

# Mise à Jour Obligatoire des Branches
Afin de garantir que les demandes de fusion (pull requests) ciblant une branche correspondante ont été testées avec le code le plus récent, cette règle exige que les branches soient à jour avant la fusion. Cependant, cette exigence ne prend effet que si au moins un status check est activé.
