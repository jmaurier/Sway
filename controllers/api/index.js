var router = require('express').Router()

router.use(require('./sessions'))
router.use(require('./users'))

module.exports = router
