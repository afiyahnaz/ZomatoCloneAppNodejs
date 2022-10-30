const LocationModel = require("../models/locationModel");
const locationList = require("../resources/location.json");

const getLocationList = async (req,res) => {
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
        message: "server error",
        error,
        })
    }
   
};

const  getLocationByCityName = async (req, res) => {
    let { city } = req.query;
    try {
      let result = await LocationModel.find({
        city: { $regex: city + ".*", $options: "i" },
      });
      res.status(200).send({
        status: true,
        location: result,
      });
    } catch (error) {
      res.status(500).send({
        status: false,
        message: "server error",
        error,
      });
    }
  };

  const   addLocationList = async (req, res) => {
    try {
      let result = await LocationModel.insertMany(locationList);
      res.status(200).send({
        status: true,
        message: "added successfully",
        result: result,
      });
    } catch (error) {
      res.status(500).send({
        status: false,
        message: "server error",
        error,
      });
    }
  };







module.exports = {
    getLocationList,
    getLocationByCityName,
    addLocationList
}


