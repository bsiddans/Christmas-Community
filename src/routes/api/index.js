const verifyAuth = require('../../middlewares/verifyAuth')
const express = require('express')
const passport = require('passport')

module.exports = ({ db, config }) => {
  const router = express.Router()

  router.use(passport.authenticate('reverseproxy'))

  router.get('/', (req, res) => {
    res.send({
      api: true
    })
  })

  router.use('/wishlist', require('./wishlist')({ db }))

  return router
}
