const express = require("express");
const app = express();

app.get("/", function(req, res){
    res.send("<h1>Hello, World!</h1>");
});

app.get("/contact", function(req, res){
    res.send("Contact me at: marianna@gmail.com")
})
app.get("/about", function(req, res){
    res.send("My name is Marianna, I'm a student full stack developer.")
})
app.get("/hobbies", function(req, res){
    res.send("Code / Soccer")
})

app.listen(3000, function (){
    console.log("Server started on port 3000");
});