const bcrypt = require('bcrypt')

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Admin = new Schema(
    {
        login: { type: String, required: true },
        name: { type: String, required: true },
        password: { type: String, required: true },
        access: { type: [String], required: true },
    },
    { timestamps: true },
)

Admin.pre('save', function(next) {
    const admin = this

    bcrypt.genSalt(10, function(err, salt) {
        if (err) {
            res.json({ success: false, msg: err.message })
        } else {
            bcrypt.hash(admin.password, salt, function(err, hashed) {
                if (err) {
                    return next(err)
                }
                admin.password = hashed
                next()
            })
        }
    })
})

module.exports = mongoose.model('admins', Admin)
