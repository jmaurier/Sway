var router = require('express').Router()
var User  = require('../../models/user')
var TimeSheet  = require('../../models/timesheet')
var config = require('../../config')

//Get timesheets for a specific user.
router.get('/timesheets', function (req, res, next) {
  console.log(req.auth);
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

//delete a timesheet by id
router.delete('/timesheets/:id', function (req, res, next) {
  TimeSheet.findById(req.params.id, function(err, timesheet) {
    if (err) return next(err);
    if(timesheet == null) {
      res.status(404).json({message: 'Time sheet not found.'});
    } else {
      timesheet.remove(function(){
        res.status(200).json({message: 'Time sheet deleted successfully.'});
      })
    }
  })
})

//create new timesheet
router.post('/timesheets', function (req, res, next) {
  User.findOne({ 'H_number': req.auth.H_number}, function(err, user){
    if (err) return next(err);
      if(user == null) {
        res.status(404).json({message: 'User not found.'});
      } else {
          var startdate = new Date(req.body.week_beginning);
          var timesheet = new TimeSheet({
            user_id: user.id,
            week_beginning: startdate,
            title: req.body.title,
            department: req.body.department,
            week_one: {
              sunday:{
                date: startdate,
                col_one: {
                  in_time: "",
                  out_time:""
                },
                col_two:{
                  in_time: "",
                  out_time: ""
                },
                col_three:{
                  in_time: "",
                  out_time: ""
                },
                hours_worked: 0
              },
              monday:{
                date: startdate.setDate(startdate.getDate() + 1),
                col_one: {
                  in_time: "",
                  out_time:""
                },
                col_two:{
                  in_time: "",
                  out_time: ""
                },
                col_three:{
                  in_time: "",
                  out_time: ""
                },
                hours_worked: 0
              },
              tuesday:{
                date: startdate.setDate(startdate.getDate() + 1),
                col_one: {
                  in_time: "",
                  out_time:""
                },
                col_two:{
                  in_time: "",
                  out_time: ""
                },
                col_three:{
                  in_time: "",
                  out_time: ""
                },
                hours_worked: 0
              },
              wednesday:{
                date: startdate.setDate(startdate.getDate() + 1),
                col_one: {
                  in_time: "",
                  out_time:""
                },
                col_two:{
                  in_time: "",
                  out_time: ""
                },
                col_three:{
                  in_time: "",
                  out_time: ""
                },
                hours_worked: 0
              },
              thursday:{
                date: startdate.setDate(startdate.getDate() + 1),
                col_one: {
                  in_time: "",
                  out_time:""
                },
                col_two:{
                  in_time: "",
                  out_time: ""
                },
                col_three:{
                  in_time: "",
                  out_time: ""
                },
                hours_worked: 0
              },
              friday:{
                date: startdate.setDate(startdate.getDate() + 1),
                col_one: {
                  in_time: "",
                  out_time:""
                },
                col_two:{
                  in_time: "",
                  out_time: ""
                },
                col_three:{
                  in_time: "",
                  out_time: ""
                },
                hours_worked: 0
              },
              saturday:{
                date: startdate.setDate(startdate.getDate() + 1),
                col_one: {
                  in_time: "",
                  out_time:""
                },
                col_two:{
                  in_time: "",
                  out_time: ""
                },
                col_three:{
                  in_time: "",
                  out_time: ""
                },
                hours_worked: 0
              }
            },
            week_two: {
              sunday:{
                date: startdate,
                col_one: {
                  in_time: "",
                  out_time:""
                },
                col_two:{
                  in_time: "",
                  out_time: ""
                },
                col_three:{
                  in_time: "",
                  out_time: ""
                },
                hours_worked: 0
              },
              monday:{
                date: startdate.setDate(startdate.getDate() + 1),
                col_one: {
                  in_time: "",
                  out_time:""
                },
                col_two:{
                  in_time: "",
                  out_time: ""
                },
                col_three:{
                  in_time: "",
                  out_time: ""
                },
                hours_worked: 0
              },
              tuesday:{
                date: startdate.setDate(startdate.getDate() + 1),
                col_one: {
                  in_time: "",
                  out_time:""
                },
                col_two:{
                  in_time: "",
                  out_time: ""
                },
                col_three:{
                  in_time: "",
                  out_time: ""
                },
                hours_worked: 0
              },
              wednesday:{
                date: startdate.setDate(startdate.getDate() + 1),
                col_one: {
                  in_time: "",
                  out_time:""
                },
                col_two:{
                  in_time: "",
                  out_time: ""
                },
                col_three:{
                  in_time: "",
                  out_time: ""
                },
                hours_worked: 0
              },
              thursday:{
                date: startdate.setDate(startdate.getDate() + 1),
                col_one: {
                  in_time: "",
                  out_time:""
                },
                col_two:{
                  in_time: "",
                  out_time: ""
                },
                col_three:{
                  in_time: "",
                  out_time: ""
                },
                hours_worked: 0
              },
              friday:{
                date: startdate.setDate(startdate.getDate() + 1),
                col_one: {
                  in_time: "",
                  out_time:""
                },
                col_two:{
                  in_time: "",
                  out_time: ""
                },
                col_three:{
                  in_time: "",
                  out_time: ""
                },
                hours_worked: 0
              },
              saturday:{
                date: startdate.setDate(startdate.getDate() + 1),
                col_one: {
                  in_time: "",
                  out_time:""
                },
                col_two:{
                  in_time: "",
                  out_time: ""
                },
                col_three:{
                  in_time: "",
                  out_time: ""
                },
                hours_worked: 0
              }
            }
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
