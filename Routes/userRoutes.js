const express = require("express");
const userCtrl = require("../Controllers/userCtrl");
const router = express.Router();





//login Routes
router.post('/api/login',userCtrl.login);
router.post('/api/signUp',userCtrl.signUp);




module.exports = router;