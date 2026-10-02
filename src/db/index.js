import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error("MONGODB_URI is missing. Set it in node-backend/.env.");
  }

  const connectionInstance = await mongoose.connect(uri, { dbName: DB_NAME });
  console.log(`MongoDB connected successfully: ${connectionInstance.connection.host}/${DB_NAME}`);
  return connectionInstance;
};

export default connectDB;
