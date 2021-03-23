const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

// creates express server
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
// parses JSON
app.use(express.json());

const uri = process.env.MONGODB_URI;

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("Connected to Mongo");
  })
  .catch((err) => console.log({ err }));

// API endpoints
app.get("/", (req, res) => res.status(200).send("Hello"));

// starts the server
app.listen(port, () => {
  console.log(`server is running on port: ${port}`);
});
