const AdminAddBazarCoast = require("../models/admin-add-bazar-coast-models");


const AdminAddBazar= async(req,res)=>{

try {
      const data = req.body;
      await AdminAddBazarCoast.create(data);
      return res.status(300).json({message:"Bazar coast Added successfully"});
    
} catch (error) {
    res.status(400).json({message:"Bazar coast not Added",error})  ;
}

}


module.exports=AdminAddBazar;