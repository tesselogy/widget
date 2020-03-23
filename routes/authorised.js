/**
 * Created by ELEMIAN on 30.04.2019.
 */

/*
authorising callback from oauth ADSK
if finding code - trying to reguesting 3legged auth
 */
var express = require('express');
var router = express.Router();
var oAuth2 = require("../tools/0Auth");

/* GET authorided by ADSK page. */
router.get('/', function(req, res) {
    var regular = new RegExp('[(\?|\&)]([code=]+)\=([^&#]+)', "i");
    var code = req.url.match(regular);
    if(code) {
        //console.log('authorisation code from ADSK ' + code[2]);
        //console.log('authorisation url ' + code);
        oAuth2.oAuth2TwoLegged.authenticate().then(function(credentials2){
            // The `credentials` object contains an access_token that is being used to call the endpoints.
            // In addition, this object is applied globally on the oAuth2TwoLegged client that you should use when calling secure endpoints.
            oAuth2.oAuth2ThreeLegged.getToken(code[2]).then(function (credentials) {
                //console.log(credentials);
                req.session.credentials = credentials;
                req.session.credentials2 = credentials2;
                //trying to request HUBs for this credentials
                res.redirect('/hubs')
            }, function(err){
                console.error(err);
                res.render('error', { message: 'ERROR', error: {status:'404',stack: err}});
            });
        }, function(err){
            console.error('error in 2legged' + err);
            res.render('error', { message: 'ERROR', error: {status:'404',stack: err}});
        });
    } else {console.log('unauthorised');res.redirect('/')}
});

module.exports = router;
