/**
 * PostController
 *
 * @description :: Server-side logic for managing posts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	    //***********************************//
    // Webservice /document/upload//
    //***********************************//


    upload: function(req, res) {
        // console.log('name ');
        // console.log(req.param('article'));
        var documentUpload = req.file('uploadFile');
        // console.log('documentUpload', documentUpload);



        if (req.method === 'GET')
            return res.json({ 'status': 'GET not allowed' });
        //  Call to /upload via GET is error

        
        // var titleGet = req.param('title');
        // var articleGet = req.param('article');

        // console.log(documentUpload);

        documentUpload.upload({ dirname: '../../assets/uploaded/images' }, function onUploadComplete(err, files) {
            //  Files will be uploaded to .tmp/uploads
            // console.log('files', files);
            if (err || !files) return res.serverError(err);
            //  IF ERROR Return and send 500 error with error
            // console.log(files);
            var data = {
            	"category": req.param('category'),
                "name": req.param('name'),
                "description": req.param('description'),
                "price": req.param('price'),
                "image": files[0]['fd'].match(/[^\/]+$/)[0]
            };

            console.log(data);


            Service.create(data).exec(function(err, event) {
                if (err) res.serverError(err);


                //docs saved
                console.log(event.name + " uploaded");
                return res.redirect('/');
            });
        });
    },

    allService: function(req, res){
        Service.find({})
            .limit(4)
            .sort('createdAt DESC')
                // .populate('users')
                // .populate('leaderId')
                .exec(function(err, items) {
                  if (err) {
                      console.log(items);
                      console.log(err);
                      return res.serverError('ITEM-UNKOWN');
                  }
                  
                  console.log(items);

            return res.json(items);

        });
    },
};

