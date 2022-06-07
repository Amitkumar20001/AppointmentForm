import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {type: String , required: true},
    email : {type: String, required: true},
    phone: {type: Number, required: true},
    date: { type: Date,required: true}
        },
    {
        timestamps: true 
    });

const User = mongoose.model('User',userSchema); //to create collection
export default User;