// 1. Import dependencies
const express =  require('express')
const router = express.Router()

const User = require('../../models/user')


router.post("/", async (req, res) => { 
    let userName =  await User.find({email: req.body.Username});
    if(userName == null){
        return res.status(404).json({message: 'User Name cannot be found' });
    }else{
        return res.status(201).json({token: "test123"})
    }
});


module.exports = router