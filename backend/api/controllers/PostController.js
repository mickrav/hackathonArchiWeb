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
        console.log('article ');
        console.log(req.param('article'));
        var documentUpload = req.file('uploadFile');
        console.log('documentUpload', documentUpload);



        if (req.method === 'GET')
            return res.json({ 'status': 'GET not allowed' });
        //  Call to /upload via GET is error

        
        var titleGet = req.param('title');
        var articleGet = req.param('article');

        // console.log(documentUpload);

        documentUpload.upload({ dirname: '../../assets/uploaded/images' }, function onUploadComplete(err, files) {
            //  Files will be uploaded to .tmp/uploads
            // console.log('files', files);
            if (err || !files) return res.serverError(err);
            //  IF ERROR Return and send 500 error with error
            // console.log(files);
            var data = {
                "title": titleGet,
                "article": articleGet,
                "image": files[0]['fd'].match(/[^\/]+$/)[0]
            };

            console.log(data);


            Post.create(data).exec(function(err, post) {
                if (err) res.serverError(err);


                //docs saved
                console.log(post.title + " uploaded");
                return res.redirect('/');
            });
        });
    },

    allPost: function(req, res){
        async.auto({
            getPost: function(cb){
            Post.find({})
            .limit(4)
            .sort('createdAt DESC')
                // .populate('users')
                // .populate('leaderId')
            .exec(function(err, posts) {
                if (err) {
                    console.log(items);
                    console.log(err);
                    return res.serverError('ITEM-UNKOWN');
                }
                  
                cb(null, posts);
                });
            },

            getEvent: function(cb){
                Event.find({})
                    .limit(4)
                    .sort('createdAt DESC')
                        // .populate('users')
                        // .populate('leaderId')
                    .exec(function(err, posts) {
                        if (err) {
                            console.log(items);
                            console.log(err);
                            return res.serverError('ITEM-UNKOWN');
                        }
                          
                        cb(null, posts);
                        });

            },
            getShop: function(cb){
                Shop.find({})
                    .limit(4)
                    .sort('createdAt DESC')
                        // .populate('users')
                        // .populate('leaderId')
                    .exec(function(err, posts) {
                        if (err) {
                            console.log(items);
                            console.log(err);
                            return res.serverError('ITEM-UNKOWN');
                        }
                          
                        cb(null, posts);
                        });
            },

        }, function(err, results){
            if(err) {
                    return res.serverError('ITEM-ERROR')
                };

            console.log(results);


            return res.view('pages/homePage', {
                        title: "Home Page",
                        itemsPost: results.getPost,
                        itemsEvent: results.getEvent,
                        itemsShop: results.getShop,
            });
        });
        
    },
};

