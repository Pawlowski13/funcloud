const routes = require( 'next-routes');

module.exports = routes()
    .add( 'index', '/' )
    .add( 'posts' )
    .add( 'single', '/posts/:slug');