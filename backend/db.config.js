import mongoose from "mongoose";

export const dbConnect = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGODB_URI)
    console.log("connected to db");
  } catch (error) {
    console.log("failed to DB");
    process.exit()
  }
};
