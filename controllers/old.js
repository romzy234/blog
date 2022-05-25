const User = require('../models/user');
const custom = require('../models/custom');
var genPassword = require('../utils/passwordutils').genPassword;

const welcome = require('../mail/welcome');
const customMailer = require('../mail/Custom');

const _ = require('lodash');
var isValid = require('../utils/passwordutils').validPassword
var property = require('../models/property');
const { autoRes } = require('../mail/autoRes');
var CallMe = require('../models/callme');
const Contacts = require('../models/contact')




exports.register = (req, res, next) => {
    const saltHash = genPassword(req.body.password);
    const salt = saltHash.salt;
    const hash = saltHash.hash;

    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        hash: hash,
        salt: salt
        // admin: true
    });
    

    welcome.newAdmin(req.body.email, req.body.username, req.body.password);
    newUser.save()
        .then((user) => {
            res.redirect('/users/homepage');
        }).catch(error=>{
            console.log(error);
            res.status(500)
        });
};

exports.getLogin = (req, res, next) => {
    res.render('Admin/login');
}

exports.getcustom = (req, res, next) => {
    res.render('Admin/customMail');
}

exports.getRegister = function (req, res, next) {
    res.render('Admin/newUser')
}

exports.getAdminProfile = (req, res, next) => {
    res.render('Admin/profile', {
        title: 'welcome'
    });
}

exports.getUpload = (req, res, next) => {
    res.render('Admin/upload');
}

exports.getDashboard = (req, res, next) => {
    res.render('Admin/dashboard');
}

exports.getPropertyEdit = (req,res,next) =>{
    property.findById({_id:req.params.id})
    .then(result=>{
        res.render('Admin/editproperty',{result});
    }).catch(error=>{
        res.status(500)
    })
    
}

exports.getManageUsers = (req, res, next) => {
    User.aggregate(
        [{
            $match: {
                status: true
            }
        }]
    ).then(user => {
        // console.log(req.user);
        res.render('Admin/manageUser', {
            logUser: req.user,
            data: user
        })

    }).catch(error => {
        console.log(error);
        res.status(500)
    })
}

exports.getEditPage = (req, res, next) => {
    User.findOne({
            _id: req.params.id
        })
        .then(user => {
            //console.log(user);
            res.render('Admin/edit', {
                user: user
            })
        })
        .catch(error => {
            res.status(500)
        })

}

exports.getProperties = (req, res, next) => {
    property.aggregate(
        [{
            $match: {
                
            }
        }]
    ).then(data => {
       
        res.render('Admin/properties', {
            logUser: req.user,            
            data:data
        })
        
    }).catch(error => {
        console.log(error);
        res.status(500)
    })

};

exports.totalUnseen = (req, res, next)=>{
    CallMe.aggregate(
        [{
            $match: {
                seen : false
            }
        }]
    ).then(seen => {
        res.locals.seen = seen.length;
       next();
    }).catch(error => {
        res.status(500)

    })
};

exports.updateUser = (req, res, next) => {

    var {
        email,
        oldpass,
        newpass,
        cfpass
    } = req.body;
    //console.log(req.user._id)

    User.findById({
        _id: req.params.id
    }).then(user => {
        //validate oldpassword
        const check = isValid(oldpass, user.hash, user.salt);
        if (check) {
            if (newpass == cfpass) {
                const saltHash = genPassword(newpass);
                const salt = saltHash.salt;
                const hash = saltHash.hash;

                const obj = {
                    hash: hash,
                    salt: salt,
                    email: email
                }

                user = _.extend(user, obj);
                user.save((error, result) => {
                    if (error) {
                        console.log(error)
                        res.status(500);
                    } else {
                        console.log("user updated")
                        res.redirect('/users/homepage')
                    }
                })

            } else {
                console.log('password mismatch');
            }
        } else {
            console.log('wrong user details');
        }


    }).catch(error => {
        res.status(500);
    })

}

exports.deleteProperty = (req,res,next) =>{
    property.findOneAndDelete({ _id:req.params.id})
    .then(result=>{
        res.redirect('/users/homepage')
    })
    .catch(error=>{
        res.status(500);
    })
}

exports.deleteUser = (req, res, next) => {
    User.findById({
        _id: req.params.id
    }).then(user => {
        const obj = {
            status: false
        }

        user = _.extend(user, obj);
        user.save((error, result) => {
            if (error) {
                console.log("user not deleted")
            } else {
                res.redirect('/users/manage-users')
            }
        })
    }).catch(error => {
        res.status(500);
    })
}

exports.deleteMail = (req,res,next) =>{
    custom.findOneAndDelete({ _id:req.params.id})
    .then(result=>{
        res.redirect('/users/sentmail')
    })
    .catch(error=>{
        res.status(500);
    })
}

