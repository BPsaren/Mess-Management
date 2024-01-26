
const {Schema, model}=require("mongoose");

const bazarSchema= new Schema({

    date:{type: 'String', required: true},
    bazarPerson:{type: 'String', required: true},
    bazarAmount: {type: 'String', required: true},
    bazarList:{type: 'String', required: true}      

})

const bazarcoastentry = new model ('bazarcoastentry', bazarSchema);
module.exports = bazarcoastentry;