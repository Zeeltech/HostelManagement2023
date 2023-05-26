const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const colors = require("colors");
const connectDB = require("./config/db");

dotenv.config();

const PORT = process.env.PORT || 4004;

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

app.listen(PORT, () => console.log(`Server started on ${PORT}`.blue.bold));
connectDB();
