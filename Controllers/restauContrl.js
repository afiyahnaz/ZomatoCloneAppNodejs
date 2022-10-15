const RestaurantModel = require("../models/restaurantModel");

const home = ((req,res) =>{
    res.send("restaurant Home Page");
    res.status(200);
});

const getRestaurantList = async  (req,res) => {
    try{
        const result =  await RestaurantModel.find();
        res.send({
              status:true,
              result
          });
          res.status(200);

    } catch (error) {
        res.status(500);
        res.send({
            status: false,
            error,
        })
    }
 
};


const getRestaurantListByLocId = async (req,res) => {
    try{
        let id = req.params.id;
        let result = await  RestaurantModel.find({locationId: id});
        res.status(200),
        res.send({
        status: true,
        result,
     })
} catch (error) {
        res.status(500);
        res.send({
        status: false,
        error,
    })
}

};

const getRestaurantDetailsById = async (req,res) => {
    let id = req.params.id;
    try{
       
        let result = await RestaurantModel.findOne({_id:id});
        if (result){
            res.status(200);
            res.send({
                status: true,
                result,
            });
        } else{
            res.status(200);
            res.send({
                status: false,
                message: "restaurant Not Found",
            });
        }
    }catch (error) {
        res.status(500);
        res.send({
            status: false,
            message: "Internal Server Error",
            error,
        })
    }

};

const filterData = async (req,res) => {
    let { mealType, location, cuisine, hcost, lcost, sort, page  } = req.body;


     //sort = 1 ===> low to high
    //sort = -1 ===> high to low
    //lcost ===> 0
    //hcost ===> 500                         //if sort send then high to low
    sort = sort === undefined ? 1 : sort; //if sort not send default low to high
    

     //[1,2,3,4,5,6]
    page = page === undefined ? 1 : page;
    let perPage  = 2;
   

    let startIndex  = page * perPage - perPage ; //0
    let endIndex   =  page * perPage; //1

    let filter = {};                    

     if(location !== undefined) filter['locationId'] = location;
     if(mealType  !== undefined) filter['mealtypeId'] = mealType; 
     if(cuisine !== undefined)    filter ['cuisineId']  = { $in : cuisine};
     if(hcost !== undefined && lcost !== undefined) filter ['minPrice']  = { $gte: lcost, $lte: hcost };

   
    let result = await  RestaurantModel.find(filter, {
        name:1,
        city:1,
        locality:1,
        minPrice:1,
        cuisine:1,
         image:1,
    }).sort({
        minPrice: sort,
    });

   let newResult =  result.slice(startIndex, endIndex);


    res.status(200),
    res.send({
        status: true,
        newResult,
    });
};


module.exports = {
                    home,
                    getRestaurantList,
                    getRestaurantListByLocId,
                    getRestaurantDetailsById,
                    filterData
                   

};

/*  let { mealType, location, cuisine, hcost, lcost, sort, page  } = req.body; */

