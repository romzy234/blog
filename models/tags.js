var mongoose = require('mongoose');

var tagsSchema = new mongoose.Schema({
    tag:{
        type:String,
        required:[true,' required']
    },
    detail:{
        type:String,
        required:[true,' required']
    },
    group:{
        type:String,
        required:[true,' required']
    }
   
})

module.exports = mongoose.model('tags',tagsSchema);
