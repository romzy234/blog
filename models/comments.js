var mongoose = require('mongoose');

var commentMeSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'name is required']
    },
    website:{
        type:String
    },
    email:{
        type:String,
        required:[true,'email is required']
    },
    comment:{
        type:String,
        required:[true,'comment is required']
    },
    feedback:{
        type:Boolean,
        required:[true,'isTrue is required']
    },
    isApproved:{
        type:Boolean,
        required: true
    },
    postID :{
        type:mongoose.Schema.Types.ObjectId,
        ref:"posts"
    } 
},
{
    timestamps: true
})

module.exports = mongoose.model('comments',commentMeSchema);