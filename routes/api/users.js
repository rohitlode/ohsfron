// 1. Import dependencies
const express = require("express");
const router = express.Router();

const User = require('../../models/user');


//Gettig all
router.get("/", async (req, res) => {
    try
    { 
       const users = await User.find();
       res.json(users)
    }catch(err){
        console.log(err);
        res.status(500).json({message: err.message});
    }

})

//Getting one
router.get("/:id", (req, res) => {
    console.log(req.params.id);
})


//Creating one
router.post("/", async (req, res) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })
    console.log(req);
    try{
        const newUser = await user.save(function(err){
            if(err){
                 console.log(err);
                 return;
            }
            console.log("Created Successfully");
            res.status(201).json(newUser)
      });
    }catch(err){
        res.status(400).json({message: err.message})
    }
})


//Updating one
router.patch("/", (req, res) => {

})

//Deleting one
router.delete("/", (req, res) => {

})

module.exports = router