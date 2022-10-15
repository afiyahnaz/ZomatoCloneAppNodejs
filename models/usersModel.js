const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
           "fullName"       :   {type: String},
           "email"          :   {type: String},
           "mobileNumber"   :   {type: Number},
           "password"       :   {type: String},
       
    

});

const UserModel = mongoose.model('user', //name
                                       userSchema,//schemaName
                                      'users');//collectionName


module.exports = UserModel;