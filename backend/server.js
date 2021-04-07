const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const passport = require("passport");
const passportLocal = require("passport-local").Strategy;
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const session = require("express-session");
const User = require("./models/user");
require("dotenv").config();

// ------------------------------------- END OF IMPORTS ------------------------------------------- //

// CREATES EXPRESS SERVER
const app = express();
const port = process.env.PORT || 5000;

// MONGO CONNECTION STRING
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

app.use(
  cors({
    origin: "http://localhost:3000", // LOCATION OF THE REACT APP WE'RE CONNNECTING TO
    credentials: true,
  })
);

// PARSES JSON
app.use(express.json());
// EXPRESS SESSION
app.use(
  session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true,
  })
);

app.use(cookieParser("secretcode"));
app.use(passport.initialize());
app.use(passport.session());
require("./passportConfig")(passport);

// ------------------------------------- END OF MIDDLEWARE ------------------------------------------- //

// ROUTES

app.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) throw err;
    if (!user) res.send("No User Exists ");
    else {
      req.logIn(user, (err) => {
        if (err) throw err;
        res.send("success");
        console.log(req.user);
      });
    }
  })(req, res, next);
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
      res.send("User Created");
    }
  });
});

app.get("/user", (req, res) => {
  res.send(req.user);
});

app.get("/logout", (req, res) => {
  req.logout();
  res.send("success");
});

// ------------------------------------- END OF ROUTES ------------------------------------------- //

app.listen(port, () => {
  console.log(`server is running on port: ${port}`);
});
