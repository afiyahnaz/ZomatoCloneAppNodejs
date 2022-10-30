const express = require("express");
const restauCtrl = require("../Controllers/restauContrl");
const router = express.Router();


//restaurant
router.get('/api',restauCtrl.home);
router.get('/api/getRestaurantDetails',restauCtrl.getRestaurantList);
router.post("/addRestaurant", restauCtrl.addRestaurantList);
router.get(
    '/api/getRestaurantById/:id',
    restauCtrl.getRestaurantDetailsById
    );
//the above rouetr is used in reactjs in Homewallpaper
router.get(
    '/api/getRestaurantByLocationId/:id',
    restauCtrl.getRestaurantLocationId
    );
//the above rouetr is used in reactjs in RestaurantPage

//filter router
router.post('/api/filter',restauCtrl.filterData);



module.exports = router;