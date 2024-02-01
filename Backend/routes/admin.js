const express = require("express");
const router = express.Router();
const {
  adminSignup,
  adminLogin,
  setRadius,
  getSingleRadius,
  setTax,
  getRadius,
  getTax,
  getDashboardData,
  getSingleShopById,
  updateRadius,
  updateShopById,
  getAdmin,
} = require("../controllers/admin.controllers");
const checkAuth = require("../middleware/check-auth");

router.post("/signup", adminSignup);
router.post("/login", adminLogin);
router.post("/setradius", setRadius);
router.get("/getradius", checkAuth, getRadius);
router.get("/getsingleshopbyid" ,getSingleShopById);
router.patch("/updateradius" ,updateRadius);
router.post("/updateshopbyid" ,updateShopById);
router.get("/getsingleradius" ,getSingleRadius);
router.post("/settax", checkAuth, setTax);
router.get("/gettax", checkAuth, getTax);
router.get("/getdashboarddata", checkAuth, getDashboardData);
router.get("/getadmin", getAdmin);

module.exports = router;
