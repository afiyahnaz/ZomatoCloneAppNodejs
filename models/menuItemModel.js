const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MenuItemsSchema = new Schema({
        "name"            : {type: String},
        "description"     : {type: String},
        "ingridients"     : {type: Array},
        "restaurantId"    : {type: String},
        "image"           : {type: String},
        "qty"             : {type: Number},
        "price"           : {type: Number},
      
    

});

const MenuItemModel = mongoose.model('menuItem', //name
                                       MenuItemsSchema,//schemaName
                                    'menuItems');//collectionName


module.exports = MenuItemModel;