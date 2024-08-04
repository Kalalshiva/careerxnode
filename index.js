import express from "express";

var app  = express();

app.listen(8080,() => {
    console.log("Server Started on Port 8080");
});

app.get("/", (req,res) => {
    res.send("GET request for /");
});

app.get("/Shiva",(req,res) => {
    res.send("Hello Shiva");
});
