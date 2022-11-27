const UserRouter = require('express').Router()
const UserCtrl = require('../controllers/UserCtrl')

UserRouter.post('/register', UserCtrl.register)
UserRouter.post('/login', UserCtrl.login)
UserRouter.get('/logout', UserCtrl.logout)

module.exports = UserRouter