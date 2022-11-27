const PagesCtrl = require('../controllers/PagesCtrl')
const auth = require('../middleware/auth')

const pagesRouter = require('express').Router()

pagesRouter.get('/', PagesCtrl.homePage)

pagesRouter.get('/addpost', auth, PagesCtrl.addPostPage)

pagesRouter.get('/update/:id', auth, PagesCtrl.updatePage)

pagesRouter.get('/login', PagesCtrl.loginPage)

pagesRouter.get('/register', PagesCtrl.registerPage)

module.exports = pagesRouter