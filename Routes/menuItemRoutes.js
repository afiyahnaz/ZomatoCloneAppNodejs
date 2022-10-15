const express = require("express");
const menuItemCtrl = require("../Controllers/menuItemCtrl");
const router = express.Router();





//menuItems Routes
router.get('/api/getMenuItemListByRestaurantId/:restaurantId',menuItemCtrl.getMenuItemListByRestaurantId);


module.exports = router;