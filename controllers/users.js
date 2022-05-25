const User = require('../models/user');
const Post = require('../models/post');
const _ = require('lodash');
const custom = require('../models/custom');
const tags = require('../models/tags');
const chalk = require('chalk');
const post = require('../models/post');


exports.getSignup = (req,res)=>{
    res.render('admin/signup')
}

exports.postSignup = (req,res)=>{
    User.findOne({
        username : req.body.username.toLowerCase()
    }).then(data => {
        if (!data) {
    const newUser = new User({
        username: req.body.username.toLowerCase(),
        email: req.body.email,
        password: req.body.password,
        name: req.body.name,
        phone: req.body.phone,
        about:"The Author Is A Person Of Culture",
        status: true,
        superAdmin:false,
        profilePic:"/users/assets/images/avatar-1.jpg",
        setting:{
            theme: "white",
            showContact: true,
            emailNotification: true
        }
    });
    
        newUser.save()
        .then((user) => {
            res.redirect('/users/users');
        }).catch(error=>{
            res.status(500)
        });
    }else{
        console.log(chalk.yellowBright("User Already Exist"));
        res.send("user Exist Go BACK");
    }
}).catch(error => {
    console.log(error);
})
}

exports.getSignin = (req,res)=>{
    res.render('admin/login')
}

exports.getCreate = (req,res)=>{
    res.render('admin/create')
}

exports.getPost = (req,res)=>{
    Post.aggregate(
        [{
            $match: {
                
            }
        }]
    ).then(data => {
       
        res.render('admin/posts', {
            logUser: req.user,            
            data:data
        })
    }).catch(error => {
        console.log(error);
        res.status(500)
    })
}

exports.getDelete = (req,res)=>{
    Post.aggregate(
        [{
            $match: {
                
            }
        }]
    ).then(data => {
       
        res.render('admin/delBlog', {
            logUser: req.user,            
            data:data
        })
        // console.log(data.length);
    }).catch(error => {
        console.log(error);
        res.status(500)
    })
}

exports.getSettings = (req,res)=>{
    res.render('admin/settings')
}

exports.getUsers= (req,res)=>{
    User.aggregate(
        [{
            $match: {
                
            }
        }]
    ).then(data => {
       
        res.render('admin/delAdmin', {
            logUser: req.user,            
            data:data
        })
    }).catch(error => {
        console.log(error);
        res.status(500)
    })
}

exports.getCreateUser = (req,res)=>{
    res.render('admin/index')
}

exports.getForgetPassword = (req,res)=>{
    res.render('admin/forgot')
}

exports.getChangePassword = (req,res)=>{
    res.render('admin/changepassword')
}

exports.getIndex = (req,res)=>{
    res.render('admin/index')
}

exports.postMock = (req,res)=>{
    res.render('admin/index')
}

exports.comingsoon = (req,res)=>{
    res.render('admin/comingsoon')
}


exports.postMock = (req,res)=>{
    res.render('admin/index')
}

exports.test = (req,res)=>{
    res.render('admin/test')
}

exports.postTest = (req,res) =>{
    console.log(req.body)
    res.json({status : "success"})
}


exports.profile = (req,res)=>{
    res.render('admin/profile')
}

exports.test2 = (req,res)=>{
    res.json(req.body)
}


exports.postCreate = (req,res, next)=>{
    const file = req.files;
    if (!file) {
        const error = new Error("please upload a file");
        error.httpStatusCode = 400;
        return next(error)
    }
    var images = [];
    var publish = (value)=>{
        if(value == "on"){
            return "Published"
        }else{
            return "Draft"
        }
    }

    for (let index = 0; index < file.length; index++) {
        //    images.push(file[index])
        images.push((file[index].path).slice(7,));

    }
    var tags = req.body.tag.toLowerCase()
    var tag =tags.split(","); 

    var myPost = new Post({
        title:req.body.title,
        body: req.body.body,
        tags: tag,
        image:"/" + images[0],
        preview: req.body.preview,
        publish: publish(req.body.publish),
        authour: req.body.authourID,
        comments : true,
        date : Date.now(),
        delete: false
    }); 

    myPost.save()
    .then((post) => {
        res.redirect('/users/posts');
    }).catch(error=>{
        console.log(error);
        res.status(500)
    });
}

