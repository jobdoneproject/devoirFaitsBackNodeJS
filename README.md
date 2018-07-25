# Devoir Faits version nodejs

* Cloner le repository en local.
* Lancer un npm install sur le package.json
* Démarrer node.js.

Le seveur tourne sur le [port 3000](http://localhost:3000).
L'api est accessible [Ici](http://localhost:3000/explorer).

L'api est versionnée.

* Sur explorer, cliquer sur Etablissement. 
* Cliquer sur /etablissement du GET
* Cliquer sur 'Try it out' un peu plus bas.
La liste des établissements s'affiche dans le response Body (Non stocké en base mais appel dynamique d'une API et intégration avec Devoirs Faits)


Pour tester plus:

* Cliquer sur Utilisateur:
* puis POST Utilisateurs Login
* dans ma zone credentials copier le texte ci-dessous

        {
            "email": "admin@admin.com",
            "password": "admin"
        }
* cliquer sur try it out
Reponse Body doit afficher quelquechose comme: 

        {
            "id": "MEKaO22nvuZ08a1Vs8zFieodTN8ZFeayMzSmAIpwpNTME6ibwBnoqQndvbglOIWT",
            "ttl": 1209600,
            "created": "2018-07-25T11:30:05.603Z",
            "userId": "5b5858aeab947e0c133a0a55"
        }
* Copier l'ID 
* Coller l'id dans la zone en haut à droite de la page (accessToken)
* Cliquer sur Set Access Token
* Les requêtes peuvent se faire maintenant en mode authentifié.
            
    