var db = require('../db')
var timesheet = db.Schema({
  user_id: { type: db.Schema.Types.ObjectId, required: true },
  start_date: { type: Date, required: true },
  end_date: { type: Date, required: true},
  title: { type: String, required: true},
  pdf: { type: Buffer, required: true}
})
module.exports = db.model('TimeSheet', timesheet)
