var router = require('express').Router()
var bcrypt = require('bcrypt-nodejs')
var jwt    = require('jwt-simple')
var config = require('../../config')
var User   = require('../../models/user')

router.post('/sessions', function (req, res, next) {
  var H_number = req.body.H_number
  User.findOne({H_number: H_number})
  .select('password')
  .exec(function (err, user) {
    if (err) { return next(err) }
    if (!user) { 
      return res.sendStatus(401) 
    }
    bcrypt.compare(req.body.password, user.password, function (err, valid) {
      if (err) { return next(err) }
      if (!valid) {
       return res.sendStatus(401) 
      }
      var token = jwt.encode({H_number: H_number}, config.secret)
      res.send(token)
    })
  })
})

module.exports = router
