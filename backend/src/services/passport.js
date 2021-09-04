import passport from 'passport';
const User = require('../models/user').model; ;
import { dbConfig } from '../config';
import LocalStrategy from 'passport-local';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';

const localOptions = { usernameField: 'email' };

const localLogin = new LocalStrategy(localOptions, (email, password, done) => {

  User.findOne({ email }, (err, user) => {
    if (err) { return done(err); }

    if (!user) { return done(null, false); }

    user.comparePassword(password, (err, isMatch) => {
      if (err) { return done(err); }

      if (!isMatch) { return done(null, false); }

      if (user.role < 1) { 
        console.log("user.role < 1 passport line 21");
        return done(null, false); 
      }

      return done(null, user);
    });
  });
});

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: dbConfig.secret,
};

const jwtLogin = new JwtStrategy(jwtOptions, (payload, done) => {
  User.findOne({_id: payload.sub}, (err, user) => {
    if (err) { return done(err, false); }

    if (user) {
      done(null, user);
    } else {
      done(null, false);
    }
  });
});

passport.use(jwtLogin);
passport.use(localLogin);
