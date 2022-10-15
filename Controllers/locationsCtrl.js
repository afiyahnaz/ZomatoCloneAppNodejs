const LocationModel = require("../models/locationModel");

module.exports.getLocationList = async (req,res)=>{
    try{
        let result = await LocationModel.find();
        res.status(200);
        res.send({
        status:true,
        result,
          
        });

    }catch(error){
        res.status(500);
        res.send({
        status: false,
        error,
        })
    }
   
};


