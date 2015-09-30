var router = require('express').Router()
var User  = require('../../models/user')
var TimeSheet  = require('../../models/timesheet')
var config = require('../../config')

//Get timesheets for a specific user.
router.get('/timesheets', function (req, res, next) {
  User.findOne({ 'H_number': req.auth.H_number}, function(err, user){
    if (err) return next(err);
      if(user == null) {
        console.log("no user");
        res.status(404).json({message: 'User not found.'});
      } else {
          TimeSheet.find({ 'user_id': user._id}, function(err, timesheet) {
            if (err) return next(err);
            if(timesheet == null) {
              console.log("no timesheet");
              res.status(404).json({message: 'Time sheet not found.'});
            } else {
              res.json(timesheet)
            }
          })
      }
  })
})

//get a specific timesheet by id
router.get('/timesheets/:id', function (req, res, next) {
  TimeSheet.findById(req.params.id, function(err, timesheet) {
    if (err) return next(err);
    if(timesheet == null) {
      console.log("no timesheet");
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
            week_beginning: req.body.week_beginning,
            title: req.body.title,
            department: req.body.department
          });

        timesheet.save(function(err, time_sheet){
          if (err) return next(err);
          console.log("timesheet created");
          res.status(201).json(time_sheet)
        })
      }
  })
})

module.exports = router
