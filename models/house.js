const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const houseSchema = new Schema({
    compCount: {
        type:Number,
    },
    squareFootage: {
        type:Number,
    },
    bathroom: {
        type:Number,
    },
    address: {
        type:String,
    },
    bedroom: {
        type:Number,
    },
    propertyType: {
        type: String,
    },
    
});

const house = mongoose.model('house',houseSchema)
module.expoerts = house;d