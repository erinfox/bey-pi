var express = require("express");
var router = express.Router();

/* GET Tracks listing. */
router.get("/", function(req, res, next) {
  res.send([
    {
      title: "LOVEHAPPY",
      album: "Everything Is Love",
      year: 2018,
      length: "3:49",
      featuring: ""
    },
    {
      title: "SINCERELY SUMMER",
      album: "Everything Is Love",
      year: 2018,
      length: "4:45",
      featuring: ""
    },
    {
      title: "APESH**T",
      album: "Everything Is Love",
      year: 2018,
      length: "4:24",
      featuring: ""
    },
    {
      title: "BOSS",
      album: "Everything Is Love",
      year: 2018,
      length: "4:04",
      featuring: ""
    },
    {
      title: "NICE",
      album: "Everything Is Love",
      year: 2018,
      length: "3:53",
      featuring: ""
    },
    {
      title: 713,
      album: "Everything Is Love",
      year: 2018,
      length: "3:13",
      featuring: ""
    },
    {
      title: "FRIENDS",
      album: "Everything Is Love",
      year: 2018,
      length: "5:44",
      featuring: ""
    },
    {
      title: "HEARD ABOUT US",
      album: "Everything Is Love",
      year: 2018,
      length: "3:10",
      featuring: ""
    },
    {
      title: "THE BLACK EFFECT",
      album: "Everything Is Love",
      year: 2018,
      length: "5:13",
      featuring: ""
    },
    {
      title: "PRAY YOU CATCH ME",
      album: "Lemonade",
      year: 2016,
      length: "3:16",
      featuring: ""
    },
    {
      title: "HOLD UP",
      album: "Lemonade",
      year: 2016,
      length: "3:41",
      featuring: ""
    },
    {
      title: "DON’T HURT YOURSELF",
      album: "Lemonade",
      year: 2016,
      length: "3:54",
      featuring: "Jack White"
    },
    {
      title: "SORRY",
      album: "Lemonade",
      year: 2016,
      length: "3:53",
      featuring: ""
    },
    {
      title: "6 INCH",
      album: "Lemonade",
      year: 2016,
      length: "4:20",
      featuring: "THE WEEKND"
    },
    {
      title: "LOVE DROUGHT",
      album: "Lemonade",
      year: 2016,
      length: "3:58",
      featuring: ""
    },
    {
      title: "SANDCASTLES",
      album: "Lemonade",
      year: 2016,
      length: "3:03",
      featuring: ""
    },
    {
      title: "FORWARD",
      album: "Lemonade",
      year: 2016,
      length: "1:19",
      featuring: "JAMES BLAKE"
    },
    {
      title: "FREEDOM",
      album: "Lemonade",
      year: 2016,
      length: "4:50",
      featuring: "KENDRICK LAMAR"
    },
    {
      title: "ALL NIGHT",
      album: "Lemonade",
      year: 2016,
      length: "5:22",
      featuring: ""
    },
    {
      title: "FORMATION",
      album: "Lemonade",
      year: 2016,
      length: "3:26",
      featuring: ""
    },
    {
      title: "LEMONADE",
      album: "Lemonade",
      year: 2016,
      length: "5:55",
      featuring: ""
    },
    {
      title: "PRETTY HURTS",
      album: "Beyoncé",
      year: 2013,
      length: "4:18",
      featuring: ""
    },
    {
      title: "HAUNTED",
      album: "Beyoncé",
      year: 2013,
      length: "6:09",
      featuring: ""
    },
    {
      title: "DRUNK IN LOVE",
      album: "Beyoncé",
      year: 2013,
      length: "5:23",
      featuring: "JAY Z"
    },
    {
      title: "BLOW",
      album: "Beyoncé",
      year: 2013,
      length: "5:09",
      featuring: ""
    },
    {
      title: "NO ANGEL",
      album: "Beyoncé",
      year: 2013,
      length: "3:48",
      featuring: ""
    },
    {
      title: "PARTITION",
      album: "Beyoncé",
      year: 2013,
      length: "5:19",
      featuring: ""
    },
    {
      title: "JEALOUS",
      album: "Beyoncé",
      year: 2013,
      length: "3:04",
      featuring: ""
    },
    {
      title: "ROCKET (06:31",
      album: "Beyoncé",
      year: 2013,
      length: "6:31",
      featuring: ""
    },
    {
      title: "MINE",
      album: "Beyoncé",
      year: 2013,
      length: "6:18",
      featuring: "DRAKE"
    },
    {
      title: "XO",
      album: "Beyoncé",
      year: 2013,
      length: "3:35",
      featuring: ""
    },
    {
      title: "***FLAWLESS",
      album: "Beyoncé",
      year: 2013,
      length: "4:10",
      featuring: "CHIMAMANDA NGOZI ADICHIE"
    },
    {
      title: "SUPER POWER",
      album: "Beyoncé",
      year: 2013,
      length: "4:36",
      featuring: "FRANK OCEAN"
    },
    {
      title: "HEAVEN",
      album: "Beyoncé",
      year: 2013,
      length: "3:50",
      featuring: ""
    },
    {
      title: "BLUE",
      album: "Beyoncé",
      year: 2013,
      length: "4:26",
      featuring: "BLUE IVY"
    },
    {
      title: "7/11",
      album: "Beyoncé",
      year: 2013,
      length: "3:33",
      featuring: ""
    },
    {
      title: "FLAWLESS REMIX",
      album: "Beyoncé",
      year: 2013,
      length: "3:54",
      featuring: "NICKI MINAJ"
    },
    {
      title: "DRUNK IN LOVE REMIX",
      album: "Beyoncé",
      year: 2013,
      length: "6:35",
      featuring: "JAY Z, KANYE WEST"
    },
    {
      title: "RING OFF",
      album: "Beyoncé",
      year: 2013,
      length: "3:00",
      featuring: ""
    },
    {
      title: "BLOW REMIX",
      album: "Beyoncé",
      year: 2013,
      length: "5:09",
      featuring: "PHARRELL WILLIAMS"
    },
    {
      title: "STANDING ON THE SUN REMIX",
      album: "Beyoncé",
      year: 2013,
      length: "4:33",
      featuring: "MR. VEGAS"
    },
    {
      title: "LOVE ON TOP",
      album: 4,
      year: 2011,
      length: "4:27",
      featuring: ""
    },
    {
      title: "PARTY",
      album: 4,
      year: 2011,
      length: "4:04",
      featuring: "ANDRÉ 3000"
    },
    {
      title: "SCHOOLIN' LIFE",
      album: 4,
      year: 2011,
      length: "4:52",
      featuring: ""
    },
    {
      title: "COUNTDOWN",
      album: 4,
      year: 2011,
      length: "3:33",
      featuring: ""
    },
    {
      title: "I MISS YOU",
      album: 4,
      year: 2011,
      length: "2:58",
      featuring: ""
    },
    {
      title: "DANCE FOR YOU",
      album: 4,
      year: 2011,
      length: "6:15",
      featuring: ""
    },
    {
      title: "I CARE",
      album: 4,
      year: 2011,
      length: "3:59",
      featuring: ""
    },
    {
      title: "RATHER DIE YOUNG",
      album: 4,
      year: 2011,
      length: "3:43",
      featuring: ""
    },
    {
      title: "1+1",
      album: 4,
      year: 2011,
      length: "4:34",
      featuring: ""
    },
    {
      title: "END OF TIME",
      album: 4,
      year: 2011,
      length: "3:44",
      featuring: ""
    },
    {
      title: "RUN THE WORLD (GIRLS)",
      album: 4,
      year: 2011,
      length: "3:58",
      featuring: ""
    },
    {
      title: "BEST THING I NEVER HAD",
      album: 4,
      year: 2011,
      length: "4:13",
      featuring: ""
    },
    {
      title: "START OVER",
      album: 4,
      year: 2011,
      length: "3:19",
      featuring: ""
    },
    {
      title: "I WAS HERE",
      album: 4,
      year: 2011,
      length: "3:58",
      featuring: ""
    },
    {
      title: "IF I WERE A BOY",
      album: "I Am... Sasha Fierce",
      year: 2008,
      length: "4:09",
      featuring: ""
    },
    {
      title: "HALO",
      album: "I Am... Sasha Fierce",
      year: 2008,
      length: "4:21",
      featuring: ""
    },
    {
      title: "DISAPPEAR",
      album: "I Am... Sasha Fierce",
      year: 2008,
      length: "4:27",
      featuring: ""
    },
    {
      title: "BROKEN-HEARTED GIRL",
      album: "I Am... Sasha Fierce",
      year: 2008,
      length: "4:37",
      featuring: ""
    },
    {
      title: "AVE MARIA",
      album: "I Am... Sasha Fierce",
      year: 2008,
      length: "3:42",
      featuring: ""
    },
    {
      title: "SMASH INTO YOU",
      album: "I Am... Sasha Fierce",
      year: 2008,
      length: "4:31",
      featuring: ""
    },
    {
      title: "SATELLITES",
      album: "I Am... Sasha Fierce",
      year: 2008,
      length: "3:06",
      featuring: ""
    },
    {
      title: "THAT'S WHY YOU'RE BEAUTIFUL",
      album: "I Am... Sasha Fierce",
      year: 2008,
      length: "3:41",
      featuring: ""
    },
    {
      title: "SAVE THE HERO (BONUS TRACK)",
      album: "I Am... Sasha Fierce",
      year: 2008,
      length: "4:33",
      featuring: ""
    },
    {
      title: "SINGLE LADIES (PUT A RING ON IT)",
      album: "I Am... Sasha Fierce",
      year: 2008,
      length: "3:13",
      featuring: ""
    },
    {
      title: "RADIO",
      album: "I Am... Sasha Fierce",
      year: 2008,
      length: "3:38",
      featuring: ""
    },
    {
      title: "DIVA",
      album: "I Am... Sasha Fierce",
      year: 2008,
      length: "3:20",
      featuring: ""
    },
    {
      title: "SWEET DREAMS",
      album: "I Am... Sasha Fierce",
      year: 2008,
      length: "3:28",
      featuring: ""
    },
    {
      title: "VIDEO PHONE",
      album: "I Am... Sasha Fierce",
      year: 2008,
      length: "3:35",
      featuring: ""
    },
    {
      title: "HELLO",
      album: "I Am... Sasha Fierce",
      year: 2008,
      length: "4:16",
      featuring: ""
    },
    {
      title: "EGO",
      album: "I Am... Sasha Fierce",
      year: 2008,
      length: "3:56",
      featuring: ""
    },
    {
      title: "SCARED OF LONELY",
      album: "I Am... Sasha Fierce",
      year: 2008,
      length: "3:42",
      featuring: ""
    },
    {
      title: "EGO (REMIX)",
      album: "I Am... Sasha Fierce",
      year: 2008,
      length: "4:43",
      featuring: "KANYE WEST"
    },
    {
      title: "POISON",
      album: "I Am... Sasha Fierce",
      year: 2008,
      length: "4:04",
      featuring: ""
    },
    {
      title: "VIDEO PHONE",
      album: "I Am... Sasha Fierce",
      year: 2008,
      length: "5:04",
      featuring: "LADY GAGA"
    },
    {
      title: "WHY DON'T YOU LOVE ME",
      album: "I Am... Sasha Fierce",
      year: 2008,
      length: "3:37",
      featuring: ""
    },
    {
      title: "BEAUTIFUL LIAR",
      album: "B'Day",
      year: 2006,
      length: "3:19",
      featuring: ""
    },
    {
      title: "IRREPLACEABLE",
      album: "B'Day",
      year: 2006,
      length: "3:47",
      featuring: ""
    },
    {
      title: "GREEN LIGHT",
      album: "B'Day",
      year: 2006,
      length: "3:29",
      featuring: ""
    },
    {
      title: "KITTY KAT",
      album: "B'Day",
      year: 2006,
      length: "3:55",
      featuring: ""
    },
    {
      title: "WELCOME TO HOLLYWOOD",
      album: "B'Day",
      year: 2006,
      length: "3:18",
      featuring: ""
    },
    {
      title: "UPGRADE U",
      album: "B'Day",
      year: 2006,
      length: "4:32",
      featuring: ""
    },
    {
      title: "FLAWS AND ALL",
      album: "B'Day",
      year: 2006,
      length: "4:08",
      featuring: ""
    },
    {
      title: "WORLD WIDE WOMAN",
      album: "B'Day",
      year: 2006,
      length: "3:41",
      featuring: ""
    },
    {
      title: "GET ME BODIED (EXTENDED MIX)",
      album: "B'Day",
      year: 2006,
      length: "6:19",
      featuring: ""
    },
    {
      title: "IF",
      album: "B'Day",
      year: 2006,
      length: "3:18",
      featuring: ""
    },
    {
      title: "FREAKUM DRESS",
      album: "B'Day",
      year: 2006,
      length: "3:20",
      featuring: ""
    },
    {
      title: "SUGA MAMA",
      album: "B'Day",
      year: 2006,
      length: "3:24",
      featuring: ""
    },
    {
      title: "DÉJÀ VU",
      album: "B'Day",
      year: 2006,
      length: "3:59",
      featuring: "JAY Z"
    },
    {
      title: "RING THE ALARM",
      album: "B'Day",
      year: 2006,
      length: "3:23",
      featuring: ""
    },
    {
      title: "RESENTMENT",
      album: "B'Day",
      year: 2006,
      length: "4:40",
      featuring: ""
    },
    {
      title: "LISTEN (FROM THE MOTION PICTURE DREAM GIRLS)",
      album: "B'Day",
      year: 2006,
      length: "3:37",
      featuring: ""
    },
    {
      title: "GET ME BODIED",
      album: "B'Day",
      year: 2006,
      length: "3:25",
      featuring: ""
    },
    {
      title: "CRAZY IN LOVE",
      album: "Dangerously In Love",
      year: 2003,
      length: "3:56",
      featuring: ""
    },
    {
      title: "NAUGHTY GIRL",
      album: "Dangerously In Love",
      year: 2003,
      length: "3:28",
      featuring: ""
    },
    {
      title: "BABY BOY",
      album: "Dangerously In Love",
      year: 2003,
      length: "4:04",
      featuring: ""
    },
    {
      title: "HIP HOP STAR",
      album: "Dangerously In Love",
      year: 2003,
      length: "3:42",
      featuring: ""
    },
    {
      title: "BE WITH YOU",
      album: "Dangerously In Love",
      year: 2003,
      length: "4:20",
      featuring: ""
    },
    {
      title: "ME, MYSELF AND I",
      album: "Dangerously In Love",
      year: 2003,
      length: "5:01",
      featuring: ""
    },
    {
      title: "YES",
      album: "Dangerously In Love",
      year: 2003,
      length: "4:19",
      featuring: ""
    },
    {
      title: "SIGNS",
      album: "Dangerously In Love",
      year: 2003,
      length: "4:58",
      featuring: ""
    },
    {
      title: "SPEECHLESS",
      album: "Dangerously In Love",
      year: 2003,
      length: "6:00",
      featuring: ""
    },
    {
      title: "THAT'S HOW YOU LIKE IT",
      album: "Dangerously In Love",
      year: 2003,
      length: "3:39",
      featuring: ""
    },
    {
      title: "THE CLOSER I GET TO YOU",
      album: "Dangerously In Love",
      year: 2003,
      length: "4:57",
      featuring: ""
    },
    {
      title: "DANGEROUSLY IN LOVE 2",
      album: "Dangerously In Love",
      year: 2003,
      length: "4:53",
      featuring: ""
    },
    {
      title: "BEYONCÉ INTERLUDE",
      album: "Dangerously In Love",
      year: 2003,
      length: "0:16",
      featuring: ""
    },
    {
      title: "GIFT FROM VIRGO",
      album: "Dangerously In Love",
      year: 2003,
      length: "2:43",
      featuring: ""
    },
    {
      title: "DADDY",
      album: "Dangerously In Love",
      year: 2003,
      length: "4:58",
      featuring: ""
    }
  ]);
});

module.exports = router;
