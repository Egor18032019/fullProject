const Router = require('express')
const router = new Router()
const RatingController = require('../controllers/RatingController')
const authMiddleware = require('../middleware/authMiddleware')

// router.post('/', authMiddleware, RatingController.create)
router.post('/', RatingController.create)
module.exports = router
