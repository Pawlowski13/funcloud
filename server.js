const express = require( 'express' );
const next = require( 'next' );

const routes = require( './routes' );

const app = next( { dev: 'production' !== process.env.NODE_ENV } );
const handle = app.getRequestHandler();
const handler = routes.getRequestHandler( app );

app.prepare()
    .then( () => {

        const serverInstance = express();

        serverInstance.use( handler );

        //Default route for server.
        serverInstance.get( '*', ( req, res ) => {
            return handle( req, res);
        } );

        const currentPort = process.env.PORT || 8080;

        serverInstance.listen( currentPort, err => {
            if (err) {
                throw err;
            }

            console.log( ` > Listen on port ${currentPort}...` );
        } );
    } );