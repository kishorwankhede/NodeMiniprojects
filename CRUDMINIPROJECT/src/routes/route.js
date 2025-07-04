let express = require("express");
let multer = require("multer");
let deptctrl = require("../controllers/deptcontroller.js");
let empctrl = require("../controllers/empctrl.js");
let upload=require("../middleware/fileupload.js");

let router = express.Router();
router.post("/adddept", deptctrl.saveDept);
router.get("/", deptctrl.homePage);
router.get("/newdept", deptctrl.newDept);

router.get("/viewalldept", deptctrl.getAllDept);

router.get("/deldept", deptctrl.delDept);
router.get("/upddate", deptctrl.updateDept);

router.post("/updatedept", deptctrl.deptFinalUpdate);
router.get("/searchDeptByName", deptctrl.searchDeptByUsingName);
router.get("/newemployee", empctrl.newemp);

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

upload = multer({ storage: storage });
router.post("/savemp", upload.single("photo"),empctrl.saveEmployee );

router.get("/testup", (req, res) => {
  res.render("demoupload.ejs");
});

router.get("/searchEmail",empctrl.verifyEmail);

router.get("/viewemployee",empctrl.viewEmployee);
router.get("/getEmpByDeptId",empctrl.getEmployeeByDeptId);

module.exports = router;
