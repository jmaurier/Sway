var db = require('../db')
var timesheet = db.Schema({
  user_id: { type: db.Schema.Types.ObjectId, required: true },
  week_one_ending: { type: Date, required: false },
  week_two_ending: { type: Date, required: false},
  week_beginning: { type: Date, required: true },
  title: { type: String, required: true},
  account_num:{
    fund:{ type: String, required: false},
    org:{ type: String, required: false},
    account:{ type: String, required: false},
    program:{ type: String, required: false}
  },
  department:{ type: String, required: false},
 week_one: {
    sunday:{
      date: {type: Date, required: true} ,
      col_one:{
        in_time: {type:Date},
        out_time: {type:Date}
      },
      col_two:{
        in_time: {type:Date},
        out_time: {type:Date}
      },
      col_three:{
        in_time: {type:Date},
        out_time: {type:Date}
      },
      hours_worked: { type: String, required: false}
    },
    monday:{
      date: {type: Date, required: true} ,
      col_one:{
        in_time: {type:Date},
        out_time: {type:Date}
      },
      col_two:{
        in_time: {type:Date},
        out_time: {type:Date}
      },
      col_three:{
        in_time: {type:Date},
        out_time: {type:Date}
      },
      hours_worked: { type: String, required: false}
    },
    tuesday:{
      date: {type: Date, required: true} ,
      col_one:{
        in_time: {type:Date},
        out_time: {type:Date}
      },
      col_two:{
        in_time: {type:Date},
        out_time: {type:Date}
      },
      col_three:{
        in_time: {type:Date},
        out_time: {type:Date}
      },
      hours_worked: { type: String, required: false}
    },
    wednesday:{
      date: {type: Date, required: true} ,
      col_one:{
        in_time: {type:Date},
        out_time: {type:Date}
      },
      col_two:{
        in_time: {type:Date},
        out_time: {type:Date}
      },
      col_three:{
        in_time: {type:Date},
        out_time: {type:Date}
      },
      hours_worked: { type: String, required: false}
    },
    thursday:{
      date: {type: Date, required: true} ,
      col_one:{
        in_time: {type:Date},
        out_time: {type:Date}
      },
      col_two:{
        in_time: {type:Date},
        out_time: {type:Date}
      },
      col_three:{
        in_time: {type:Date},
        out_time: {type:Date}
      },
      hours_worked: { type: String, required: false}
    },
    friday:{
      date: {type: Date, required: true} ,
      col_one:{
        in_time: {type:Date},
        out_time: {type:Date}
      },
      col_two:{
        in_time: {type:Date},
        out_time: {type:Date}
      },
      col_three:{
        in_time: {type:Date},
        out_time: {type:Date}
      },
      hours_worked: { type: String, required: false}
    },
    saturday:{
      date: {type: Date, required: true} ,
      col_one:{
        in_time: {type:Date},
        out_time: {type:Date}
      },
      col_two:{
        in_time: {type:Date},
        out_time: {type:Date}
      },
      col_three:{
        in_time: {type:Date},
        out_time: {type:Date}
      },
      hours_worked: { type: String, required: false}
    }
  },
 week_two: {
    sunday:{
      date: {type: Date, required: true} ,
      col_one:{
        in_time: {type:Date},
        out_time: {type:Date}
      },
      col_two:{
        in_time: {type:Date},
        out_time: {type:Date}
      },
      col_three:{
        in_time: {type:Date},
        out_time: {type:Date}
      },
      hours_worked: { type: String, required: false}
    },
    monday:{
      date: {type: Date, required: true} ,
      col_one:{
        in_time: {type:Date},
        out_time: {type:Date}
      },
      col_two:{
        in_time: {type:Date},
        out_time: {type:Date}
      },
      col_three:{
        in_time: {type:Date},
        out_time: {type:Date}
      },
      hours_worked: { type: String, required: false}
    },
    tuesday:{
      date: {type: Date, required: true} ,
      col_one:{
        in_time: {type:Date},
        out_time: {type:Date}
      },
      col_two:{
        in_time: {type:Date},
        out_time: {type:Date}
      },
      col_three:{
        in_time: {type:Date},
        out_time: {type:Date}
      },
      hours_worked: { type: String, required: false}
    },
    wednesday:{
      date: {type: Date, required: true} ,
      col_one:{
        in_time: {type:Date},
        out_time: {type:Date}
      },
      col_two:{
        in_time: {type:Date},
        out_time: {type:Date}
      },
      col_three:{
        in_time: {type:Date},
        out_time: {type:Date}
      },
      hours_worked: { type: String, required: false}
    },
    thursday:{
      date: {type: Date, required: true} ,
      col_one:{
        in_time: {type:Date},
        out_time: {type:Date}
      },
      col_two:{
        in_time: {type:Date},
        out_time: {type:Date}
      },
      col_three:{
        in_time: {type:Date},
        out_time: {type:Date}
      },
      hours_worked: { type: String, required: false}
    },
    friday:{
      date: {type: Date, required: true} ,
      col_one:{
        in_time: {type:Date},
        out_time: {type:Date}
      },
      col_two:{
        in_time: {type:Date},
        out_time: {type:Date}
      },
      col_three:{
        in_time: {type:Date},
        out_time: {type:Date}
      },
      hours_worked: { type: String, required: false}
    },
    saturday:{
      date: {type: Date, required: true} ,
      col_one:{
        in_time: {type:Date},
        out_time: {type:Date}
      },
      col_two:{
        in_time: {type:Date},
        out_time: {type:Date}
      },
      col_three:{
        in_time: {type:Date},
        out_time: {type:Date}
      },
      hours_worked: { type: String, required: false}
    }
  }
})
module.exports = db.model('TimeSheet', timesheet)
