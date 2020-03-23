/**
 * Created by ELEMIAN on 22.05.2019.
 */
/**
 * Created by ELEMIAN on 30.04.2019.
 */

/*
searching HUBid from URL and request project data for rendering
 */
var express = require('express');
var router = express.Router();
var ForgeSDK = require('forge-apis');
var oAuth2 = require("../tools/0Auth");

/* GET authorided by ADSK page. */
router.get('/', function(req, res) {
    var regular = new RegExp('[(\?|\&)]([id=]+)\=([^&#]+)', "i");
    var code = req.url.match(regular);
    var code = code[2];
    var data = req.session.data.projects;
    var id = data[code].id;
    if (id) {req.session.data.breadcrumbs.project = id;}
    console.log('id - ' + id);
    console.log(req.session.data.projects[code]);
    var credentials = req.session.credentials; //23eggedcredentials from session
    if(id!=undefined||req.session.data.breadcrumbs.project != undefined) {
        var Issues = new ForgeSDK.Issues;
        var containerid = req.session.data.projects[code].relationships.issues.data.id;
        Issues.getIssues(containerid, oAuth2.oAuth2TwoLegged, credentials).then(function(issues) {
            req.session.data.issues = issues.body.data;
            //console.log('Projects data ' + typeof(projects.body.data));
            //console.log(JSON.stringify(issues.body.data));
            res.render('dashboard', {data: issues.body.data, title: 'Dashboard'});
        }, function(err){
            console.error('error in 3legged' + JSON.stringify(err));
            res.redirect('/index');
        });
    } else res.redirect('/index')
});

module.exports = router;
