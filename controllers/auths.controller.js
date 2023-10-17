const User = require('../models/User.model');
const bcrypt = require('bcryptjs');
const fs = require('fs');
const getImageFileType = require('../utils/getImageFileType');

exports.Register = async (req, res) => {
    try {
        const { login, password, phone } = req.body;
        const fileType = req.file ? await getImageFileType(req.file): 'unknown' ;
    

        if  (login && typeof login === 'string' && password && typeof password === 'string' && req.file && ['image/png', 'image/jpeg', 'image/gif'].includes(fileType) ){

            const userWithLogin = await User.findOne({ login });
            if (userWithLogin) {
                if(req.file) {
                    try{
                        fs.unlinkSync(req.file.path) // we are deleting the file after bad request
                    } catch(unlinkError) {
                        console.error('Error deleting file', unlinkError)
                    }
                }
                return res.status(409).send({ message: 'User with this login already exists'})
            }
            const user = await User.create({ login, password: await bcrypt.hash(password, 10), phone, avatar: req.file.filename})
            res.status(201).send({ message: 'User created ' + user.login})

        } else {
            if(req.file) {
                try {
                fs.unlinkSync(req.file.path) // we are deleting the file after bad request
                } 
                catch (unlinkError) {
                    console.error('Error deleting file: ', unlinkError)
                }
            }
            res.status(400).send({ message: 'Bad request' })
        }
    } catch(err) {
        if (req.file) {
            try {
                fs.unlinkSync(req.file.path); // ensure to use req.file.path
            } catch (unlinkError) {
                console.error('Error deleting file:', unlinkError);
            }
        }
        res.status(500).send({message: err.message})
    }
}

exports.Login = async (req, res) => {
    try {
        const { login, password } = req.body;

        if (login && typeof login === 'string' && password && typeof password === 'string'){

            const user = await User.findOne({ login })
            if(!user) {
                console.log('No user found for login:', login);
                res.status(400).send({ message:'Login or password are incorrect'})
            } 
            else {
                if (bcrypt.compareSync(password, user.password)) {
                    console.log('Login successful for:', login);
                    req.session.login = user.login;
                    res.status(200).send({ message: 'Login successful' })
                }
                else {
                    console.log('Password mismatch for:', login);
                    res.status(400).send({ message:'Login or password are incorrect'})
                }
            }
        } else {
            res.status(400).send({ message: 'Bad request' })
        }

    } catch(err){
        res.status(500).send({ message: err.message })
    }

}

exports.getUser = async (req, res) => {
    if (req.session.login){
        try {
            const user = await User.findOne({ login: req.session.login })
            if (user) {
                const userData = { login: user.login, _id: user._id}
                res.send(userData)
            } else {
                res.status(404).send({ message: 'User not found'})
            }
        }
        catch (error) {
            res.status(500).send({ message: 'Server error'})
        }
    } else {
        res.status(401).send({ message: "You are not authorized"})
    }
}

exports.logOut = async (req, res) => {
    res.session.destroyed((err) => {
        if(err){

        }
    })
}
