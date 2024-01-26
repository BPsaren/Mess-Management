const {Schema, model}=require("mongoose");

const mealReqSchema = new Schema({
    date :{type: String, required:true},
    person :{type: String, required:true},
    morning :{type: String, required:true},
    night :{type: String, required:true},
    guestMeal :{type: String, required:true},
   

});

// create model or collection


const mealrequest = new model ('mealrequest', mealReqSchema);
module.exports = mealrequest;