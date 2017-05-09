/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
var bcrypt = require('bcrypt');

module.exports = {

  attributes: {
  	firstname : {
        type : 'string',
        required : true
    },

    lastname : {
        type : 'string',
        required : true
    }, 

    email : {
        type: 'string',
          required: true,
          unique: true
    },

    password: {
      type: 'string',
      required: true
      
    },

    hash : {
        type : 'string',
        required : false
    }, 
    
    salt : {
        type : 'string',
        required : false
    }, 

    status : { /* active, pending, deactivate */
        type: 'string',
        defaultsTo: 'active'
    },

    reservation_id:{
    	model: 'reservation'

    },

         
    toJSON: function() {
            var obj = this.toObject();
            delete obj.password;
            return obj;
        }
    },

    // admin: {
    //   type: 'boolean',
    //   defaultTo: false
    // },

    beforeCreate: function(user, cb) {
        bcrypt.genSalt(10, function(err, salt) {
            bcrypt.hash(user.password, salt, function(err, hash) {
                if (err) {
                    console.log(err);
                    return next(err);
                }else{
                  user.salt = salt;
                  user.hash = hash;
                  user.password = hash;
                  cb(null, user);
                  //next();
                }
            });
        });
    }

};

