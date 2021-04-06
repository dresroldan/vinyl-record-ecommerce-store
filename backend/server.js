const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const passport = require("passport");
const passportLocal = require("passport-local").Strategy;
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const session = require("express-session");
require("dotenv").config();
// const user = require("./routes/user");
const User = require("./models/user");

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

app.use(cookieParser("secretcode"));

app.post("/login", (req, res) => {
  console.log(req.body);
});

app.post("/signup", (req, res) => {
  User.findOne({ username: req.body.username }, async (err, doc) => {
    if (err) throw err;
    if (doc) res.send("User already Exists");
    if (!doc) {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);

      const newUser = new User({
        username: req.body.username,
        password: hashedPassword,
      });
      await newUser.save();
      res.send("user created");
    }
  });
});

app.post("/user", (req, res) => {});

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

// app.use(passport.initialize());
// app.use(passport.session());

// calls the deserializeUser

// Routes
// app.use(user);

// Importing the routes
// app.use(require("./routes"));

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "client/build")));
//   //
//   app.get("*", (req, res) => {
//     res.sendFile(path.join((__dirname = "client/build/index.html")));
//   });
// }

// // build mode
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname + "/client/public/index.html"));
// });

// starts the server
app.listen(port, () => {
  console.log(`server is running on port: ${port}`);
});
