const express = require("express");
const mealTypeCtrl = require("../Controllers/mealTypeCtrl");
const router = express.Router();





//mealType Routes
router.get('/api/getMealTypes',mealTypeCtrl.getMealTypeList);


module.exports = router;