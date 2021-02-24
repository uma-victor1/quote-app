const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")

// create our express app
const app = express()

// database

const uri = "mongodb+srv://uma-victor1:jhon3165869@quote-app.ba0sr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('MongoDB Connected…')
  })
  .catch(err => console.log(err))

// middleware
app.use(bodyParser.json())

// routes
app.get("/", (req,res)=>{
    res.send("my home page dey show sha")
})

//start server
app.listen(3000, ()=>{
    console.log("listeniing at port:3000")
})   