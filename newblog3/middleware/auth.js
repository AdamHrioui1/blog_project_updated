const User = require('../models/UserModel')
const auth = async (req, res, next) => {
    try {
        if(!req.cookies.user) return res.redirect('/login')
        const userExist = await User.findOne({ _id: req.cookies.user._id })
        if(userExist) {
            console.log(userExist)
            next()
        }
        else {
            return res.redirect('/')
        }
    } catch (err) {
        return res.json({ msg: err.message })
    }
}

module.exports = auth