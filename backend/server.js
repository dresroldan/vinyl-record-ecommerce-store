const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const passport = require("passport");
const passportLocal = require("passport-local").Strategy;
const cookieParser = require("cookie-parser");
const bycrypt = require("bcryptjs");
const session = require("express-session");
require("dotenv").config();

// creates express server
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(
  cors({
    origin: "http://localhost:3000", // location of the react app were connecting to
    credentials: true,
  })
);
// parses JSON
app.use(express.json());
// express session
app.use(
  session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true,
  })
);

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

// Importing the routes
app.use("/", require("./routes/index"));
app.use("/users", require("./routes/users"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
  //
  app.get("*", (req, res) => {
    res.sendFile(path.join((__dirname = "client/build/index.html")));
  });
}

// build mode
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/public/index.html"));
});

// starts the server
app.listen(port, () => {
  console.log(`server is running on port: ${port}`);
});
