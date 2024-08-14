// require('dotenv').config({path: './env'})
import dotenv from "dotenv";
import connectDB from "./db/index";
import { app } from "./app";

dotenv.config();

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`server is running at port : ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log(`MONGO FAILED CONNECTION!`, err);
    process.exit(1);
  });

