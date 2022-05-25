var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');
var propertySchema = new mongoose.Schema({

    country:{
        type:String,
        required:[true,'country is required']
    },
    city:{
        type:String,
        required:[true,'city is required']
    },
    title:{
        type:String,
        required:[true,'title is required']
    },
    status:{
        type:String,
        default:'buy',
        required:[true]
    },

    bedroom:{
        type:Number
    },           
    bathroom:{
        type:Number
    },
    area:{
        type:String,
    },
    // garage:{
    //     type:Boolean,
    // },
    dining_area:{
        type:Number
    }
    ,   
    description:{
        type:String,
        required:[true,'description is required']
    },      
    address:{
        type:String,
        required:[true,'address is required']
    },
    lat:{
        type:Number,
        required:[true,'Latitude is required']
    },
    lon:{
        type:Number,
        required:[true,'Longitude is required']
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users"
    },

    image:[
        String
    ],
    price:{
        type:Number,
        required:[true,'price is required']

    },
    rating:{
        type:Number
    },
    summary:{
        type:String
    },
    additionalDetail:[
        String
    ]

},
    {
        timestamps: true
    }
)


propertySchema.plugin(mongoosePaginate);
module.exports = mongoose.model('properties',propertySchema);