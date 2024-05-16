import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },

    lastName:{
        type: String,
        required: true,
    },

    email:{
        type: String,
        required: true,
    },

    address:{
        type: String,
        required: true,
    },

    city:{
        type: String,
        required: true,
    },

    province:{
        type: String,
        required: true,
    },
   
    password:{
        type: String,
        required: true,
    }
 
});

userSchema.pre("save", function(next) {
    this.password = bcrypt.hashSync(this.password, 10);
    next();
});


export default mongoose.model("user", userSchema);