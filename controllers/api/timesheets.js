var router = require('express').Router()
var User  = require('../../models/user')
var TimeSheet  = require('../../models/timesheet')
var config = require('../../config')

//Get timesheets for a specific user.
router.get('/timesheets/:userid', function (req, res, next) {
  TimeSheet.findOne({ 'user_id': req.params.userid}, function(err, timesheet) {
    if (err) return next(err);
    if(timesheet == null) {
      res.status(404).json({message: 'Time sheet not found.'});
    } else {
      res.json(timesheet)
    }
  })
})

router.post('/timesheets', function (req, res, next) {

  User.findOne({ 'H_number': req.auth.H_number}, function(err, user){
    if (err) return next(err);
      if(user == null) {
        res.status(404).json({message: 'User not found.'});
      } else {
          var timesheet = new TimeSheet({
            user_id: user.id,
            start_date: req.body.start_date,
            end_date: req.body.end_date,
            title: req.body.title,
            pdf: req.body.pdf
          })
        timesheet.save(function(err, time_sheet){
          if (err) return next(err);
          res.status(201).json(time_sheet)
        })
      }
  })
})

module.exports = router
