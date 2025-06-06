import mongoose from "mongoose";
import { mongoUrl } from "./server.js";

export default async function connectDB() {
  try {
    await mongoose.connect(mongoUrl);
    console.log("Connected to MongoDB successfully");
  } catch (error) {
    console.log("Failed to connect to MongoDB");
    console.error(error);
  }
}
