const mongoose = require('mongoose')
const Schema = mongoose.Schema

const VisionBoardSchema = new Schema({})

module.exports = mongoose.model('visionboards', VisionBoardSchema)