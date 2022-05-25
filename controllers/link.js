const { links } = require("../config/nedb");

links.loadDatabase();

 exports.createLink = (req,res,next)=>{
    const upload = ({
        linkName : req.body.linkName,
        linkRoute : req.body.linkRoute,
        linkRedirect : req.body.linkRedirect,
        count : 0
    });
    links.insert(upload);
    res.redirect('/users/links/overview');
};

exports.getCreateLink= (req,res,next) =>{
    res.render('Admin/createLink');
};

exports.getoverLink = (req,res,next) =>{
    { links.find({}, (err, data) =>{
        if(err){
            res.status(500);
        }
      res.render('Admin/overviewLink',{
        data : data
    });
    })};    
};

exports.getlinkRoute = (req,res,next) =>{
    var link = req.params.id;
    links.findOne({ linkRoute : link }, function(err, data){
        if(!data){
            res.send('Broken Link');
            return ;
        }else{
            res.status(301).redirect(data.linkRedirect)
        links.update({linkRoute : link},{$inc: { count : 1 }},{upsert: true },function (err, data){
        });
    }});
   };

exports.deleteLink =(req,res,next)=>{
        links.remove({ _id : req.params.link }, {}, function (err, data) {
            if(err){
                console.log(err)
            }
            res.redirect('/users/links/overview')
            });
    };