exports.updateProfilePic = (req,res,next)=>{
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
    const obj = {
        profilePic: "/" + images[0]
    }
    User.findById({
        _id: req.user._id
    }).then(user => {
        user = _.extend(user, obj);
        user.save((error, result) => {
            if(error) {
                console.log(error)
                res.status(500);
            } else {
                res.redirect('/users/profile')
            }
        })
    }).catch(error => {
        res.status(500);
    })
}


exports.totalUnseen = (req, res, next)=>{
        res.locals.seen = "VitaLeaf";
        next();
};

exports.postChangePassword = ( req, res, next)=>{
    const d = req.body;
    const obj = {
        password : d.new
    }
    User.findById({
        _id: req.user._id
    }).then(user => {
        //validate oldpassword
        if (d.old == user.password) {
            if (d.new == d.cnew) {
                // console.log("Would have Change");
                user = _.extend(user, obj);
                user.save((error, result) => {
                    if(error) {
                        console.log(error)
                        res.status(500);
                    } else {
                        // console.log("user updated")
                        res.redirect('/users/')
                    }
                })

            } else {
                res.send('password mismatch');
            }
        } else {
            res.send('wrong user details');
        }


    }).catch(error => {
        res.status(500);
    })


}

exports.updateProfile = ( req, res, next)=>{
    const d = req.body;
    const obj = {
        name : d.name,
        email: d.email,
        about : d.about
    }
    User.findById({
        _id: req.user._id
    }).then(user => {
        // console.log("Would have Change");
        user = _.extend(user, obj);
        user.save((error, result) => {
            if(error) {
                console.log(error)
                res.status(500);
            } else {
                // console.log("user updated")
                res.redirect('/users/profile')
            }
        })
    }).catch(error => {
        res.status(500);
    })
}

exports.userStatus = ( req, res, next)=>{
    const d = req.params;

    var string2Bool = (value)=>{ if(value == "true"){
        return !true
    }else{
        return !false
    }}


    const obj = {
        status : string2Bool(d.status)
    }

    // console.log(obj.status);
    User.findById({
        _id: d.id
    }).then(user => {
        user = _.extend(user, obj);
        user.save((error, result) => {
            if(error) {
                console.log(error)
                res.status(500);
            } else {
                // console.log("user updated")
                res.redirect('/users/users#table1')
            }
        })
    }).catch(error => {
        res.status(500);
    })
}

exports.UpdateUserSettings = ( req, res, next)=>{
    const d = req.body;
    var showContact = ()=>{ if(d.showContact == "true"){
        return true
    }else{
        return false
    }
 }
    var emailNotification = ()=>{ if(d.emailNotification == "true"){
        return true
    }else{
        return false
    }
 }

 
    const obj = {
        setting:{
            theme: d.theme,
            showContact: showContact(),
            emailNotification: emailNotification()
        }
    }
    // console.log(obj);
    User.findById({
        _id: req.user._id
    }).then(user => {
        // console.log("Would have Change");
        user = _.extend(user, obj);
        user.save((error, result) => {
            if(error) {
                console.log(error)
                res.status(500);
            } else {
                // console.log("user updated")
                res.redirect('/users/settings')
            }
        })
    }).catch(error => {
        res.status(500);
    })
}

