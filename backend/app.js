const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")

// create our express app
const app = express()

// routes
app.get("/", (req,res)=>{
    res.send("my home page dey show sha")
})

//start server
app.listen(3000, ()=>{
    console.log("listeniing at port:3000")
})   