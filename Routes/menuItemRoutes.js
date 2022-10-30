const express = require("express");
const menuItemCtrl = require("../Controllers/menuItemCtrl");
const router = express.Router();





//menuItems Routes
router.get('/api/getMenuItem',menuItemCtrl.getMenuItem);
router.post('/api/addMenuItem',menuItemCtrl.addMenuItem );


module.exports = router;