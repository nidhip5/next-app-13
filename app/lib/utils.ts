import mongoose from "mongoose";

interface ConnectionObject {
  isConnected?: number;
}

export const connectToDB = async () => {
  try {
    const connection: ConnectionObject = {};
    if (connection.isConnected) return;
    const MONGO_URL = process.env.MONGO;
    if (!MONGO_URL) {
      throw new Error("mongo url not defined");
    }
    const db = await mongoose.connect(MONGO_URL);
    connection.isConnected = db.connections[0].readyState;
  } catch (err) {
    console.log(err, "connection err");
    throw new Error(String(err));
  }
};
