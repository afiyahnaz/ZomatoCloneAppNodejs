const menuItemModel = require("../models/menuItemModel");
let menuItems = require("../resources/menuItems.json");


const getMenuItem = async (req,res) => {

    let id = req.query.rid;
    id = id ? id : 0;
    try{
        let result = await menuItemModel.find({ restaurantId: id});
        res.status(200);
        res.send({
        status:true,
        menuItems:result,
          
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

const  addMenuItem = async (req, res) =>  {
    try {
      let result = await MenuItemsModel.insertMany(menuItems);
      res.status(200).send({
        status: true,
        message: "MenuItemsModel added successfully",
        result,
      });
    } catch (error) {
      res.status(500).send({
        status: false,
        message: "server error",
        error,
      });
    }
  }





module.exports ={
                getMenuItem,
                addMenuItem 

}