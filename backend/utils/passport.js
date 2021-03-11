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
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: process.env.JWT_SECRET
}

// create JWT Strategy
const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done){
  // See if the user ID in the payload exists in our database
  // If it does, call 'done' with that 
  // Otherwise, call done without a user object
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

// Create local strategy
const localStrategy = require('passport-local');
const localOptions = { usernameField: 'email' };

const localLogin = new localStrategy(localOptions, function(email, password, done){
  // Verify this email(username) and password
  // call done with the user if it is the corresct email/ password
  // otherwise, call done with false
  User.findOne({ email: email }, function(err, user){
    // error in the search itself
    if(err){
      return done(err);
    }
    // user not found (user thinks they have an account but they don't)
    if(!user){
      // no error, no user found
      return done(null, false);
    }

    // Compare passwords
    user.comparePasswords(password, function(err, isMatch){
      if(err){
        // call 'done' (passport callback) with err
        return done(err);
      }
      if(!isMatch){
        return done(null, false);
      }
      // call the passport callback with the user
      // passport assigns user to req.user 
      return done(null, user)
    })
  })
})

// Tell pasport to use this strategy
passport.use(jwtLogin);
passport.use(localLogin);
