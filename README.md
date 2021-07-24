# passport-google-oauth2-boilerplate

This is a boilerplate to act as a headstart for applications to have google sign in. [Passportjs](http://www.passportjs.org/packages/passport-google-oauth20/) for OAuth2.0 strategy has been used here. All we need to do is create an application
in the Google developer console and create Oauth2 credentials for the same. 

Set the origin URL as `http://localhost:3000/` and the redirect or callback URL as `http://localhost:3000/auth/redirect` (Reference for development environment). 
Once this is done Google generates a `CLIENT_ID` and `CLIENT_SECRET`

`CLIENT_ID` and `CLIENT_SECRET` can be stored in a `.env` file. The following code would initialize the Google OAuth Strategy:

```
passport.use(new Strategy({
      clientID: process.env['CLIENT_ID'],
      clientSecret: process.env['CLIENT_SECRET'],
      callbackURL: '/auth/redirect',
      scope: [ 'profile' ],
      state: true
    },
    function(accessToken, refreshToken, profile, cb) {
      return cb(null, {profile, accessToken, refreshToken});
    }));
    
```

Navigate to `localhost:3000` and login to your Google account to obtain the `access_token` and user profile details. To obtain additional access / scopes, configure the `scope` array
in the above function.
