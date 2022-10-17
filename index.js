//registering installed packages
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

//registering created routes
const restauRouter = require('./Routes/restauRoutes');
const locationRouter = require('./Routes/locationRoutes');
const mealTypeRouter = require('./Routes/mealTypeRouters');
const menuItemRouter  =require("./Routes/menuItemRoutes");
const paymentRouter = require("./Routes/paymentRouter");
const userRouter     = require('./Routes/userRoutes');
const config = require('./config/index');

const app = express();

app.use(cors());// enable cors
//to enable/access POST data (body-parser)
app.use(express.json()); //convert string JSON data to pure json data
app.use(express.urlencoded({extended:false})); //normal POST data to JSON data


const PORT =  process.env.PORT || 5003;
app.listen(PORT, ()=>{
   console.log(`zomato app is running on ${PORT}`);

});




//connecting to mongoose
mongoose.connect(config.dbConstr,(err,result) => {
    if(!err)   console.log('connected to db');
    else       console.log(err);
});


//   https://zomatoclonenodejs.herokuapp.com

app.use('',restauRouter);
app.use('', locationRouter);
app.use('', mealTypeRouter);
app.use('',menuItemRouter);
app.use('',paymentRouter );
app.use('',userRouter);



//    https://zomatoclonereactjs.herokuapp.com


//     https://incandescent-kleicha-232b4b.netlify.app