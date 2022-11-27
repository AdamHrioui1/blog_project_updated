const Post = require("../models/PostModel")

const PostCtrl = {
    getPosts: async (req, res) => {
        try {
            const posts = await Post.find()
            return res.json(posts)
        } catch (err) {
            return res.json({ status: 'failed', msg: 'get posts failed!!' })
        }
    },
    getSinglePost:  async (req, res) => {
        try {
            const postDetails = await Post.findOne({ _id: req.params.id })
            return res.render('details', { postDetails: postDetails, user: req.cookies.user })
        } catch (err) {
            return res.json({ msg: err.message })
        }
    },
    postPost: (req, res) => {
        try {
            new Post({
                url: req.body.url,
                title: req.body.title,
                description: req.body.description,
                userId: req.cookies.user._id,
                name: req.cookies.user.name,
                email: req.cookies.user.email
            }).save()
            return res.redirect('/addpost')
        } catch (err) {
            return res.json({ status: 'failed', msg: 'Created not successed!' })
        }
    },
    updatePost: async (req, res) => {
        try {
            await Post.findByIdAndUpdate({ _id: req.params.id }, { 
                url: req.body.url,
                title: req.body.title,
                description: req.body.description
            })
            return res.redirect('/')
        } catch (err) {
            return res.json({ status: 'failed', msg: err.message})
        }
    },
    deletePost: async (req, res) => {
        try {
            await Post.findByIdAndDelete({ _id: req.params.id })
            return res.redirect('/')
        } catch (err) {
            return res.json({ status: 'failed', msg: err.message})
        }
    },
}

module.exports = PostCtrl