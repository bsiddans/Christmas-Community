const verifyAuth = require('./verifyAuth')
const passport = require('passport')

const publicMiddleware = () => global._CC.config.wishlist.public
  ? (req, res, next) => {
      if (!req.user) req.user = { _id: '_CCUNKNOWN' }
      next()
    }
  : passport.authenticate('reverseproxy')

module.exports = publicMiddleware
