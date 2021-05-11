// import express from 'express';
// const userRouter = express.Router();
// import passportJwt from 'passport-jwt';
// import JWT from 'jsonwebtoken';
// import User from './models/userModel.js';
// // const passportConfig 


// userRouter.post('/signup', (req, res) => {
//   const { username, password, isAdmin } = req.body;

//   User.findOne({ username }, (error, user) => {
//     if (error) throw error;
//     if (user) res.send('User Already Exists');
//     else {
//       const newUser = new User({
//         username,
//         password,
//         isAdmin,
//       });
//       newUser.save((err) => {
//         if (error) throw error;
//         else res.send('Account created');
//       });
//     }
//   });
// });