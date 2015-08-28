var db = require('../db')
var user = db.Schema({
  H_number: { type: String, required: true },
  password: { type: String, required: true, select: false },
  emailaddr: { type: String, required: true},
  name: { type:String, required: true}
})
module.exports = db.model('User', user)
