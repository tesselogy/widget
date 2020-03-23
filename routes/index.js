var express = require('express');
var router = express.Router();
var ForgeSDK = require('forge-api-fm-pm');
var oAuth = require("../tools/0Auth");

/* GET home page. */
router.get('/', function(req, res) {
  if(req.session.credentials!=undefined){
    var User = new ForgeSDK.UserProfileApi;
    User.getUserProfile(oAuth,req.session.credentials).then(function(profile){
      //console.log(profile);
      res.render('user', {title: 'Айбим', menuconst: {'Хабы': '/hubs','Проекты': '/projects','Претензии': '/issues'}, firstName: profile.body.firstName, lastName: profile.body.lastName, img: profile.body.profileImages.sizeX120});
    },function (err){
      console.log(err);
      res.render('index', { title: 'Айбим', menuconst: {'Хабы': '/hubs','Проекты': '/projects','Претензии': '/issues'}, url4adsk: oAuth.oAuth2ThreeLegged.generateAuthUrl()});
    })
  } else {res.render('index', { title: 'Айбим', menuconst: {'Хабы': '/hubs','Проекты': '/projects','Претензии': '/issues'}, url4adsk: oAuth.oAuth2ThreeLegged.generateAuthUrl()});}
});

module.exports = router;
