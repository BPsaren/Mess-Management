

const bazarCoastEntry= require("../models/bazar-Cost-Entry-models")



const bazarCoast=async (req,res)=>{
  try {
    const response =req.body;
       await bazarCoastEntry.create(response);
       return res.status(200).json({msg:"bazar coast entry successfully"})

    
  } catch (error) {
    
    res.status(200).json({msg:"bazar coast entry not send by manager"})

  }
       

}

module.exports =bazarCoast;
