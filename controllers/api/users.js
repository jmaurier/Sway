var router = require('express').Router()
var bcrypt = require('bcrypt-nodejs')
var jwt    = require('jwt-simple')
var User   = require('../../models/user')
var config = require('../../config')

router.get('/users', function (req, res, next) {
  if (!req.headers['x-auth']) {
    return res.sendStatus(401)
  }
  var auth = jwt.decode(req.headers['x-auth'], config.secret)
  User.findOne({H_number: auth.H_number}, function (err, user) {
    if (err) { return next(err) }
    res.json(user)
  })
})

router.post('/users', function (req, res, next) {
  console.log(req.body);
  var user = new User({H_number: req.body.H_number, name:req.body.name, emailaddr:req.body.emailaddr})
  bcrypt.hash(req.body.password, null, null, function (err, hash) {
    if (err) { return next(err) }
    user.password = hash
    user.save(function (err) {
      if (err) { return next(err) }
      res.sendStatus(201)
    })
  })
})

module.exports = router
