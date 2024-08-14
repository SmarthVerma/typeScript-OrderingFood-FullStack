import mongoose from "mongoose";
import { DB_NAME } from "../constants";

const connectDB = async () => {
  try {

  
    console.log(process.env.MONGODB_URL);
    console.log("this is port", process.env.PORT);
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URL}/${DB_NAME}`
    );

    console.log(
      `\nMongoDB connected !! DB HOST: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("MongoDB conncetion error smarth ", error);
    process.exit(1);
  }
};

export default connectDB;
