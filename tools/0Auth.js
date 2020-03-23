/**
 * Created by ELEMIAN on 01.05.2019.
 */
var ForgeSDK = require('forge-apis');
var CLIENT_ID = 'D2dLeYAGs562pjmEXFvAIq10qiuLVR63', CLIENT_SECRET = 'yMyxGeh8zqORDFhS', REDIRECT_URL = 'https://ibim360.herokuapp.com/forgecallback';

// Initialize the 3-legged OAuth2 client, set specific scopes and optionally set the `autoRefresh` parameter to true
// if you want the token to auto refresh
var autoRefresh = true;
var oAuth2ThreeLegged = new ForgeSDK.AuthClientThreeLegged(CLIENT_ID, CLIENT_SECRET, REDIRECT_URL, [
    'data:read',
    'data:write',
    'data:create'
], autoRefresh);

// Generate a URL page that asks for permissions for the specified scopes.


var oAuth2TwoLegged = new ForgeSDK.AuthClientTwoLegged(CLIENT_ID, CLIENT_SECRET, [
    'data:read',
    'data:write',
    'data:create'
], autoRefresh);

module.exports.oAuth2ThreeLegged = oAuth2ThreeLegged;
module.exports.oAuth2TwoLegged = oAuth2TwoLegged;
