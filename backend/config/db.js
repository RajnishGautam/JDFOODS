import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDB = async () => {
    try {
        // Use local MongoDB connection string
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("DB Connected to Local MongoDB");
    } catch (error) {
        console.error("Database connection failed:", error.message);
        process.exit(1); // Exit process with failure
    }
};
