import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const MONGOURI = process.env.MONGODB_URI;

export const connectDB = async () => {
    try {
        await mongoose.connect(MONGOURI);
        console.log("DB connected");
    } catch (error) {
        console.error("Error connecting to DB", error);
        process.exit(1);
        
    }
}