exports.UpdateblogCustomization = ( req, res, next)=>{
    const d = req.body;
    var showContact = ()=>{ if(d.showContact == "true"){
        return true
    }else{
        return false
    }
 }
    var emailNotification = ()=>{ if(d.emailNotification == "true"){
        return true
    }else{
        return false
    }
 }

 
    const obj = {
        setting:{
            theme: d.theme,
            showContact: showContact(),
            emailNotification: emailNotification()
        }
    }
    // console.log(obj);
    User.findById({
        _id: req.user._id
    }).then(user => {
        user = _.extend(user, obj);
        user.save((error, result) => {
            if(error) {
                console.log(error)
                res.status(500);
            } else {
                // console.log("user updated")
                res.redirect('/users/settings')
            }
        })
    }).catch(error => {
        res.status(500);
    })
}

exports.custom = (req,res)=>{
    custom.aggregate(
        [{
            $match: {
                
            }
        }]
    ).then(data => {

    let i = data.length - 1;
   let lastest = data[i]

        res.render('admin/custom', {
            logUser: req.user,            
            data:lastest
        })
    }).catch(error => {
        console.log(error);
        res.status(500)
    })
}

exports.Updatecustom = ( req, res, next)=>{
    const d = req.body;
    var string2Bool = (value)=>{ if(value == "true"){
        return true
    }else{
        return false
    }
 }

    const file = req.files;
    const image = ()=>{
        if(file.length == 1 ){
            return `\/${file[0].path}`
        }else{
            return d.logo
        }
    }

    const obj = {
        siteHeader: string2Bool(d.siteHeader),
        popularSystem: string2Bool(d.popularSystem),
        popularMobile: string2Bool(d.popularMobile),
        comment: string2Bool(d.comment),
        footerMessage: string2Bool(d.footerMessage),
        date: d.date,
        siteH: d.siteH,
        footerM: d.footerM,
        logo : image()
      }
    custom.findById({
        _id: d.id
    }).then(user => {
        user = _.extend(user, obj);
        user.save((error, result) => {
            if(error) {
                console.log(error)
                res.status(500);
            } else {
                res.redirect('/users/custom')
            }
        })
    }).catch(error => {
        res.status(500);
    })
}

exports.tags = (req,res)=>{
    tags.aggregate(
        [{
            $match: {
                
            }
        }]
    ).then(data => {

        res.render('admin/tags', {
            logUser: req.user,            
            data:data
        })
    }).catch(error => {
        console.log(error);
        res.status(500)
    })
}

exports.postTags = (req,res) =>{
    const d = req.body;

    tags.findOne({
        tag : d.tag.toLowerCase()
    }).then(data => {
        // console.log(data)
        if (!data){
            const newTags = new tags({
                tag: d.tag.toLowerCase(),
                detail: d.detail,
                group: d.group,
            });
                newTags.save()
                .then((tagss) => {
                    res.redirect("/users/tags")
                }).catch(error=>{
                    console.log(error);
                });
        }else{
            res.send("<h1 style\=\"text-align\: center\;\"> Message From Server = Tags Exist <br> ERROR 402</h1> ")
        }
    }).catch(error => {
        console.log(error);
    })
    
}

exports.deleteTags = (req,res,next) =>{
    tags.findOneAndDelete({ _id:req.params.id})
    .then(result=>{
        res.redirect('/users/tags#table')
    })
    .catch(error=>{
        res.status(500);
    })
}

exports.FinTags = (req, res, next)=>{
    tags.aggregate(
        [{
            $match: {
                
            }
        }]
    ).then(data => {
        res.locals.tag = data;
        next();
    }).catch(error => {
        console.log(error);
        res.status(500)
    })
};

exports.delUser = (req,res,next) =>{
    User.findOneAndDelete({ _id:req.params.id})
    .then(result=>{
        res.redirect('/users/users#table1')
    })
    .catch(error=>{
        res.status(500);
    })
}

exports.delPost = (req,res,next) =>{
    post.findOneAndDelete({ _id:req.params.id})
    .then(result=>{
        res.redirect('/users/delete#table1')
    })
    .catch(error=>{
        res.status(500);
    })
}

