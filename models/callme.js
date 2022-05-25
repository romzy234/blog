var mongoose = require('mongoose');

var contactMeSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'name is required']
    },
    phone:{
        type:String,
        required:[true,'phone Number is required']
    },
    email:{
        type:String,
        required:[true,'email is required']
    },
    seen:{
        type:Boolean,
        required:[true,'email is required']
    },
    property:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"properties"
    }
   
})

module.exports = mongoose.model('callme',contactMeSchema);