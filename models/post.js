const mongoose = require('mongoose');

var PostSchema = mongoose.Schema({
    title :{
        type:String,
        require:true
    },

    body :{
        type:String,
        require:true 
    },
    tags :{
        type:Array,
        require:true
    },
    image :{
        type:String,
        require:true
    },
    preview:{
        type:String,
        require:true
    },
    publish:{
        type:String,
        require:true
    },
    comments :{
        type:Boolean,
        require:true
    },
    date :{
        type:Number,
        require:true
    },
    authour :{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    deleted :{
        type:Boolean,
        require :true
    }
},
    {
        timestamps: true
    }
)

module.exports = mongoose.model('posts',PostSchema);