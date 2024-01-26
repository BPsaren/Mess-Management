
const express= require("express");
const router = express.Router();

const bazarCoastEntry= require("../controllers/bazarCoastEntry-controller");


router.route("/bazarcoastentry").post(bazarCoastEntry); 

module.exports = router;
