var db = require('../db')
var timesheet = db.Schema({
  user_id: { type: db.Schema.Types.ObjectId, required: true },
  week_one_ending: { type: Date, required: true },
  week_two_ending: { type: Date, required: true},
  title: { type: String, required: true},
  // account_num:{
  //   fund:{ type: String, required: false},
  //   org:{ type: String, required: false},
  //   account:{ type: String, required: false},
  //   program:{ type: String, required: true}
  // },
  // department:{ type: String, required: false}


})
module.exports = db.model('TimeSheet', timesheet)
