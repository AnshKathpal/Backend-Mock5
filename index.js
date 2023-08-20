const express = require("express");
const app = express();
const mongoose = require("mongoose");

const userRouter = require("./routes/userRoutes")
const cors = require("cors")

require("dotenv").config();
app.use(cors());
app.use(express.json());
app.use("/user",userRouter);
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("connected");
  } catch (error) {
    console.log(error);
  }
};

app.listen(process.env.PORT, () => {
  connect();
  console.log("Listening on PORT");
});
