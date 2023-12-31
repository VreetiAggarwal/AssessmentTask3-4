const express = require("express");
const connectDB = require("./config/db-config");
const userRouter = require("./routes/user");

//Setting up Express.js and Cors
const app = express();
const cors = require("cors");

const PORT = 8000;
app.use(cors());
app.use(express.json());
app.use("/api/user", userRouter);

connectDB();
app.listen(PORT, () => {
  console.log(`The port is listening on ${PORT}`);
});
