const mongoose =  require('mongoose')


const reviewSchema =  new mongoose.Schema({
    review: {
            type: String,
            required: true
    },
    user_id: {
        type: String,
        required: true
    }

    
})


module.exports =  mongoose.model("Review", reviewSchema, "Reviews");