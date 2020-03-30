/**
 * Created by ELEMIAN on 30.03.2020.
 */

var express = require('express');
var router = express.Router();
var ForgeSDK = require('forge-apis');
var oAuth2 = require("../tools/0Auth");
var credentials = {
    access_token: 'eyJhbGciOiJIUzI1NiIsImtpZCI6Imp3dF9zeW1tZXRyaWNfa2V5In0.eyJ1c2VyaWQiOiJGS1NHTERGRFFXUVEiLCJleHAiOjE1ODU1Nzg1MDQsInNjb3BlIjpbImRhdGE6d3JpdGUiLCJkYXRhOmNyZWF0ZSIsImRhdGE6cmVhZCJdLCJjbGllbnRfaWQiOiJSNm50YUZxckMzOEIyamF4dVJRMlpYdm96TWNWRzVwbiIsImdyYW50X2lkIjoiRTZ3WHdEZjVmNmU3ZGt4cmczU1I5MDBhblFuNThmVWoiLCJhdWQiOiJodHRwczovL2F1dG9kZXNrLmNvbS9hdWQvand0ZXhwNjAiLCJqdGkiOiJRek9oVGxFWGhiNlIwQXlMR3dmNlRNV1F1THVTSHVtVGNRNTNQMmh6YWR2Um5BcXhWUGtHaGpGeUZXdXd2Z0dDIn0.atVUyuiILTvRvdJpjy8MtzordH9paaK2VrAZDIPFUPY',
    refresh_token: 'mFBQlSBqzlEolispwSIccRX3Hl9a2EduuOxpdjcYWt',
    token_type: 'Bearer',
    expires_in: 3599,
    expires_at: '2020-03-30T14:28:23.931Z'
};
var ProjectsApi = new ForgeSDK.ProjectsApi;
var HubsApi = new ForgeSDK.HubsApi();
HubsApi.getHubs({},oAuth2.oAuth2TwoLegged, credentials).then(function(hubs) {
    console.log(hubs.body.data);
    hubsarray = hubs.body.data;
    hubsarray.forEach(function (d,i) {
        ProjectsApi.getHubProjects(d.id,{},oAuth2.oAuth2ThreeLegged, credentials).then(function(projects) {})
        console.log(projects.body.data);
    })


});