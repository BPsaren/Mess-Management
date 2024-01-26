const user1 = require("../models/user-models");
const contact= require("../models/admin-add-meal-models");

//Get data form mealrequest
const mealrequest =require("../models/meal-request-models");

//import { useParams } from "react-router-dom";

//*------------------------------------*
//  admin using get all user logic   //
//*-----------------------------------*

const getAllUsers =async(req,res,next)=>{

     try {
        
        const users= await user1.find({},{password:0});

          if(!users || users.length === 0){
            res.status(404),json({message:"no users found"})
          }
          res.status(200).json(users);

     } catch (error) {

        /// using this logic error  forward backend to frontend
      next(error);



     }

}
//view mealrequest
//*----------------------------*
// View MealRequest Data get logic //
//*---------------------------*

const ViewMealRequest = async (req, res, next) => {
try {
// Extract the date parameter from the request
const { date } = req.query;
// Check if the date parameter is provided
if (!date) {
return res.status(400).json({ message: "Date parameter is required" });
}
// Use the date parameter to filter the meal requests
const VMR = await mealrequest.find({ date });
if (!VMR || VMR.length === 0) {
return res.status(404).json({ message: "No Meal Request Found for the given date" });
}
res.status(200).json(VMR);
} catch (error) {
// Forward the error from backend to frontend
next(error);
}
};










//*----------------------------*
// updateUserData  fetch logic   //
//*---------------------------*
 
const updateUserData =async(req,res,next)=>{

try {
  const id = req.params.id;

  const updateUser= await user1.updateOne({_id:id},{$set:updateUserData});


  return res.status(200).json(updateUser);
    


} catch (error) {
  next(error);
}



}


//*----------------------------*
// single data fetch logic   //
//*---------------------------*

const singleDataById= async(req, res,next) => {
   try {
         const id = req.params.id;

         const data = await user1.findOne({_id: id},{password:0});
         return res.status(200).json(data) ;

    
   } catch (error) {
    next(error);
   }


}


//*----------------------------*
//     Delete user logic        //
//*---------------------------*
const deleteUserById = async(req,res,next)=>{


       try {
        const id =  req.params.id;
        await user1.deleteOne ({_id:id});
         return res.status(200).json({message:"user deleted successfully"});
        
       } catch (error) {
        next(error)

       }


}





//*----------------------------*
//   Get all user contacts   //
//*---------------------------*

const getAllContacts=async(req,res,next)=>{
try {

    const contacts= await contact.find();
    console.log(contacts)
    if(!contacts || contacts.length === 0){
        res.status(404),json({message:"no users found"})
      }
      res.status(200).json(contacts);


    
} catch (error) {
    
    next(error);
}

}

module.exports = {ViewMealRequest,getAllUsers,getAllContacts,deleteUserById,singleDataById,updateUserData};