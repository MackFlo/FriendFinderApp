var express= require ("express");
var bdpr= require ("body-parser");
var path= require ("path");
var http = require ('http');

var PORT = 8080;
 
function handleRequest(req, res);
var server = http.createServer(handleRequest);
server.listen(PORT, function(){
    console.log ("Server listening on: http://localhost: "+ PORT);
});