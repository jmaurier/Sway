var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/sway', function () {
  console.log('mongodb connected')
})
module.exports = mongoose
