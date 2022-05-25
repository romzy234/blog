var mongoose = require('mongoose');

var customSchema = new mongoose.Schema({
    siteHeader:{
        type:Boolean,
        required:[true,' required']
    },
    popularSystem:{
        type:Boolean,
        required:[true,' required']
    },
    popularMobile:{
        type:Boolean,
        required:[true,' required']
    },
    comment:{
        type:Boolean,
        required:[true,' required']
    },
    footerMessage:{
        type:Boolean,
        required:[true,' required']
    },
    footerM:{
        type:String,
        required:[true,' required']
    },
    siteH:{
        type:String,
        required:[true,' required']
    },
    logo:{
        type:String,
        required:[true,' required']
    },
    date :{
        type: String,
        required: [true]
    }
   
})

module.exports = mongoose.model('custom',customSchema);
