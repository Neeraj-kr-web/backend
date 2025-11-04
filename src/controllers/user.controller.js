const userSchema = require('../models/user.model')

const registerUser = async(req,res) => {
    try {
        let body = req.body
        const userDetails = new userSchema(body)
        const saveResponse = await userDetails.save()
        return res.status(200).send({message: "success",data: saveResponse.data})
    } catch (error) {
        return res.status(500).send({message: "Internal Server Error"})
    }
}

module.exports = {registerUser}