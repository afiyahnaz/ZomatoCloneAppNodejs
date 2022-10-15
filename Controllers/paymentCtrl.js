const Razorpay = require("razorpay");
var crypto = require("crypto");

const getOrderId = (request, response) => {
  let { amount } = request.body;
  var instance = new Razorpay({
    key_id: "rzp_test_KvxHzp17jmYyxR",
    key_secret: "4lyaNWgLUpFznuNiRYExi1jJ",
  });
  var options = {
    amount:Number (amount) * 100, // amount in the smallest currency unit
    currency: "INR",
    receipt: "order_rcptid_11",
  };
  instance.orders.create(options, function (err, order) {
    if (err) {
      response.status(500).send({ status: false });
    } else {
      response.status(200).send({ status: true, order });
    }
  });
};

const verifyPayment = (request, response) => {
  // verify orderedn
  let { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
    request.body;
  let body = razorpay_order_id + "|" + razorpay_payment_id;

  var expectedSignature = crypto
    .createHmac("sha256", "P2QgtgDBLeaPDgSC673o14vC")
    .update(body.toString())
    .digest("hex");

  console.log("sig received ", razorpay_signature);
  console.log("sig generated ", expectedSignature);

  var message = { status: false };
  if (expectedSignature === razorpay_signature) message = { status: true };
  response.send(message);
};



module.exports = {  getOrderId,
                         verifyPayment


}