const passport = require('passport');
const User = require('./../models/userModel');

// Create JWT strategy
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

// Setup options for JWT Strategy
// a JWT can sit anywhere on the request
// on the url, in the body, in the headers of the request
// So need to tell the Strategy where to look for the JWT
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('Authorization'),
  secretOrKey: process.env.JWT_SECRET
}

// create JWT Strategy
const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done){
  User.findById(payload.sub, function(err, user){
    // error in search
    if(err){
      return done(err, false);
    }
    if(user){
      // found the user
      done(null, user);
    } else {
      // found no user
      done(null, false)
    }
  })
})

// Tell pasport to use this strategy
passport.use(jwtLogin);
