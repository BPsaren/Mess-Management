const express = require('express');
const router = express.Router();


const mealRequest = require("../controllers/meal-request-controller");

router.route("/mealrequest").post(mealRequest); 

module.exports = router;