exports.deleteCallMe = (req,res,next) =>{
    CallMe.findOneAndDelete({ _id:req.params.id})
    .then(result=>{
        res.redirect('/users/callme')
    })
    .catch(error=>{
        res.status(500);
    })
}

exports.multipleUpload = (req, res, next) => {
    const file = req.files;
    if (!file) {
        const error = new Error("please upload a file");
        error.httpStatusCode = 400;
        return next(error)
    }
    
    var images = [];
    for (let index = 0; index < file.length; index++) {
        //    images.push(file[index])
        images.push((file[index].path).slice(7,));

    }
    var addD = [];
    //For Array
    if(req.body.addD1 !== ""){addD.push(req.body.addD1)};
    if(req.body.addD2 !== ""){addD.push(req.body.addD2)};
    if(req.body.addD3 !== ""){addD.push(req.body.addD3)};
    if(req.body.addD4 !== ""){addD.push(req.body.addD4)};
    if(req.body.addD5 !== ""){addD.push(req.body.addD5)};

    //console.log(images)
    var details = {
        title: req.body.title,
        address: req.body.address,
        status: req.body.status,
        country: req.body.country,
        city: req.body.city,
        bedroom: req.body.bedroom,
        bathroom: req.body.bathroom,
        area: req.body.area,
        dining_area: req.body.dining_area,
        price: req.body.price,
        rating: req.body.rating,
        description: req.body.description,
        lat:req.body.lat,
        lon:req.body.lon,
        additionalDetail: addD,
        summary:req.body.summary,
        image: images,
        user: req.user._id
    }
    property.create(details).then(result => {
        res.redirect('/users/upload');
    }).catch(error => {
        res.status(500);
    })

}

exports.custom = (req, res, next) => {
    const newCustom = new custom({
        email: req.body.email,
        name: req.body.name,
        header: req.body.header,
        subject: req.body.subject,
        messageOne: req.body.mgs1,
        messageTwo: req.body.mgs2,
        senderMail: req.body.senderMail
        // admin: true
    });

   
    newCustom.save()
        .then((user) => {
            customMailer.customMail(req.body.email, req.body.subject, req.body.header, req.body.name, req.body.mgs1, req.body.mgs2, req.body.senderMail,req.body.perview,req.body.authKey);
            res.redirect('/users/homepage');
        }).catch(error=>{
           res.status(500);
        });
};
exports.getRequest = function (req, res, next) {
    custom.aggregate(
        [{
            $match: {
                
            }
        }]
    ).then(data => {
       
        res.render('Admin/SentMail', {
            logUser: req.user,            
            data:data
        })
    }).catch(error => {
        console.log(error);
        res.status(500)
    })

};


exports.test = function (req, res, next) {
    autoRes(req.body.email, req.body.name);
    res.send('sent mail')
};

exports.getTest = function (req, res, next) {
    res.render('Admin/test')
};


exports.updateProperty = (req,res,next) =>{
    //console.log(req.body)
    property.update({_id:req.params.id},{$set:req.body})
    .then(result=>{
        //console.log(result)
        res.redirect("/users/homepage")
    }).catch(error=>{
        res.status(500).json({message:error.message});
    })

}


exports.getReceipt = function (req, res, next) {
    res.render('Admin/receipt')
};

exports.getCallMe = function (req, res, next) {
    CallMe.aggregate(
        [{
            $match: {
                
            }
        }]
    ).then(data => {
       
        res.render('Admin/callMe', {            
            data:data
        })
    }).catch(error => {
        console.log(error);
        res.status(500)
    })
};

exports.ChangeSeen = (req, res, next) =>{
    CallMe.findById({
        _id: req.params.id
    }).then(user => {
        const obj = {
            seen: true
        }
        user = _.extend(user, obj);
        user.save((error, result) => {
            if (error) {
                console.log("Status not Changed")
            } else {
                res.redirect('/users/callme')
            }
        })
    }).catch(error => {
        res.status(500);
    })
};


exports.getTableCustom = function (req, res, next) {
    res.render('Admin/tableCustom')
};

exports.getContact = (req,res,next) =>{
    Contacts.aggregate(
        [{
            $match: {
                
            }
        }]
    ).then(data => {
       
        res.render('Admin/contactUS', {            
            data:data
        })
    }).catch(error => {
        console.log(error);
        res.status(500)
    })
};

exports.deleteContact = (req, res, next) => {
    Contacts.findOneAndDelete({ _id:req.params.id})
    .then(result=>{
        res.redirect('/users/contact')
    })
    .catch(error=>{
        res.status(500);
    })
}