exports.delPostBin = (req,res,next) =>{
    const d = req.params
    const obj = {
        deleted : true
    }
    // console.log(obj);
    post.findById({
        _id: d.id
    }).then(user => {
        user = _.extend(user, obj);
        user.save((error, result) => {
            if(error) {
                console.log(error)
                res.status(500);
            } else {
                res.redirect('/users/delete')
            }
        })
    }).catch(error => {
        res.status(500);
    })
}


exports.updateBlog = ( req, res, next)=>{
    const d = req.params;

    var switchMe = (value)=>{ if(value == "Unpublished"){
        return "Published"
    }else{
        return "Unpublished"
    }
 }

    post.findById({
        _id: d.id
    }).then(user => {
        const obj = {
            publish : switchMe(user.publish)
        }
        user = _.extend(user, obj);
        user.save((error, result) => {
            if(error) {
                console.log(error)
                res.status(500);
            } else {
                // console.log("user updated")
                res.redirect('/users/delete#table1')
            }
        })
    }).catch(error => {
        res.status(500);
    })
}

exports.UpdatePost= ( req, res, next)=>{
    const d = req.params;
    var string2Bool = (value)=>{ if(value == "true"){
        return true
    }else{
        return false
    }
 }

    const file = req.files;
    const image = ()=>{
        if(file.length == 1 ){
            return `\/${file[0].path}`
        }else{
            return d.logo
        }
    }

    const obj = {
        siteHeader: string2Bool(d.siteHeader),
        popularSystem: string2Bool(d.popularSystem),
        popularMobile: string2Bool(d.popularMobile),
        comment: string2Bool(d.comment),
        footerMessage: string2Bool(d.footerMessage),
        date: d.date,
        siteH: d.siteH,
        footerM: d.footerM,
        logo : image()
      }
    post.findById({
        _id: d.id
    }).then(user => {
        user = _.extend(user, obj);
        user.save((error, result) => {
            if(error) {
                console.log(error)
                res.status(500);
            } else {
                res.redirect('/users/custom')
            }
        })
    }).catch(error => {
        res.status(500);
    })
}


exports.getEditOne = (req,res) =>{
    const d = req.params;

    post.findOne({
        _id : d.id
    }).then(data => {
        if (data){
            res.render("admin/editOne", {
                logUser: req.user,            
                data:data
            })
            // console.log(data);
        }else{
            res.send("<h1 style\=\"text-align\: center\;\"> Message From Server = Tags Exist <br> ERROR 402</h1> ")
        }
    }).catch(error => {
        res.status(500);
    })
    
}

exports.postEditOne = (req,res)=>{
    const d = req.body;

    // console.log(d);
    var string2Bool = (value)=>{ if(value == "true"){
        return true
    }else{
        return false
    }
 }

    var publish = (value)=>{
        if(value == "on"){
            return "Published"
        }else{
            return "Draft"
        }
    }
    const file = req.files;
    const image = ()=>{
        if(file.length == 1 ){
            return `\/${file[0].path}`
        }else{
            return d.logo
        }
    }
    var tags = req.body.tag.toLowerCase()
    var tag =tags.split(","); 
    const obj = {
        title: d.title,
        body: d.body,
        tags: tag,
        image: image(),
        preview: d.preview,
        publish: publish(d.publish),
        // comments: true,      
      }
    post.findById({
        _id: d.id
    }).then(data => {
        data = _.extend(data, obj);
        data.save((error, result) => {
            if(error) {
                console.log(error)
                res.status(500);
            } else {
                res.redirect('/users/edit')
            }
        })
    }).catch(error => {
        res.status(500);
    })
}

exports.getMyPost = (req,res)=>{
    Post.aggregate(
        [{
            $match: {
                authour : req.user._id
            }
        }]
    ).then(data => {
       
        res.render('admin/posts', {
            logUser: req.user,            
            data:data
        })
    }).catch(error => {
        console.log(error);
        res.status(500)
    })
}