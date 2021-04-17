// 1. Import dependencies
const express = require("express");
const router = express.Router();

const Doctor = require('../../models/doctor');


//Gettig all
router.get("/", async (req, res) => {
    try
    { 
       const doctors = await Doctor.find({});
       res.json(doctors)
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
    const doctor = new Doctor({
        name: req.body.name,
        email: req.body.email,
        address: req.body.address
    })
    console.log(req);
    try{
        const newDoctor = await doctor.save(function(err){
            if(err){
                 console.log(err);
                 return;
            }
            console.log("Created Successfully");
            res.status(201).json(newDoctor)
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