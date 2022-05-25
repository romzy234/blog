var mongoose = require('mongoose');

var subSchema = new mongoose.Schema({
    email:{
        type:String,
        required:[true,'email is required']
    }
})

module.exports = mongoose.model('sub',subSchema);