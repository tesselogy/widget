/**
 * Created by ELEMIAN on 30.03.2020.
 */

var express = require('express');
var router = express.Router();
var ForgeSDK = require('forge-apis');
var oAuth2 = require("../tools/0Auth");

var HubsApi = new ForgeSDK.HubsApi();
HubsApi.getHubs({},oAuth2.oAuth2TwoLegged, credentials).then(function(hubs){


})

async function buildtree() {

    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("done!"), 1000)
});

    let result = await promise; // wait until the promise resolves (*)

    console.log(result); // "done!"
}

buildtree();
