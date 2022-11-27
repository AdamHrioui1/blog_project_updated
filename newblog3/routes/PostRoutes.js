const PostCtrl = require('../controllers/PostCtrl')
const auth = require('../middleware/auth')

const router = require('express').Router()

router.route('/post')
    .get(PostCtrl.getPosts)
    .post(auth, PostCtrl.postPost)

router.route('/post/:id')
    .get(auth, PostCtrl.getSinglePost)
    .put(auth, PostCtrl.updatePost)
    .delete(auth, PostCtrl.deletePost)

module.exports = router