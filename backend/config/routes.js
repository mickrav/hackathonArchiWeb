/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#!/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, *
  * etc. depending on your default view engine) your home page.              *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': 'PostController.allPost',

  /***********************Admin****************/

  '/admin': {
    view: 'pages/admin/backoffice'
  },
   'get /admin/post': {
    view: 'pages/admin/post'
  },
  'POST /admin/post/article': 'PostController.upload',

  //shop
  'get /admin/shop': {
    view: 'pages/admin/shop'
  },
  'POST /admin/shop/article': 'ShopController.upload',

  // events
  'get /admin/event': {
    view: 'pages/admin/event'
  },
  'POST /admin/event/post': 'EventController.upload',
   // events
  'get /admin/service': {
    view: 'pages/admin/service'
  },
  'POST /admin/service/post': 'ServiceController.upload',

   /***********************Reservations****************/ 

  'GET /reservations': {
    view: 'pages/reservation'
  },
  'get /reserver': { view: 'pages/reserver' },
  'post /reservation': 'ReservationController.createReservation',

  'get /events': { view: 'pages/events' },
  'get /about': { view: 'pages/about' },
  'get /coworking': { view: 'pages/coworking' },
  'get /coffeeShop': { view: 'pages/coffeeShop' },




  /***************************************************************************
  *                                                                          *
  * Custom routes here...                                                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the custom routes above, it   *
  * is matched against Sails route blueprints. See `config/blueprints.js`    *
  * for configuration options and examples.                                  *
  *                                                                          *
  ***************************************************************************/

  'get /login': { view: 'user/login' },
  'get /signup': { view: 'user/signup' },
  '/welcome': { view: 'user/welcome' },
  'post /login': 'UserController.login',
  'post /signup': 'UserController.signup',
  '/logout': 'UserController.logout'

};
