/**
 * Created by ELEMIAN on 03.06.2019.
 */
/**
 * Created by ELEMIAN on 22.05.2019.
 */
/**
 * Created by ELEMIAN on 30.04.2019.
 */
var express = require('express');
var router = express.Router();
var ForgeSDK = require('forge-api-fm-pm');
var oAuth2 = require("../tools/0Auth");

/* GET authorided by ADSK page. */
router.get('/', function(req, res) {
    var regular = new RegExp('[(\?|\&)]([id=]+)\=([^&#]+)', "i");
    var code = req.url.match(regular);
    var code = code[2];
    var data = req.session.data.hubs;
    //console.log('ín projects - ' + JSON.stringify(data));
    var id = data[code].id;
    if (id) {req.session.data.breadcrumbs.hub = id;}
    var credentials = req.session.credentials; //23eggedcredentials from session
    if(id!=undefined||req.session.data.breadcrumbs.hub != undefined) {
        var ProjectsApi = new ForgeSDK.ProjectsApi;
        if(id==undefined) {id = req.session.data.breadcrumbs.hub} //if in requested url cant find id - using hub id from session
        ProjectsApi.getHubProjects(id,{},oAuth2.oAuth2ThreeLegged, credentials).then(function(projects) {
            req.session.data.projects = projects.body.data;
            console.log('Projects data ' + typeof(projects.body.data));
            //console.log(JSON.stringify(projects.body.data));
            res.render('projects', {data: projects.body.data, title: 'Projects'});
        }, function(err){
            console.error('error in 3legged' + JSON.stringify(err));
            res.redirect('/index');
        });
    } else res.redirect('/index')
});

module.exports = router;