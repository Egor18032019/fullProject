const {
    Rating
} = require('../models/models')
const ApiError = require('../error/ApiError');

class RatingController {

    async create(req, res) {
        console.log("asdsdadasdasdasdasdasdsa")
        const {
            userId,
            deviceId,
            rate
        } = req.body
        console.log("req.body", req.body)
        const rating = await Rating.update({
            rate:33,
            deviceId:2,
            userId:1,
        },
        { where: { 
            rate:33,
            deviceId:2,
            userId:1} })
        return res.json(rating)
    }


}

module.exports = new RatingController()