/**
 * Shop.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  	name: {
  		type: 'string'
  	},
  	image:{//source
        type:'string'
    }, 
  	status:{
  		type:'string', //dispo, indisponible 
  		defaultTo: 'dispo'
  	},
  	price: {
  		type: 'float'
  	}
  }
};

