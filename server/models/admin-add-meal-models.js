const {Schema, model}=require("mongoose");

const AdminAddMealSchema = new Schema({
    date:{type: String, required:true},
    setMeal:{type: String, required:true},
    username :{type: String, required:true},
    

});

// create model or collection


const adminaddmeal = new model ('adminaddmeal', AdminAddMealSchema);
module.exports = adminaddmeal;