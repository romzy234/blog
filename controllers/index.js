const post = require('../models/post');
const user = require('../models/user');
const comments = require('../models/comments');
const subscribe = require('../models/subscribe');
var dayjs = require('dayjs')
var relativeTime = require('dayjs/plugin/relativeTime')
dayjs.extend(relativeTime)

exports.seo = (req, res, next)=>{
    res.locals.seo = {
        locale : "en_US",
        type : "article",
        title : "Weekend Link Lists Archives | Cup of Jo",
        url : "https://cupofjo.com/category/design/weekend/",
        site_name : "Cup of Jo",
        image : "https://cupofjo.com/wp-content/uploads/2015/05/jo_homepage.jpg",
        image_width : "600",
        image_height : "450",
        twitter_card : "Summary",
        twitter_site : "@userhandle",
        twitter_creator : "@userhandle",
        // jsonID :"\{\"\@context\"\:\"https\:\/\/schema.org\"\,\"\@graph\"\:\[\{\"\@type\"\:\"WebSite\",\"@id\":\"https:\/\/cupofjo.com\/#website\",\"url\":\"https://cupofjo.com/\",\"name\":\"Cup of Jo\",\"description\":\"Fashion, Beauty, Design, Culture, Food, Relationships, Motherhood\",\"potentialAction\":[{\"@type\":\"SearchAction\",\"target\":{\"@type\":\"EntryPoint\",\"urlTemplate\":\"https\://cupofjo.com/?s={search_term_string}\"},\"query-input\"\:\"required name=search_term_string\"}],\"inLanguage\"\:\"en-US\"},{\"@type\"\:\"CollectionPage\",\"@id\"\:\"https\://cupofjo.com/category/design/weekend/#webpage\",\"url\"\:\"https\://cupofjo.com/category/design/weekend/\",\"name\"\:\"Weekend Link Lists Archives | Cup of Jo\",\"isPartOf\"\:{\"@id\"\:\"https\://cupofjo.com/#website\"},\"breadcrumb\"\:{\"@id\"\:\"https\://cupofjo.com/category/design/weekend/#breadcrumb\"},\"inLanguage\"\:\"en-US\",\"potentialAction\"\:[{\"@type\"\:\"ReadAction\",\"target\"\:[\"https\://cupofjo.com/category/design/weekend/\"]}]},{\"@type\"\:\"BreadcrumbList\",\"@id\"\:\"https\://cupofjo.com/category/design/weekend/#breadcrumb\",\"itemListElement\"\:[{\"@type\"\:\"ListItem\",\"position\"\:1,\"name\"\:\"Home\",\"item\"\:\"https\://cupofjo.com/\"},{\"@type\"\:\"ListItem\",\"position\"\:2,\"name\"\:\"Design\",\"item\"\:\"https\://cupofjo.com/category/design/\"},{\"@type\"\:\"ListItem\",\"position\"\:3,\"name\"\:\"Weekend Link Lists\"}]}]}" 
    };
    next();
};

var string2Bool = (value)=>{ if(value == "true"){
        return true
    }else{
        return false
    }
}

exports.getBlogOne = (req,res) =>{
    const d = req.params;
    console.log(d);

    post.findOne({
        _id : d.id
    }).then(data => {
        user.findById({
            _id: data.authour
        }).then(users => {
            comments.aggregate(
                [{
                    $match: {
                        postID : data._id
                    }
                }]
            ).then(comment => {
                if (data){
                    res.render("test", {           
                        data:data,
                        author:users,
                        comment:comment,
                        totalC: comment.length
                    })
                    console.log(comment);
                }else{
                    res.send("<h1 style\=\"text-align\: center\;\"> Message From Server = Post Deleted Or Nevered Exist <br> ERROR 402</h1> ")
                }
            }).catch(error => {
                console.log(error);
                res.send("<h1 style\=\"text-align\: center\;\"> Message From Server = Post Deleted Or Nevered Exist <br> ERROR 402</h1> ")
            })
        }).catch(error => {
            
            res.render("404");
        })
    }).catch(error => {
        res.render("404");
    })
    
}

exports.getPost = (req,res)=>{
    post.aggregate(
        [{
            $match: {
                publish : "Published"
            }
        }]
    ).then(data => {
       
        res.render('blogs', {       
            data:data
        })
    }).catch(error => {
        console.log(error);
        res.status(500)
    })
}

exports.postComment = (req,res,next) =>{
    const d = req.body
    var publish = (value)=>{
        if(value == "subscribe"){
            return true
        }else{
            return false
        }
    }
var newComment = new comments({
        name : d.name,
        website: d.url,
        email : d.email,
        comment: d.comment,
        feedback:publish(d.subscribe_comments),
        isApproved : false,
        postID : d.id,
     }); 

    newComment.save()
    .then((data) => {
        res.redirect(`/story/${data.postID}`);
    }).catch(error=>{
        console.log(error);
        res.status(500)
    });
}

exports.postSub = (req,res,next) =>{
    const d = req.body

var newComment = new subscribe({
        email : d.email
     }); 

    newComment.save()
    .then((data) => {
        res.redirect(`/`);
    }).catch(error=>{
        console.log(error);
        res.status(500)
    });
}

// transaction.aggregate(
//     [{
//         $match: {

//         }
//     }, {
//         $sort: {
//             _id: -1
//         }}]
// index page 
const mongoose = require('mongoose');

exports.getIndex = (req,res)=>{
    post.aggregate(
        [{
            $match: {
                publish : "Published"
            }
        }, {
                $sort: {
                    _id: -1
                }
        }
    ]
    ).then(data => {
        user.aggregate(
            [{
                $match: {
                }
            }]
        ).then(author => {
            res.render('index', {       
                data:data,
                author:author,
                dayjs: dayjs,
            })
            // console.log(author);
            // console.log(data);
            }).catch(error => {
                console.log(error);
                res.status(500)
            })   
    }).catch(error => {
        console.log(error);
        res.status(500)
    })
}

exports.getAbout = (req, res) => {
    const d = req.params;

    user.find({
        
    }).then(data => {
        if (data) {
            res.render("about", {
                data: data
            })
            console.log(data);
        } else {
            res.send("<h1 style\=\"text-align\: center\;\"> Message From Server = sorry <br> ERROR 402</h1> ")
        }
    }).catch(error => {
        res.status(500);
    })

}

// Search And Tags
exports.getSearch = (req,res)=>{
    post.aggregate(
        [{
            $match: {
                publish : "Published"
            }
        }, {
                $sort: {
                    _id: -1
                }
        }
    ]
    ).then(data => {
        user.aggregate(
            [{
                $match: {
                }
            }]
        ).then(author => {
            res.render('search', {       
                data:data,
                author:author,
                dayjs: dayjs,
            })
            // console.log(author);
            // console.log(data);
            }).catch(error => {
                console.log(error);
                res.status(500)
            })   
    }).catch(error => {
        console.log(error);
        res.status(500)
    })
}


exports.getTags = (req,res)=>{
    post.aggregate(
        [{
            $match: {
                publish : "Published",
                tags:{
                    $in:[req.params.id]
                }
            }
        }, {
                $sort: {
                    _id: -1
                }
        }
    ]
    ).then(data => {
        user.aggregate(
            [{
                $match: {
                }
            }]
        ).then(author => {
            
            res.render('tags', {       
                data:data,
                tag: req.params.id.toLowerCase(),
                author:author,
                dayjs: dayjs,
            })
            // console.log(author);
            
            }).catch(error => {
                console.log(error);
                res.status(500)
            })   
    }).catch(error => {
        console.log(error);
        res.status(500)
    })
}