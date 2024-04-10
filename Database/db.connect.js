import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const dbConnect = process.env.MONGODBCONNECTIONSTRING;

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(dbConnect);
    console.log("Database Connection Successful");
  } catch (error) {
    console.log("error", error);
  }
};

export default connectDB;
