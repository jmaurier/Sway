var db = require('../db')
var timesheet = db.Schema({
  user_id: { type: db.Schema.Types.ObjectId, required: true },
  week_beginning: { type: Date, required: true },
  title: { type: String, required: true},
  department:{ type: String, required: false},
  week_one: {
    sunday:{
      date: {type: Date, required: true},
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
      hours_worked: { type: Number, min: 0, max: 24 }
    },
    monday:{
      date: {type: Date, required: true},
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
      hours_worked: { type: Number, min: 0, max: 24 }
    },
    tuesday:{
      date: {type: Date, required: true},
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
      hours_worked: { type: Number, min: 0, max: 24 }
    },
    wednesday:{
      date: {type: Date, required: true},
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
      hours_worked: { type: Number, min: 0, max: 24 }
    },
    thursday:{
      date: {type: Date, required: true},
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
      hours_worked: { type: Number, min: 0, max: 24 }
    },
    friday:{
      date: {type: Date, required: true},
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
      hours_worked: { type: Number, min: 0, max: 24 }
    },
    saturday:{
      date: {type: Date, required: true},
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
      hours_worked: { type: Number, min: 0, max: 24 }
    }
  },
  week_two: {
    sunday:{
      date: {type: Date, required: true},
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
      hours_worked: { type: Number, min: 0, max: 24 }
    },
    monday:{
      date: {type: Date, required: true},
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
      hours_worked: { type: Number, min: 0, max: 24 }
    },
    tuesday:{
      date: {type: Date, required: true},
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
      hours_worked: { type: Number, min: 0, max: 24 }
    },
    wednesday:{
      date: {type: Date, required: true},
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
      hours_worked: { type: Number, min: 0, max: 24 }
    },
    thursday:{
      date: {type: Date, required: true},
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
      hours_worked: { type: Number, min: 0, max: 24 }
    },
    friday:{
      date: {type: Date, required: true},
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
      hours_worked: { type: Number, min: 0, max: 24 }
    },
    saturday:{
      date: {type: Date, required: true},
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
      hours_worked: { type: Number, min: 0, max: 24 }
    }
  }
  // account_num:{
  //   fund:{ type: String, required: false},
  //   org:{ type: String, required: false},
  //   account:{ type: String, required: false},
  //   program:{ type: String, required: false}
  // },
})
module.exports = db.model('TimeSheet', timesheet)
