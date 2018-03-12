const Ctrl = require('../controllers/version')
const router = require('koa-router')()

router.get('/ath2/v', Ctrl.getVersion)

router.post('/ath2/v', Ctrl.newVersion)

module.exports = router
