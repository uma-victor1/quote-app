
const express = require('express')
const router = express.Router()


// all routes
router.get('/', (req,res)=>{
    res.send("Our quotes route")
})

// new post route
router.post('/new', (req,res)=>{
    res.send('posted info')
})




module.exports = router