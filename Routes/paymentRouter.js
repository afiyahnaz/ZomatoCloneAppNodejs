const express = require("express");
const paymentCtrl = require("../Controllers/paymentCtrl");
const router = express.Router();




router.post('/api/payment/genOrder',paymentCtrl.getOrderId);

router.post('/api/payment/verify',paymentCtrl.verifyPayment);

module.exports = router;

