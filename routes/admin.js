const express = require("express");
const { getAdminpage } = require("../controller/adminController");
const router = express.Router();

router.get("/",getAdminpage);
 

module.exports = router;
