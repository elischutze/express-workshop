var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var mustacheExpress = require('mustache-express');




// To initialise our server, we just need to call the express() function. This will create an Express application for us to work with.
var app = express()
app.use(bodyParser.urlencoded({ extended: true }));

// app.get("/",function(req,res){
//     res.send("THIS IS A MESSAGE HAAAY");

// });

app.use(express.static("public"));

// Register '.mustache' extension with The Mustache Express
app.engine('mustache', mustacheExpress());

app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');

app.post("/create-post",function(req,res){
    res.redirect('/');
    var myFile=__dirname+'/data/posts.json';
    fs.readFile(myFile,function(error,file){
        var parsedFile = JSON.parse(file);

        parsedFile[Date.now()] = req.body;
        // console.log(parsedFile);
        var JSONText = JSON.stringify(parsedFile);
        fs.writeFile(myFile,JSONText,function(error){
            // console.log("imhere");


        })

    });

});

app.get('/get-posts', function(req,res){
    res.sendFile(__dirname+'/data/posts.json');
});

app.get('/posts/:postId', function(req,res){
    // var blogpost;
    fs.readFile(__dirname+'/data/posts.json',function(error,file){
        var fileObj = JSON.parse(file);
        var key = req.params.postId
        var blogpost = fileObj[key.toString()];
        var title = JSON.stringify(blogpost.blogTitle).split("\"").join("");

        res.render('post',{ title: title, body: blogpost.blogpost});
    });


});

app.listen(3000, function(){
    console.log("Server is listening on Port 3000! Ready to accept requests.." );
});