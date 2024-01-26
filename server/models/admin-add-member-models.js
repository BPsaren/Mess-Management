const {Schema, model}=require("mongoose");

const AdminAddMemberSchema = new Schema({
    date:{type: String, required:true},
    username :{type: String, required:true},
    email :{type: String, required:true},
    phone :{type: String, required:true},

});

// create model or collection


const adminaddmember = new model ('adminaddmember', AdminAddMemberSchema);
module.exports = adminaddmember;