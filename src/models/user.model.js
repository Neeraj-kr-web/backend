const mongoose = require('mongoose')
const Schema = mongoose.Schema
const uuid = require('uuid')

const userSchema = new Schema(
    {
        _id: {
            type: String,
            default: () => uuid.v4()
        },
        name: String,
        email_id: String,
        phone_no: Number,
        age: Number,
        address: Object
    },
    {
        timestamps: true,
        versionKey: false
    }
)

module.exports = mongoose.model('Users',userSchema, 'Users')