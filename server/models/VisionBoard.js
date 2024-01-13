const mongoose = require('mongoose')
const Schema = mongoose.Schema

const VisionBoardSchema = new Schema({
    color: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    }
})

module.exports = mongoose.model('visionboards', VisionBoardSchema)