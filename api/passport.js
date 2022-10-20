const GoogleStrategy = require("passport-google-oauth2").Strategy;
const passport = require("passport");
const User = require("./Models/User");

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
      passReqToCallback: true,
    },
    async function (request, accessToken, refreshToken, profile, done) {
      //  const user = await User.findOrCreate({ googleId: profile.id }, function (err, user) {
      //     return done(err, user);
      //   });
      const findUser = await User.find({ googleId: profile.id });
      if (findUser) {
        return done(null, profile);
      } else {
        const user = new User({
          username: profile.family_name,
          profilePic: profile.picture,
          googleId: profile.id,
        });
        await user.save();
        return done(null, profile);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
