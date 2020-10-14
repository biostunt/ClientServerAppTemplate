## **Client Server App Template**


A simple template that can help you to create electron app using both react *(client)* and express *(server)* in one build.

**Technologies used:**
- Webpack
 - Node js (10.19+)
 - Electron
 - Express
 - React (js)

## Installation:

   

    $	git clone https://github.com/biostunt/ClientServerAppTemplate
    $	cd ClientServerAppTemplate
    $ npm install

## Structure
Project divided by two parts: 

 - *Client* ( src/client )
 - *Server* ( src/server )
In root directory ( src/ ) you can find electron entry point ( app.js ) and app config ( app_config.js )

## Launching
To run or build project simply use several commands:

    $	npm start // to launch it
    $	npm run build // to build project
etc..



## Issues:

 - Both server and client doesn't support hot reload.
 - Project doesn't support TypeScript.

Feel free to use it and write issues.
