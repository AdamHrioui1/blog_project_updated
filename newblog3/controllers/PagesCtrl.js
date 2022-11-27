const Post = require("../models/PostModel")

const PagesCtrl = {
    homePage: async (req, res) => {
        try {
            const posts = await Post.find()
            const user = req.cookies.user
            return res.render('index', { posts: posts, user: user === undefined ? 'null' : user })
        } catch (err) {
            return res.json({ status: 'failed', msg: 'get posts failed!!' })
        }
    },
    addPostPage: (req, res) => {
        const user = req.cookies.user
        return res.render('addpost', { user: user === undefined ? 'null' : user })
    },
    updatePage: (req, res) => {
        const postInfo = {id: req.params.id, query: req.query}
        
        const user = req.cookies.user
        return res.render('updatepost', { info: postInfo, user: user === undefined ? 'null' : user })
    },
    loginPage: (req, res) => {
        const user = req.cookies.user
        return res.render('login', { user: user === undefined ? 'null' : user })
    },
    registerPage: (req, res) => {
        const user = req.cookies.user
        return res.render('register', { user: user === undefined ? 'null' : user })
    }
}

module.exports = PagesCtrl