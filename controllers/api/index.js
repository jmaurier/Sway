var router = require('express').Router()

router.use(require('./sessions'))
router.use(require('./users'))
router.use(require('./timesheets'))

module.exports = router
