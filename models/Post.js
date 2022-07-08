const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please provide title'],
    },
    body: {
        type: String
    },
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: [true, 'Please provide a user']
    }
}, { timestamps: true })

module.exports = mongoose.model('Post', PostSchema)