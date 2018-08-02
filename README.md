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
* S'affiche :

        {
        "error": {
            "statusCode": 401,
            "name": "Error",
            "message": "Autorisation requise",
            "code": "AUTHORIZATION_REQUIRED",
            "stack": "Error: Autorisation requise\n    at /Volumes/Data/Projects/WebStormProjects/devoirsFaits/node_modules/loopback/lib/application.js:430:21\n    at /Volumes/Data/Projects/WebStormProjects/devoirsFaits/node_modules/loopback/lib/model.js:358:7\n    at /Volumes/Data/Projects/WebStormProjects/devoirsFaits/node_modules/loopback/common/models/acl.js:529:16\n    at /Volumes/Data/Projects/WebStormProjects/devoirsFaits/node_modules/async/dist/async.js:3888:9\n    at /Volumes/Data/Projects/WebStormProjects/devoirsFaits/node_modules/async/dist/async.js:473:16\n    at iteratorCallback (/Volumes/Data/Projects/WebStormProjects/devoirsFaits/node_modules/async/dist/async.js:1064:13)\n    at /Volumes/Data/Projects/WebStormProjects/devoirsFaits/node_modules/async/dist/async.js:969:16\n    at /Volumes/Data/Projects/WebStormProjects/devoirsFaits/node_modules/async/dist/async.js:3885:13\n    at /Volumes/Data/Projects/WebStormProjects/devoirsFaits/node_modules/loopback/common/models/acl.js:511:17\n    at /Volumes/Data/Projects/WebStormProjects/devoirsFaits/node_modules/loopback/common/models/role.js:434:21\n    at _combinedTickCallback (internal/process/next_tick.js:131:7)\n    at process._tickCallback (internal/process/next_tick.js:180:9)"
        }
        }
        
L'api est bloquée pour les utilisateurs non authentifiés.


* Cliquer sur Utilisateur:
* puis POST Utilisateurs Login
* dans ma zone credentials copier le texte ci-dessous

        {
            "email": "admin@admin.fr",
            "password": "admin"
        }
 * les deux autres utilisateurs sont aussi disponibles sans vérification des droits pour le moment : 
        
        Professeur (3B):
        {
                    "email": "professeur@mail.com",
                    "password": "123"
                }
        
        Elève (3B):
         {
                     "email": "0139eleve@mail.com",
                     "password": "123"
                 }       
* cliquer sur try it out
Reponse Body doit afficher une réponse comme: 

        {
            "id": "MEKaO22nvuZ08a1Vs8zFieodTN8ZFeayMzSmAIpwpNTME6ibwBnoqQndvbglOIWT",
            "ttl": 1209600,
            "created": "2018-07-25T11:30:05.603Z",
            "userId": "5b5858aeab947e0c133a0a55"
        }
* Copier l'ID sans les "" 
* Coller l'id dans la zone en haut à droite de la page (accessToken)
* Cliquer sur Set Access Token
* Les requêtes peuvent se faire maintenant en mode authentifié.
* Par exemple : 

GET Etablissements

La liste des établissements s'affiche dans le response Body (Non stocké en base mais appel dynamique d'une API et intégration avec Devoirs Faits)


            
    