const mongoose=require("mongoose")
const userschema=new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true,
        maxlength: [20, 'Name must be less than 20']
    },
    email: {
        type: String,
        required: [true, 'email is required'],
        unique: true
    }
})

module.exports=mongoose.model("User",userschema);