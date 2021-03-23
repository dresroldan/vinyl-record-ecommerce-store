const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

// creates express server
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
// parses JSON
app.use(express.json());

// API endpoints
app.get("/", (req, res) => res.status(200).send("Hello"));

// starts the server
app.listen(port, () => {
  console.log(`server is running on port: ${port}`);
});
