var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "BEYONCE API" });
});

router.get("/fact", function(req, res, next) {
  res.send([{ fact: "Born in Houston, Texas" }]);
});

module.exports = router;
