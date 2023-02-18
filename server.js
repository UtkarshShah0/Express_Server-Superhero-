const express = require("express");

const app = express();

app.get("/", function(request, response){
    response.send("<h1> Hello </h1>");
});

app.get("/contact", function(req, res){
    res.send("contact me at: utkarshshah0@gmail.com");
});

app.get("/about", function(req, res){
    res.send("My name is Utkarsh and I am from Asia ");
});

app.get("/hobbies", function(req, res){
    res.send("<ul><li>Eat</li><li>Sleep</li><li>Code</li><li>Repeat</li></ul>")
});

//app.listen(3000);
app.listen(3000, function(){
    console.log("Server started on port 3000");
})