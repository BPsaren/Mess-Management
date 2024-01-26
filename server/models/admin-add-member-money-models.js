const {Schema, model}=require("mongoose");

const AdminAddMemberMoneySchema = new Schema({
    date:{type: String, required:true},
    username :{type: String, required:true},
    money:{type: String, required:true},
   

});

// create model or collection


const adminaddmembermoney = new model ('adminaddmembermoney', AdminAddMemberMoneySchema);

module.exports = adminaddmembermoney;