# hackathonArchiWeb

FRAMEWORK SAILS.JS (Node.js):

configuration: 
	1. create config/env/development.js:


	//start
	module.exports = {

  /***************************************************************************
   * Set the default database connection for models in the development       *
   * environment (see config/connections.js and config/models.js )           *
   ***************************************************************************/
	    connections : {
	     DevServer: {
	      adapter: 'sails-mysql', 
	      host: 'localhost',
	      user: 'mysqlUser', //optional
	      password: 'mysqlPass', //optional
	      database: 'DBname', //optional
	      charset   : 'utf8',
	      collation : 'utf8_swedish_ci'
	     }
	   },

	  port: 1337
	};

	//start
	
	2. change config/models.js: like

	module.exports.models = {

	  /***************************************************************************
	  *                                                                          *
	  * Your app's default connection. i.e. the name of one of your app's        *
	  * connections (see `config/connections.js`)                                *
	  *                                                                          *
	  ***************************************************************************/
	  // connection: 'localDiskDb',
	  connection: 'DevServer',
	  /***************************************************************************
	  *                                                                          *
	  * How and whether Sails will attempt to automatically rebuild the          *
	  * tables/collections/etc. in your schema.                                  *
	  *                                                                          *
	  * See http://sailsjs.org/#!/documentation/concepts/ORM/model-settings.html  *
	  *                                                                          *
	  ***************************************************************************/
	  migrate: 'alter'

	};

	3. inside root directory:
		- cmd: npm install
		- cmd: npm install sails-mysql --save : to add mysql adapter for waterline
	4. cmd: sails lift 

	/////////////////////////
	////////TESTING///////////
	/////////////////////////
	test with POSTMAN

	///////RESERVATION////////////
	- Add new reservation: POST
		POST http://localhost:1337/reservation?name=resaName&user_id=1
	- Show all reservation GET
		GET all reservations http://localhost:1337/reservations
	///////////////////////

	///////USER////////////
	- Add new User: POST
		user : http://localhost:1337/user?firstname=test&lastname=test&email=test@test.com&password=test&status=active
	- Show all user GET
	GET http://localhost:1337/user
	///////////////////////

	///////SHOP////////////

	- Add new shopItem: POST
		http://localhost:1337/shop?name=test&status=disponible&price=23.3&image=/link/to/images
	- Show all shop items GET
		http://localhost:1337/shop
	///////////////////////

	///////ARTICLE BLOG////////////

	- Add new article: POST
		http://localhost:1337/post?title=title Test&article=article test&image=/link/to/images
	- Show all article GET
		http://localhost:1337/post
	///////////////////////

	///////ARTICLE BLOG////////////

	- Add new service: POST
		http://localhost:1337/service?category=restauration&name=nameTest&status=dispo&price=20&image=/link/to/image
	- Show all services GET
		http://localhost:1337/service
	///////////////////////

	///////EVENT ////////////

	- Add new event: POST
		http://localhost:1337/service?category=netWorking&name=net working&status=en cours&image=/link/to/image&start_at=05-10-2017&end_at=05-10-2017
	- Show all event GET
		http://localhost:1337/event
	///////////////////////

	////End POSTMAN///

	//////////////////////ACCESS BACKOFFICE/////////////////

	Url Website:
	http://coffeeshop.sur.paris/
	

	sign in with:

	email: admin@coffeeshop.com
	passwd: AdminPage!


	///need authentication to show button "reserver" and reservation
	
	All CRUD Work with:
	http://coffeeshop.sur.paris/post //CRUD post
	http://coffeeshop.sur.paris/chat //CRUD chat
	http://coffeeshop.sur.paris/event //CRUD event 
	http://coffeeshop.sur.paris/service //CRUD service item
	http://coffeeshop.sur.paris/shop //CRUD shop item
	




