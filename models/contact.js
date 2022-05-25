var mongoose = require('mongoose');

var contactMeSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'name is required']
    },
    subject:{
        type:String,
        required:[true,'subject is required']
    },
    email:{
        type:String,
        required:[true,'email is required']
    },
    message:{
        type:String,
        required:[true,'message is required']
    },
})

module.exports = mongoose.model('contacts',contactMeSchema);