import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';
import passport from 'passport';
import passportLocal from 'passport-local';
import bcrypt from 'bcryptjs';
import session from 'express-session';
import User from './models/userModel.js';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';
// import userRoutes from './routes/userRoutes.js';
const LocalStrategy = passportLocal.Strategy;

// MONGO CONNECTION
dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

// PARSES JSON
app.use(express.json());
// EXPRESS SESSION
app.use(
  session({
    secret: 'secretcode',
    resave: true,
    saveUninitialized: true,
  })
);

app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new LocalStrategy((username, password, done) => {
    User.findOne({ username: username }, (err, user) => {
      if (err) throw err;
      if (!user) return done(null, false);
      bcrypt.compare(password, user.password, (err, result) => {
        if (err) throw err;
        if (result === true) {
          return done(null, user);
        } else {
          return done(null, false);
        }
      });
    });
  })
);

passport.serializeUser((user, cb) => {
  cb(null, user._id);
});

passport.deserializeUser((id, cb) => {
  User.findOne({ _id: id }, (err, user) => {
    const userInformation = {
      username: user.username,
      isAdmin: user.isAdmin,
      id: user._id,
    };
    cb(err, userInformation);
  });
});

// ROUTES
app.use('/api/products', productRoutes);
// app.use('/api/users', userRoutes);

app.use('/signup', async (req, res) => {
  const { username, email, password } = req?.body;
  if (
    !username ||
    !email ||
    !password ||
    typeof username !== 'string' ||
    typeof password !== 'string' ||
    typeof password !== 'string'
  ) {
    res.send('Improper Values');
    return;
  }
  User.findOne({ username }, async (err, doc) => {
    if (err) throw err;
    if (doc) res.send('User already Exists');
    if (!doc) {
      const hashPassword = await bcrypt.hash(req.body.password, 10);
      const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: hashPassword,
      });
      await newUser.save();
      res.send('success');
    }
  });
});

app.post("/login", passport.authenticate("local"), (req, res) => {
  res.send("successfull")
});

app.get('/user', (req, res) => {
  res.send(req.user);
});

app.get("/logout", (req, res) => {
  req.logout();
  res.send("successfull logout")
});

app.listen(PORT, () => {
  console.log(
    `server is running in ${process.env.NODE_ENV} mode on port: ${PORT}`
  );
});
