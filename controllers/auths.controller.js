const User = require('../models/User.model');
const bcrypt = require('bcryptjs')

exports.Register = async (req, res) => {
    try {
        const { login, password, avatar, phone } = req.body;

        if  (login && typeof login === 'string' 
            && password && typeof password === 'string' 
            && phone && typeof phone === 'string'
            && avatar && typeof avatar === 'string'  ){

            const userWithLogin = await User.findOne({ login });
            if (userWithLogin) {
                return res.status(409).send({ message: 'User with this login already exists'})
            }
            const user = await User.create({ login, password: await bcrypt.hash(password, 10), phone, avatar})
            res.status(201).send({ message: 'User created ' + user.login})

        } else {
            res.status(400).send({ message: 'Bad request' })
        }
    } catch(err) {
        res.status(500).send({message: err.message})
    }
}

exports.Login = async (req, res) => {

  
}

exports.User = async (req, res) => {

}
