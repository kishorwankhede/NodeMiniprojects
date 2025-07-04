const express = require("express");
const productctrl = require("../controller/productcontrol.js");

const router = express.Router();

// Route: Home page
router.get("/", productctrl.homePage);

// Route: Add Product form page
router.get("/addprod", productctrl.addprodPage);

// Route: Handle product submission
router.post("/addproduct", productctrl.addproduct);


//router.get("/getAllProd",productctrl.getAllProducts);
//router.get("/searchcategoryByName",productctrl.searchCategoryByName);
router.get("/getAllProd",productctrl.getAllProducts);
router.get("/searchcategoryByName",productctrl.searchCategoryByName);
router.get("/deletefood", productctrl.deleteProduct);

router.get("/updateProd",productctrl.updateProduct);
router.post("/UpdateProd",productctrl.ProductFinalUpdate);
module.exports = router;
