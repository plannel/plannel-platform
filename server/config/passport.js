import passportJWT from 'passport-jwt'
import mongoose from 'mongoose'
import keys from '../config/keys.js'

const JwtStrategy = passportJWT.Strategy
const ExtractJwt = passportJWT.ExtractJwt
const User = mongoose.model('User')

const opts = {}

opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
opts.secretOrKey = keys.secretOrKey

export default (passport) => {
  passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
      User.findById(jwt_payload.id)
        .then((user) => {
          if (user) {
            return done(null, user)
          }
          return done(null, false)
        })
        .catch((err) => console.log(err))
    })
  )
}
