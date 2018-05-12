var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var http = require ("http");
var fs = require("fs");

var app = express();
var PORT = process.env.PORT || 8080;

var server = http.createServer(handleRequest);
function handleRequest(req, res){
    var path= req.url;
    switch(path){
        case "/api/friends":
            return renderFriendsPage(req, res);
        default:
            return renderHomePage(req, res);
    }
}
function renderHomePage(req,res){
    fs.readFile(__dirname + "/public/home.html", function(err, data){
        if (err) {
            res.writeHead(500, { "Content-Type": "text/html" });
            res.end("<html><head><title>Oops</title></head><body><h1>Oops, there was an error</h1></html>");
          }
        else {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
          }
    })
}
function renderFriendsPage(req, res){
    var requestData = "";
    var myHTML = "<"

}