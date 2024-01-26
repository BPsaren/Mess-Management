const {Schema,Mongoose, model} = require('mongoose');


const serviceSchema= new Schema({
  service:{
    type:String,
    required:true,
  },
  description:{
    type:String,
    required:true,
  },
  price:{
    type:String,
    required:true,
  },
  provider:{
    type:String,
    required:true,
  }
});

// database er nam anusare aita lekha ache Service boro hate "S" start korte hoy jeta lekha tahuk na kno

const Service = new model("Service",serviceSchema);

module.exports = Service;