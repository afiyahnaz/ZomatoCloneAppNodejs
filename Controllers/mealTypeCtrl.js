const mealTypeModel = require('../models/mealTypeModel');
const mealType = require("../resources/mealType.json");





const getMealTypeList = async (req,res) => {
    try{
        let result = await mealTypeModel.find();
        res.status(200);
        res.send({
            status:true,
            result,
        });

    } catch (error) {
        res.status(500).send({
            status: false,
            error,
        });
    }
};
   
 const  getMealTypes = async  (req, res) => {
    try {
      let result = await mealTypeModel.find();
      res.status(200).send({
        status: true,
        meal_type: result,
      });
    } catch (error) {
      res.status(500).send({
        status: false,
        message: "server error",
        error,
      });
    }
  };

  const  addMealType = async (req, res)  => {
    try {
      let result = await mealTypeModel.insertMany(mealType);
      res.status(200).send({
        status: true,
        message: "meal type added successfully",
        result,
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
                    
                    getMealTypeList,
                    getMealTypes ,
                    addMealType

}

