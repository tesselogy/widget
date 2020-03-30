/**
 * Created by ELEMIAN on 30.04.2019.
 */
var express = require('express');
var router = express.Router();
var ForgeSDK = require('forge-apis');
var oAuth2 = require("../tools/0Auth");

/* GET authorided by ADSK page. */
router.get('/', function(req, res) {
    var credentials = req.session.credentials2; //2ThreeLegged from session
    if(req.session.credentials!=undefined&&req.session.credentials2!=undefined) {
        var HubsApi = new ForgeSDK.HubsApi();
        HubsApi.getHubs({},oAuth2.oAuth2TwoLegged, credentials).then(function(hubs) {
            //console.log('req obj after HubsApi' + JSON.stringify(hubs.body.data));
            req.session.data = {breadcrumbs:{hub:Number,project:Number},hubs:{},projects:{}};
            req.session.data.hubs = hubs.body.data;
            console.log('Hubs data ' + typeof(hubs.body.data));
            res.render('hubs', {data: hubs.body.data, title: 'HUB-s'});
        }, function(err){
            console.error('error in 3legged' + err);
            res.redirect('/index');
        });
    } else res.redirect('/index')
});

module.exports = router;
