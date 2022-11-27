const User = require("../models/UserModel")

const UserCtrl = {
    login: async (req, res) => {
        const user = await User.findOne({ email: req.body.email })
        if(user) {
            if(req.body.password === user.password) {    
                res.cookie('user', user, { httpOnly: true, expiresIn: '3d'})
                return res.redirect('/')
            }
            else throw('Incorrect password!!')
        }
        else throw('User not found!!')
    },
    register: async (req, res) => {
        try {
            const isExist = await User.findOne({ email: req.body.email })
            if(isExist) throw('this user is already exist!')
            const user = new User(req.body)
            user.save()
            return res.redirect('/login')
        } catch (err) {
            return res.json({ msg: err.message })
        }
    },
    logout: (req, res) => {
        res.clearCookie('user')
        return res.redirect('/login')
    }
}

module.exports = UserCtrl