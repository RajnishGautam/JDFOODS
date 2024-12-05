import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDB = async () => {
    try {
        // Connect to MongoDB using the URI from environment variables
        await mongoose.connect(process.env.MONGO_URI);
        console.log("DB Connected to MongoDB");
    } catch (error) {
        console.error("Database connection failed:", error.message);
        process.exit(1); // Exit process with failure
    }
};
