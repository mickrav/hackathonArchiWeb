/**
 * Event.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  	category: {
  		type: 'string'//bureautique || restauration
  	},
  	name: {
  		type: 'string'
  	},

  	start_at: {
  		type: 'datetime'
  		// required: true
  	},

  	end_at: {
  		type: 'datetime'
  		// required: true
  	},

  	description: {
  		type: 'string'
  	},

  	// price: {
  	// 	type: 'float'
  	// },
    image:{//source
        type:'string'
    }
  }
};

