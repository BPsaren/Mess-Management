const MealReq= require("../models/meal-request-models");

const mealRequest= async (req,res)=>{
    try {
        
        const response = req.body;
        await MealReq.create(response)
        res.status(200).json({ msg: "Meal request send by Manager" });

    } catch (error) {
        res.status(500).json({ msg: "Meal request not send by Manager" });
    }
}


module.exports=mealRequest;