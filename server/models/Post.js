const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PostSchema = new Schema({
    visionBoard: {
        type: Schema.Types.ObjectId,
        ref: 'visionboards'
    },
    reacts: {
        type: Number
    },
    comments: {
        type: Array
    }
})

module.exports = mongoose.model('posts', PostSchema)