require('dotenv').config();
const express= require("express");
const app = express();
const cors= require("cors");
const authRoute=require("./router/auth-router");
const contactRoute= require("./router/contact-router");
const serviceRoute= require("./router/service-router");
const adminRoute= require("./router/admin-router");
const adminContact= require("./router/contact-router");
const melReq= require("./router/meal-request");
const bazarEntry= require("./router/bazar-coast-entry");


const connect_database = require("./utils/db");
const errorMiddleware = require('./middlewares/error-middleware');


//tackle the cors operation
const corOptions={
    origin: "http://localhost:5173",
    methods:"GET,POST,PATCH,DELETE,HEAD",
    credential:true,
};
app.use(cors(corOptions));





//for middleware make sure not  faced by problem get for json data f
app.use(express.json());
app.use("/api/auth",authRoute);
app.use("/api/form", contactRoute);
app.use("/api/data", serviceRoute);

//admin only have access this middleware
app.use("/api/admin", adminRoute);

//admin only have access this middleware
app.use("/api/contacts", adminContact);

//meal request route
app.use("/api/meal",  melReq);

//bazarEntry route
app.use("/api/bazar",  bazarEntry);






app.use(errorMiddleware);
const PORT =3000;

connect_database().then(()=>{
app.listen(PORT, () => {
    console.log(`listening on port number ,${PORT}`);
});
});
