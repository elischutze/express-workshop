var express = require('express');
var bodyParser = require('body-parser');

// To initialise our server, we just need to call the express() function. This will create an Express application for us to work with.
var app = express()
app.use(bodyParser.urlencoded({ extended: true }));

// app.get("/",function(req,res){
//     res.send("THIS IS A MESSAGE HAAAY");

// });

app.use(express.static("public"));


app.post("/create-post",function(req,res){
    console.log("create-post");
    console.log(req.body);
});


app.listen(3000, function(){
    console.log("Server is listening on Port 3000! Ready to accept requests.." );
});