import passportLocal from 'passport-local';
import User from './models/userModel.js';
import passportJwt from 'passport-jwt';
import JWT from 'jsonwebtoken';

const LocalStrategy = passportLocal.Strategy;
const JwtStrategy = passportJwt.Strategy;

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

// authenticated local strategy using username and password
passport.use(
  new LocalStrategy((username, password, done) => {
    User.findOne({ username: username }, (err, user) => {
      //   something went wrong with the database
      if (err) throw err;
      // if no user exists
      if (!user) return done(null, false);
      // check if password is correct
      user.comparePassword(password, done);
    });
  })
);
