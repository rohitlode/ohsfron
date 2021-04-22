// 1. Import dependencies
const express =  require('express')
const bcrypt = require('bcrypt')
const router = express.Router()

const User = require('../../models/user')


router.post("/", async (req, res) => { 
    User.findOne({email: req.body.Username }).then(
        (user) => {
            if(!user){
                return res.status(401).json({message: "User not found"});
            }
            console.log("Username ", req.body.Username," ",req.body.Password," ",user.password)
            if(req.body.Password === user.password){
                return res.status(200).json({ token: "token" })
            }else{
                return res.status(401).json({message: "Password is not correct"});
            }
        }
    ).catch((error)=>{
        res.status(500).json({error: "Username/Password entered is incorrect"})
    })
});


module.exports = router