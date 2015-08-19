var db = require('../db')
var timesheet = db.Schema({
  user_id: { type: db.Schema.Types.ObjectId, required: true },
  start_date: { type: Date, required: false },
  end_date: { type: Date, required: false},
  title: { type: String, required: true},
  pdf: { type: Buffer, required: false}
})
module.exports = db.model('TimeSheet', timesheet)
