const adminaddbazarcoast= require("../models/admin-add-meal-models");

const AdminAddMeal= async (req,res)=>{
    try {
        
        const response = req.body;
        await adminaddbazarcoast.create(response)
        res.status(200).json({ msg: "Admin Add Member Meal successfully" });

    } catch (error) {
        res.status(500).json({ msg: "No Meal Added" });
    }
}


module.exports=AdminAddMeal;