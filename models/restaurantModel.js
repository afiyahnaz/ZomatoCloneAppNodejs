//get schema instance
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create schema
const RestaurantSchema = new Schema({
    "name"       : {type: String},
    "city"       : {type: String},
    "locationId" :{type: Number} ,
    "cityId"     : {type: Number},
    "locality"   : {type: String},
    "thumb"      : {type: Array},
    "aggregateRating":{type: Number},
    "ratingText"     :{type: String},
    "minPrice"       :{type: Number},
    "contactNumber"  :{type: Number},
    "cuisineId"      :{type: Array},
    "cuisine"        :{type: Array},
    "image"          : {type: String},
    "mealtypeId"     : {type: Number},

});

//create  model
const  RestaurantModel = mongoose.model('restaurant',//modelName
                        RestaurantSchema,   //schemaName
                       'restaurants'); //mongoCollectionName

//export  model  
module.exports = RestaurantModel;                       
