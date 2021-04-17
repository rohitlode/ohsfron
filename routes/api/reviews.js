// 1. Import dependencies
const express =  require('express')
const router = express.Router()

const Review =  require('../../models/review')
const User = require('../../models/user')



//Gettig all
router.get("/", async (req, res) => {
    try
    { 
       const reviews = await Review.find({});
       res.json(reviews)
    }catch(err){
        console.log(err);
        res.status(500).json({message: err.message});
    }

})

//Getting one
router.get("/:uid", getReviewByUid, (req, res) => {
    // console.log(req.params.id)
    res.send(res.review);
})


//Creating one
router.post("/:uid", async (req, res) => {
    let userId, reviewByUid;
    userId  = await User.findById(req.params.uid)
    if(userId == null){
        return res.status(404).json({message: 'User ID cannot be found' });
    }
    const review = new Review({
        "review": req.body.review,
        "user_id": req.params.uid
    })
    console.log(req);
    try{
        const newReview = await review.save(function(err){
            if(err){
                 console.log(err);
                 return;
            }
            console.log("review Created Successfully");
            res.status(201).json(newReview)
      });
    }catch(err){
        res.status(400).json({message: err.message})
    }
})


//Updating one
router.patch("/:id", getReview, async(req, res) => {
    if(req.body.name != null){
        res.review.name = req.body.name
    }
    if(req.body.address != null){
        res.review.address = req.body.address
    }
    if(req.body.qualifications != null){
        res.review.qualifications = req.body.qualifications
    }
    if(req.body.specialities != null){
        res.review.specialities = req.body.specialities
    }
    if(req.body.mobile != null){
        res.review.mobile = req.body.mobile
    }
    if(req.body.email != null){
        res.review.email = req.body.email
    }
    if(req.body.practiceStartDate != null){
        res.review.practiceStartDate = req.body.practiceStartDate
    }

    try{
        const updatedreview =  await res.review.save()
        console.log("Updated review Successfully");
        res.json(updatedReview)
    }catch(err){
        res.status(400).json({ message: err.message })
    }
})

//Deleting one
router.delete("/:id", getReview, async (req, res) => {
    try{
        await res.review.remove()
        res.json({message: 'Deleted review'})
    }catch(err){
        return res.status(500).json({message: err.message})
    }
})



async function getReview(req, res, next){
    let review;
    try{
        review = await Review.findById(req.params.id)
        if(review == null){
            return res.status(404).json({message: 'Cannot Find review'})
        }
    }catch(err){
        return res.status(500).json({message: err.message})
    }

    res.review = review;
    next()
}


async function getReviewByUid(req, res, next){
    console.log(req.params.uid)
    let user;
    let review;
    try{
        user = await User.findById(req.params.uid)
        if(user == null){
            return res.status(404).json({message: 'User ID cannot be found' });
        }else{
            review = await Review.find({user_id: req.params.uid}, (err, data)=>{
                if(err){
                    console.log(err);
                    return res.status(404).json({message: 'No Review Exists with specified User ID' });
                }else{
                    review = data;
                }
            })
        }

    }catch(err){
        return res.status(500).json({message: err.message})
    }

    res.review = review;
    next()
}



module.exports = router