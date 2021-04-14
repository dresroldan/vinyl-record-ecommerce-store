import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';
import passport from 'passport';
import passportLocal from 'passport-local';
// import bcrypt from 'bcryptjs';
import session from 'express-session';
// import User from './models/user';
import cookieParser from 'cookie-parser';

import dotenv from 'dotenv';
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
dotenv.config();

connectDB();

// ------------------------------------- END OF IMPORTS ------------------------------------------- //

// CREATES EXPRESS SERVER
const app = express();
const PORT = process.env.PORT || 5000;

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
    console.log('Connected to Mongo');
  })
  .catch((err) => console.log({ err }));

app.use(
  cors({
    origin: 'http://localhost:3000', // LOCATION OF THE REACT APP WE'RE CONNNECTING TO
    credentials: true,
  })
);

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

// app.use(cookieParser('secretcode'));
// app.use(passport.initialize());
// app.use(passport.session());
// import('./passportConfig')(passport);

// ------------------------------------- END OF MIDDLEWARE ------------------------------------------- //


app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);

// ------------------------------------- END OF ROUTES ------------------------------------------- //

app.listen(PORT, () => {
  console.log(
    `server is running in ${process.env.NODE_ENV} mode on port: ${PORT}`
  );
});
