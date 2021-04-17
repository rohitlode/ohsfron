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
router.get("/:id", getUser, (req, res) => {
    res.send(res.user);
})


//Creating one
router.post("/" , async (req, res) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        address: req.body.address,
        registeredDate: req.body.registeredDate
    })
    console.log(req);
    try{
        const newUser = await user.save(function(err){
            if(err){
                 console.log(err);
                 return;
            }
            console.log("user Created Successfully");
            res.status(201).json(newUser)
      });
    }catch(err){
        res.status(400).json({message: err.message})
    }
})


//Updating one
router.patch("/:id", getUser, async(req, res) => {
    if(req.body.name != null){
        res.user.name = req.body.name
    }
    if(req.body.address != null){
        res.user.address = req.body.address
    }
    if(req.body.mobile != null){
        res.user.mobile = req.body.mobile
    }
    if(req.body.email != null){
        res.user.email = req.body.email
    }
    if(req.body.registeredDate != null){
        res.user.registeredDate = req.body.registeredDate
    }
    if(req.body.password != null){
        res.user.password = req.body.password
    }
    if(req.body.dob != null){
        res.user.password = req.body.dob
    }

    try{
        const updatedUser=  await res.user.save()
        console.log("Updated user Successfully");
        res.json(updatedUser)
    }catch(err){
        res.status(400).json({ message: err.message })
    }
})

//Deleting one
router.delete("/:id", getUser, async (req, res) => {
    try{
        await res.user.remove()
        res.json({message: 'Deleted user'})
    }catch(err){
        return res.status(500).json({message: err.message})
    }
})



async function getUser(req, res, next){
    let user;
    try{
        user = await User.findById(req.params.id)
        if(user == null){
            return res.status(404).json({message: 'Cannot Find user'})
        }
    }catch(err){
        return res.status(500).json({message: err.message})
    }

    res.user = user;
    next()
}



module.exports = router