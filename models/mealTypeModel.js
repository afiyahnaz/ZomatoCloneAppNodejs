const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mealTypeSchema = new Schema({
         "name"       :   {type: String},
        "content"     :   {type: String},
        "image"       :   {type: String},
        "mealType"    :   {type: Number},
       
    

});

const mealTypeModel = mongoose.model('mealtype', //name
                                      mealTypeSchema,//schemaName
                                    'mealtypes');//collectionName


module.exports =mealTypeModel;