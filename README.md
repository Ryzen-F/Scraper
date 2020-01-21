**_Intro:_**

Dans ce p'tit projet j'ai utilisé les technos suivantes:

    - Node / Express
    - Puppeteer
    - Jade
    
Node sera donc l'environnement utilisé pour exécuter notre code. Express sera utilisé pour executer le code du serveur qui est en relation avec notre template. On créer le content HTML avec le template engine Jade. Enfin et surtout, la star du spectacle, 
Puppeteer ! C'est l'outil de navigation headless qui rendra tout cela possible. 


Les navigateur headless sont normalement utilisés pour plusieurs choses principales, notamment : 
 
    - Interagir avec les sites Web 
    - Scraper la data 
    
Ce dernier sera le sujet de notre projet. 
 
**_Création de l'Application :_** 
    
    1- Configuration du Projet : 
    
        J'ai lancé la commande : `npm i express jade puppeteer --save`
    
    2- Configuration du serveur Express et du routage app.js & routes/index.js: 
    
        Je n'entrerai pas dans les détails du fonctionnement d'Express que vous connaissez surement plus que moi, mais je vais expliquer ce qui passe dans le fichier app.js aussi bien que possible.
    
            La première chose que nous faisons en haut du fichier est d'importer ce dont nous avons besoin. 
    
            Ensuite, nous disons à Express que nous utiliserons Jade comme moteur de modèle. 
    
            Après cela, nous mettons en place un écouteur pour toute demande GET qui passe par notre itinéraire de base de / sur le port 9000.
    
            Enfin, meme approche pour le routage. 
    
    3- Scraper.js :
    
        C'est là que la magie opère! 
    
        Ici, nous avons une fonction principale, getResults 
    
        Cette fonction ouvre une instance dans Puppeteer, accèdant à https://www.folhomee.fr/, trouvent les éléments que nous voulons et récupèrent les données à l'intérieur.
    
        Cela semble simple, mais c'est en fait un concept très puissant!
    
        Une fois qu'il a récupéré toutes les données dont il a besoin, il ferme le navigateur sans tête 
    
        et renvoie les données qu'il a trouvées sous un fichier page.html dans le dossier views grace au module fs.
    
    3- Intégrer le fichier html dans la view index.jade :
    
        Dans cette partie j'ai pu intégrer le fichier html grace à la balise xmp. 
 
 
**_Finalement,_**
 
 À ce stade, lorsqu'on démarre le serveur Node en exécutant node app.js 
 
 puis en visitant localhost:9000/scrap ou http://127.0.0.1:9000/scrap, vous pouvez voir le code HTML scrapé depuis le site de Folhomee! 😃
