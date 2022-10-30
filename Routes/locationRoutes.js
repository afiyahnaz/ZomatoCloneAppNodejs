const express = require("express");
const locationCtrl = require("../Controllers/locationsCtrl");
const router = express.Router();





//location Routes
router.get('/api/getLocation',locationCtrl.getLocationList);
//this above id is used in reactjs for finding location in Homewallpaper

router.get('/api/getLocationByCityName', locationCtrl.getLocationByCityName);
router.post('/api/addLocationList', locationCtrl.addLocationList);


module.exports = router;