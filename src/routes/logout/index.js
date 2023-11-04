const verifyAuth = require('../../middlewares/verifyAuth')
const express = require('express')
const passport = require('passport')

module.exports = () => {
  const router = express.Router()

  router.get('/', passport.authenticate('reverseproxy'), (req, res) => res.render('logout'))
  router.post('/', (req, res) => {
    req.logout()
    res.redirect('/')
  })

  return router
}
