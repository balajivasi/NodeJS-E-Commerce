const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const viewData={
    pageTitle:'Admin PAge'
  }
  res.render('admin',viewData)
});


module.exports = router;
