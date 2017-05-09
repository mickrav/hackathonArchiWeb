/**
 * Reservation.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  	name:{
  		type: 'string',
  		required: true
  	},
  	start_at: {
  		type: 'datetime',
  		required: true
  	},

  	end_at: {
  		type: 'datetime',
  		required: true
  	},

  	places:{
  		collection: 'place',
  		via: 'reservations',
  		dominant: true
  	},

  	user_id: {
  		model: 'user',
  		required: true
  	}
  }
};

