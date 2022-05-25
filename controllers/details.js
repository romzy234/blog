const { property } = require('lodash');
var contactUs = require('../models/contact');
var Properties = require('../models/property');
var _ = require('lodash');
const { autoRes } = require('../mail/autoRes');
var CallMe = require('../models/callme');
const isEmpty = require('../utils/isempty');

exports.getDetails = (req,res,next) =>{
    Properties.findById(req.params.id)
    .populate({ path: 'user', select: 'email username' })
    .then(result=>{
       // console.log(result)
        res.render('rollback',{result});
    })

    //  // Please Write A Fuction to return A 404 error if not Existing 
    // The Below code isnt Working
    // .catch(err => {
        // console.log(err);
    // });
  
    
}

exports.getProperties =(req,res,next) =>{
    var perPage = 2;
    var page = req.params.page || 1;

   var query = req.query
   if(_.isEmpty(query)){     
   
        var totalItems; // pagination
        // end constants

        Properties.find()
        .countDocuments()
        .then(numberOfProducts => {
            totalItems = numberOfProducts;
            return Properties.find()
                        .skip((page-1) * perPage)
                        .limit(perPage);
        }).then(data => {
            res.render('properties', {
                data: data,
                currentPage: page,
                hasNextPage: (perPage* page) < totalItems,
                hasPreviousPage: page > 1,
                nextPage: page + 1,
                previousPage: page - 1,
                lastPage: Math.ceil(totalItems / perPage),
                found:totalItems

            });
        }).catch(err => {
            console.log(err);
        });
   }else{
    Properties.aggregate([
        {
            $match:{
                $or: [ { country:query.country }, { city:query.city } ]   
            }
        }
    
    ]).then(data=>{
        var found = data.length;
        res.render('properties',{data:data,found:found })
    })
   }
    
}

exports.getIndexPage= (req,res,next) =>{
    Properties.find() //.count().then(val=>console.log(val))
    .limit(6)
    .sort({_id:-1})
    .then(
        result=>{
            req.result = result
            console.log(result)
            res.render('index',{result:result});
        }
    )
    .catch(error=>{
        res.status(500);
    })
    
}

exports.getAbout = (req,res,next) =>{
        //console.log(req.result);
        res.render('about');

}

exports.getContactUs = (req,res)=>{
    res.render('contact',{message:""})
}

exports.createContactUs = (req,res,next) =>{
    contactUs.create(req.body).then(result=>{
        res.render('contact',{message:"message sent"});
        autoRes(req.body.email, req.body.name);
    }).catch(error=>{
        console.log('error')
    })
};

exports.callme = (req,res,next) =>{
    var data = {
        name: req.body.Lname + '' + req.body.Fname,
        email:req.body.email,
        phone:req.body.phone,
        seen:false,
        property:req.body.id
    }
    CallMe.create(data)
    .then(result=>{
        res.redirect('/details/'+data.property)
    }).catch(error=>{
        res.status(500);
    })
};

exports.sitemap = (req,res,next) =>{
    Properties.aggregate(
        [{
            $match: {
                
            }
        }]
    ).then(data => {
        res.header('Content-Type', 'application/xml');
        res.render('sitemap', {
            siteName: 'https://isaacgarrick.herokuapp.com',            
            data:data
        })
        
    }).catch(error => {
        console.log(error);
        res.status(500)
    })
};  

exports.getDetails2 = (req,res,next) =>{
    Properties.findById(req.params.id)
    .populate({ path: 'user', select: 'email username' })
    .then(result=>{
       // console.log(result)
        res.render('detail',{result});
    })
    
    
}

exports.getFooter= (req,res,next) =>{
    Properties.find() //.count().then(val=>console.log(val))
    .limit(3)
    .sort({_id:-1})
    .then(
        results=>{
            res.locals.results = results;
            next();
        }
    )
    .catch(error=>{
        res.status(500);
    })
    
}