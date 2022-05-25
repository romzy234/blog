const mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
    username :{
        type:String,
        require:true
    },

    email:{
        type:String,
        require:true 
    },
    phone:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    name:{
        type:String,
        require:true
    },
    profilePic:{
        type:String,
        require:true
    },
    about:{
        type:String,
        require:true
    },
    setting:{
        type:Object,
        require:true
    },
    superAdmin:{
        type:Boolean,
        require:true
    },
    status:{
        type:Boolean,
        default:true
    }

},
    {
        timestamps: true
    }
)

module.exports = mongoose.model('users',UserSchema);