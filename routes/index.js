var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "BEYONCE API" });
});

router.get("/vegan_food", function(req, res, next) {
  res.send({ vegan_food: "hummus" });
});

router.get("/baby_supplies", function(req, res, next) {
  res.send([
    { baby_supplies: "onesie" },
    { baby_supplies: "diaper" },
    { baby_supplies: "bottle" }
  ]);
});
router.get("/dry_cleaning", function(req, res, next) {
  res.send({ dry_cleaning: "bootilicious things" });
});

router.get("/facts", function(req, res, next) {
  res.send([
    {
      fact:
        "As a kid, Beyoncé would charge her parents' friends $5 each to watch her perform."
    },
    {
      fact:
        "Beyoncé considers the first time she visited the Sistine Chapel and saw Michelangelo's work one of the most spectacular experiences of her life."
    },
    {
      fact:
        "Sasha Fierce — Beyoncé's fearless alter ego — was invented on the set of the Crazy in Love music video in 2003."
    },
    {
      fact:
        "If Beyoncé had a day of total anonymity she says she'd like to walk down Times Square, something she's never been able to do."
    },
    { fact: "Beyonce Wrote 'Crazy In Love' In Two Hours... With A Hangover!" },
    {
      fact:
        "Matthew Knowles took a 50% pay cut when he left his job to manage Beyoncé."
    },
    {
      fact:
        "The name Destiny's Child is derived from a passage in the Book of Isaiah."
    },
    {
      fact:
        "Beyonce is the first female artist to have her first six studio albums debut at number one."
    },
    {
      fact: "Bey's 2007 tour 'The Beyonce Experience' grossed over $24 million."
    },
    { fact: "Beyoncé only had one boyfriend before Jay Z." },
    { fact: " Beyoncé's middle name is Giselle." },
    {
      fact:
        "Beyoncé rapped the first verse of 'Partition' off the cuff, without even writing it down."
    },
    { fact: "Beyoncé only had one boyfriend before Jay Z." },
    { fact: " Beyonce has performed for the Obamas twice." },
    {
      fact: " Beyoncé began recording her surprise self-titled album in 2012."
    },
    {
      fact:
        " Beyoncé's 2013 Super Bowl performance prompted 268,000 tweets per minute."
    }
  ]);
});

module.exports = router;

// https://stark-badlands-52044.herokuapp.com/fact
