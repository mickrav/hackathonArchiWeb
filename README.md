# hackathonArchiWeb

FRAMEWORK SAILS:

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



