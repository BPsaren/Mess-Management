const express= require("express");
const router= express.Router();

//*----------------------------------*
// Require controller and Middleware//
//*----------------------------------*

// Admin controller all logic here
const adminController= require("../controllers/admin-controller");
//check the toke is verified or not
const userMiddleware =require("../middlewares/user-auth-middleware");
// admin are not verified that logic
const adminMiddleware =require("../middlewares/auth-admin-middleware");
// admin Add meal logic
const AdminAddAllMealMemberMeal= require("../controllers/Admin-add-Meal-controller");
// admin Add member logic
const AdminAddAllMember= require("../controllers/Admin-Add-Member-controller");
// admin Add member logic
const AdminAddAllMemberMoney= require("../controllers/Admin-Add-Member-Money-controller");
//Admin Add Bazar Coast
const AdminAddBazarCoast=require("../controllers/Admin-Add-Bazar-Coast-controller");



//*----------------------*
// Data Retrieve Logic //
//*---------------------*
//Get all users data fetch
router.route("/users").get(userMiddleware,adminMiddleware,adminController.getAllUsers);

router.route("/contacts").get(userMiddleware,adminController.getAllContacts);

//single data fetch
router.route("/users/:id").get(userMiddleware,adminMiddleware,adminController.singleDataById);

//update user data
router.route("/users/update/:id").patch(userMiddleware,adminMiddleware,adminController.updateUserData);

// delete routes create
router.route("/users/delete/:id").delete(userMiddleware,adminMiddleware,adminController.deleteUserById);


//Mess management data seen by Admin
//view Meal Request 
router.route("/viewmealrequest").get(userMiddleware,adminMiddleware,adminController.ViewMealRequest);


//Admin Add Member
router.route("/adminaddmember").post(userMiddleware,adminMiddleware,AdminAddAllMember);


//Admin Add Member Meal
router.route("/adminaddmeal").post(userMiddleware,adminMiddleware,AdminAddAllMealMemberMeal);



//Admin Add Member Money
router.route("/adminaddmembermoney").post(userMiddleware,adminMiddleware,AdminAddAllMemberMoney);

//Admin Add Bazar coast entry
//Admin Add Member Money
router.route("/adminaddbazarcoast").post(userMiddleware,adminMiddleware,AdminAddBazarCoast);




module.exports = router;

