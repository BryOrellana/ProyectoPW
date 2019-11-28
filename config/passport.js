const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../src/models/user');


passport.use(new LocalStrategy({
    usernameField: 'carnet'
}, async (carnet, password, done) =>{
    const user = User.findOne({carnet: carnet});
    if (!user) {
        return done(null, false, { message: 'Not User found.' });
      } 
}));

passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
      done(err, user);
    });
  });