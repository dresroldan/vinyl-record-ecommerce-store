import express from 'express';
import session from 'express-session';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
dotenv.config();

connectDB();

// CREATES EXPRESS SERVER
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

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);

app.listen(PORT, () => {
  console.log(
    `server is running in ${process.env.NODE_ENV} mode on port: ${PORT}`
  );
});
