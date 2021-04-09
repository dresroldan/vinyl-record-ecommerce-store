// import mongoose from ('mongoose');
import express from 'express';
// import cors from ('cors');
// import passport from ('passport');
// import passportLocal from ('passport-local').Strategy;
// import cookieParser from ('cookie-parser');
// import bcrypt from ('bcryptjs');
// import session  from ('express-session');
// import User from ('./models/user');
import products from './data/data.js';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
dotenv.config();

connectDB();

// ------------------------------------- END OF IMPORTS ------------------------------------------- //

// CREATES EXPRESS SERVER
const app = express();
const PORT = process.env.PORT || 5000;

// MONGO CONNECTION STRING
// const uri = process.env.MONGODB_URI;
// mongoose
//   .connect(uri, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false,
//   })
//   .then(() => {
//     console.log('Connected to Mongo');
//   })
//   .catch((err) => console.log({ err }));

// app.use(
//   cors({
//     origin: 'http://localhost:3000', // LOCATION OF THE REACT APP WE'RE CONNNECTING TO
//     credentials: true,
//   })
// );

// PARSES JSON
app.use(express.json());
// EXPRESS SESSION
// app.use(
//   session({
//     secret: 'secretcode',
//     resave: true,
//     saveUninitialized: true,
//   })
// );

// app.use(cookieParser('secretcode'));
// app.use(passport.initialize());
// app.use(passport.session());
// require('./passportConfig')(passport);

// ------------------------------------- END OF MIDDLEWARE ------------------------------------------- //

// ROUTES

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/products/:id', (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

// app.post('/login', (req, res, next) => {
//   passport.authenticate('local', (err, user, info) => {
//     if (err) throw err;
//     if (!user) res.send('No User Exists ');
//     else {
//       req.logIn(user, (err) => {
//         if (err) throw err;
//         res.send('success');
//         console.log(req.user);
//       });
//     }
//   })(req, res, next);
// });

// app.post('/signup', async (req, res) => {
//   const { username, password } = req?.body;
//   if (
//     !username ||
//     !password ||
//     typeof username !== 'string' ||
//     typeof password !== 'string'
//   ) {
//     res.send('Improper Values');
//     return;
//   }

//   User.findOne({ username: req.body.username }, async (err, doc) => {
//     if (err) throw err;
//     if (doc) res.send('User already Exists');
//     if (!doc) {
//       const hashedPassword = await bcrypt.hash(req.body.password, 10);

//       const newUser = new User({
//         username: req.body.username,
//         password: hashedPassword,
//       });
//       await newUser.save();
//       res.send('User Created');
//     }
//   });
// });

// app.get('/user', (req, res) => {
//   res.send(req.user);
// });

// app.get('/logout', (req, res) => {
//   req.logout();
//   res.send('success');
// });

// ------------------------------------- END OF ROUTES ------------------------------------------- //

app.listen(PORT, () => {
  console.log(
    `server is running in ${process.env.NODE_ENV} mode on port: ${PORT}`
  );
});
