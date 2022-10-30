const express = require("express");
const mealTypeCtrl = require("../Controllers/mealTypeCtrl");
const router = express.Router();




router.get("/api",mealTypeCtrl.apiHome);
//mealType Routes
router.get('/api/getMealTypes',mealTypeCtrl.getMealTypeList);
router.post('/api/addMealTypes', mealTypeCtrl.addMealType);


module.exports = router;