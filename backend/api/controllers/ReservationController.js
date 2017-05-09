/**
 * ReservationController
 *
 * @description :: Server-side logic for managing reservations
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	allReservation: function(req, res){
 		Reservation.find({})
            	// .populate('users')
            	// .populate('leaderId')
            	.exec(function(err, items) {
            	  if (err) {
            	      console.log(items);
            	      console.log(err);
            	      return res.serverError('ITEM-UNKOWN');
            	  }
            	  
            	  console.log(items);

            return res.view('pages/reservation', {
                        title: "Reservation's Page",
                        items: items
            });

        });
    }
};

