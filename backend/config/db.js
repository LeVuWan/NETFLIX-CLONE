import mongoose from "mongoose";
import { ENV_VARS } from "./envVars.js";

export const connectBD = async () => {
  try {
    const conn = await mongoose.connect(ENV_VARS.MONGO_DB_URL);
    console.log("MongoDB connected: " + conn.connection.host);
  } catch (error) {
    console.error("Error connection to MONGODB: " + error.message);
    process.exit(1);
  }
};
