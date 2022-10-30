const RestaurantModel = require("../models/restaurantModel");
const restaurantList = require("../resources/restaurant.json");

const home = ((req,res) =>{
    res.send("restaurant Home Page");
    res.status(200);
});

const getRestaurantList = async  (req,res) => {
    try{
        const result =  await RestaurantModel.find();
        res.status(200),
        res.send({
              status:true,
             restaurant: result
          });
          res.status(200);

    } catch (error) {
        res.status(500);
        res.send({
            status: false,
            message: "server error",
            error,
        });
    }
 
};


const   addRestaurantList = async  (req, res) => {
    try {
      let result = await RestaurantModel.insertMany(restaurantList);
      res.status(200).send({
        status: true,
        message: "added successfully",
        result: result,
      });
    } catch (error) {
      res.status(500).send({
        status: false,
        message: "server error",
        error,
      });
    }
  };



const getRestaurantDetailsById = async (req,res) => {
    try {
        let { id } = req.params;
        let data = await RestaurantModel.findById(id);
  
        res.status(200).send({
          status: true,
          result: data,
        });
      } catch (error) {
        res.status(500).send({
          status: false,
          message: "server error",
          error,
        });
      }
    };

    const   getRestaurantLocationId = async (req, res) => {
        const { lid, rest } = req.query;
        try {
          let data = await RestaurantModel.find(
            {
              name: { $regex: rest + ".*", $options: "i" },
              location_id: Number(lid),
            },
            {
              name: 1,
              image: 1,
              location: 1,
              locality: 1,
              city: 1,
            }
          );
          res.status(200).send({ status: true, result: data });
        } catch (error) {
          res.status(500).send({
            status: false,
            message: "server error",
            error,
          });
        }
      };
   


const filterData = async (req,res) => {
    let {
        mealType,
        location,
        cuisine,
        lcost,
        hcost,
        page,
        sort,
        itemsPerPage,
      } = req.body;


     //sort = 1 ===> low to high
    //sort = -1 ===> high to low
    //lcost ===> 0
    //hcost ===> 500                         //if sort send then high to low
    sort = sort === undefined ? 1 : sort; //if sort not send default low to high
    

     //[1,2,3,4,5,6]
    page = page === undefined ? 1 : page;
    itemsPerPage = itemsPerPage ? itemsPerPage : 2;
    // let perPage  = 2;
   

    // let startIndex  = page * perPage - perPage ; //0
    // let endIndex   =  page * perPage; //1

    let staringIndex = page * itemsPerPage - itemsPerPage; //0
    let lastIndex = page * itemsPerPage; // 2

    let filter = {};                    

     if(location !== undefined) filter['locationId'] = location;
     if(mealType  !== undefined) filter['mealtypeId'] = mealType; 
     if(hcost !== undefined && lcost !== undefined) 
     filter ['minPrice']  = { $gte: lcost, $lte: hcost };

     cuisine && (filter["cuisineId"] = { $in: cuisine });
       console.log(filter);

    try{
    let result = await  RestaurantModel.find(filter, {
        aggregateRating: 1,
        name:1,
        city:1,
        locality:1,
        minPrice:1,
        cuisine:1,
         image:1,
    }).sort({
        minPrice: sort,
    });

    const filterResult = result.slice(staringIndex, lastIndex);
    res.status(200),
    res.send({
        status: true,
        result: filterResult,
        pageCount: Math.ceil(result.length / 2), //gives a round number

    });
} catch (error) {
    res.status(500).send({
      status: false,
      message: "server error",
      error,
    });
  }
};



module.exports = {
                    home,
                    getRestaurantList,
                    addRestaurantList,
                    getRestaurantDetailsById,
                    getRestaurantLocationId,
                    filterData
                   

};

/*  let { mealType, location, cuisine, hcost, lcost, sort, page  } = req.body; */

