const path = require("path");
const express = require("express");
const router = express.Router();
const rootDir=require('../utils/path')

router.get("/", (req, res) => {
  const viewData={
    pageTitle:'Home page'
  }
  res.render('homePage',viewData)
});

module.exports = router;
 