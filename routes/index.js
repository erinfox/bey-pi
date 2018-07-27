var express = require("express");
var router = express.Router();

/* GET home page. */

// Configured jsx view engine in root level app.js to look for index file in views folder
router.get("/", function(req, res, next) {
  res.render("index", {});
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

router.get("/albums", function(req, res, next) {
  res.send([
    {
      title: "Dangerously In Love",
      type: "Studio",
      year: 2003,
      cover:
        "https://upload.wikimedia.org/wikipedia/en/8/84/Dangerously_In_Love_Album%282003%29.png"
    },
    {
      title: "B'Day",
      type: "Studio",
      year: 2006,
      cover:
        "https://upload.wikimedia.org/wikipedia/en/c/c4/Beyonc%C3%A9_-_B%27Day.png"
    },
    {
      title: "I Am... Sasha Fierce",
      type: "Studio",
      year: 2008,
      cover:
        "https://upload.wikimedia.org/wikipedia/en/9/96/I_Am..._Sasha_Fierce.png"
    },
    {
      title: 4,
      type: "Studio",
      year: 2011,
      cover:
        "https://upload.wikimedia.org/wikipedia/en/c/ca/Beyonc%C3%A9_-_4.png"
    },
    {
      title: "Beyoncé",
      type: "Studio",
      year: 2013,
      cover:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Beyonc%C3%A9_-_Beyonc%C3%A9.svg/750px-Beyonc%C3%A9_-_Beyonc%C3%A9.svg.png"
    },
    {
      title: "Lemonade",
      type: "Studio",
      year: 2016,
      cover:
        "https://upload.wikimedia.org/wikipedia/en/5/53/Beyonce_-_Lemonade_%28Official_Album_Cover%29.png"
    },
    {
      title: "Everything Is Love",
      type: "Collaborative",
      year: 2018,
      cover:
        "https://upload.wikimedia.org/wikipedia/en/3/3d/The_Carters_-_Everything_Is_Love_%28Official_Album_Cover%29.png"
    },
    {
      title: "Live at Wembley",
      type: "Live",
      year: 2004,
      cover:
        "https://upload.wikimedia.org/wikipedia/en/1/11/Beyonce_-_Live_at_Wembley.png"
    },
    {
      title: "The Beyoncé Experience Live",
      type: "Live",
      year: 2007,
      cover:
        "https://upload.wikimedia.org/wikipedia/en/c/c9/The_Beyonc%C3%A9_Experience_Live.png"
    },
    {
      title: "I Am... Yours: An Intimate Performance at Wynn Las Vega",
      type: "Live",
      year: 2009,
      cover:
        "https://upload.wikimedia.org/wikipedia/en/e/e3/I_Am..._Yours_%28CD_Cover_Art%29.png"
    },
    {
      title: "I Am... World Tour",
      type: "Live",
      year: 2010,
      cover:
        "https://upload.wikimedia.org/wikipedia/en/a/a0/I_am_tour_standard.jpg"
    },
    {
      title: "Dreamgirls",
      type: "Sountrack",
      year: 2006,
      cover:
        "https://upload.wikimedia.org/wikipedia/en/9/96/DreamgirlsCover.jpg"
    }
  ]);
});

module.exports = router;

// https://stark-badlands-52044.herokuapp.com/fact
