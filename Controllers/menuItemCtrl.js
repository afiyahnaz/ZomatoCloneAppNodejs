const menuItemModel = require("../models/menuItemModel");

module.exports.getMenuItemListByRestaurantId = async (req,res)=>{
    let data = req.params;
    try{
        let result = await menuItemModel.find({ restaurantId: data.restaurantId});
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