import express from 'express';
import passport from 'passport';
import passportLocal from 'passport-local';
import session from 'express-session';
import User from './models/userModel.js';
import Order from './models/orderModel.js';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';
// import userRouter from './routes/userRoutes.js';
// import orderRoutes from './routes/orderRoutes.js';
import path from 'path';
import passportJwt from 'passport-jwt';
import JWT from 'jsonwebtoken';

const LocalStrategy = passportLocal.Strategy;
const JwtStrategy = passportJwt.Strategy;

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

// ---------------------- PASSPORT CONFIG ----------------------------//

const signToken = (userID) => {
  return JWT.sign(
    {
      iss: 'NoobCoder',
      sub: userID,
    },
    'NoobCoder',
    { expiresIn: '1h' }
  );
};

const cookieExtractor = (req) => {
  let token = null;
  if (req && req.cookies) {
    token = req.cookies['access_token'];
  }
  return token;
};

// authorization
passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: cookieExtractor,
      secretOrKey: 'NoobCoder',
    },
    (payload, done) => {
      User.findById({ _id: payload.sub }, (err, user) => {
        if (err) return done(err, false);
        if (user) return done(null, user);
        else return done(null, false);
      });
    }
  )
);

passport.use(
  new LocalStrategy((username, password, done) => {
    User.findOne({ username: username }, (err, user) => {
      if (err) throw err;
      if (!user) return done(null, false);
      user.comparePassword(password, done);
    });
  })
);

// ROUTES
app.use('/api/products', productRoutes);
// app.use('/api/users', userRouter);
// app.use('/api/orders', orderRoutes);

app.post('/signup', (req, res) => {
  const { username, password, isAdmin } = req.body;

  User.findOne({ username }, (error, user) => {
    if (error) throw error;
    if (user) res.send('User Already Exists');
    else {
      const newUser = new User({
        username,
        password,
        isAdmin,
      });
      newUser.save((err) => {
        if (error) throw error;
        else res.send('Account created');
      });
    }
  });
});

app.post(
  '/login',
  passport.authenticate('local', { session: false }),
  (req, res) => {
    if (req.isAuthenticated()) {
      const { _id, username, isAdmin } = req.user;
      const token = signToken(_id);
      res.cookie('access_token', token, { httpOnly: true, sameSite: true });
      res.status(200).json({ _id, username, isAdmin, token });
    }
  }
);

app.get(
  '/logout',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    res.clearCookie('access_token');
    // req.logout();
    res.json({ user: { username: '', isAdmin: '' }, success: true });
  }
);

app.get(
  '/authenticated',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { username, isAdmin } = req.user;
    res
      .status(200)
      .json({ isAuthenticated: true, user: { username, isAdmin } });
  }
);

app.post(
  '/orders',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { orderItems } = req.body;

    const order = new Order({
      orderItems,
      user: req.user._id,
    });
    order.save((err) => {
      if (err) res.status(500);
      else {
        req.user.save((err) => {
          if (err) throw err;
          else res.status(200).json(order);
        });
      }
    });
  }
);

app.get(
  '/orders',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    User.findById({ _id: req.user._id })
      .populate('orders')
      .exec((err, document) => {
        if (err) throw err;
        else
          res
            .status(200)
            .json({ orders: document.orders, authenticated: true });
      });
  }
);

app.get(
  '/orders/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Order.findById(req.params.id)
      .populate('user')
      .exec((err, order) => {
        if (err) throw err;
        else res.json(order);
      });
  }
);

const __dirname = path.resolve();

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/frontend/build')));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  );
} else {
  app.get('/', (req, res) => {
    res.send('API is running...');
  });
}

app.listen(PORT, () => {
  console.log(
    `server is running in ${process.env.NODE_ENV} mode on port: ${PORT}`
  );
});
