const mealTypeModel = require('../models/mealTypeModel');


module.exports.getMealTypeList = async (req,res) => {
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



