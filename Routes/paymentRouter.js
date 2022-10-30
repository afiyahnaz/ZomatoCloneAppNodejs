const express = require("express");
const paymentCtrl = require("../Controllers/paymentCtrl");
const router = express.Router();




router.post('/api/payment',paymentCtrl.getOrderId);

router.post('/api/callback',paymentCtrl.verifyPayment);

module.exports = router;

