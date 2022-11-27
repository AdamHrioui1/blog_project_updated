const mongoose = require("mongoose")

const PostSchema = new mongoose.Schema({
    url: {
        type: String
    },
    title: {
        type: String
    },
    description: {
        type: String
    },
    userId: {
        type: String
    },
    name: {
        type: String
    },
    email: {
        type: String
    }
}, {
    timestamps: true
})

const Post = mongoose.model('post', PostSchema)

module.exports = Post