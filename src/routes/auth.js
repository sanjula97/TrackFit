import express from 'express'
import User from '../models/user'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
//import validation
// import registerVlidation from '../validation';
import Joi from '@hapi/joi'

const registerValidationSchema =Joi.object({
    name: Joi.string().min(6).required(),
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required()
}); 

const loginValidationSchema =Joi.object({
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required()
}); 

var router = express.Router();

// Register
router.post('/register' , async (req,res) => {
    //validating the user
    const { error, value } = registerValidationSchema.validate(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    // try {
    //     const validation = await registerValidationSchema.validateAsync(req.body);
    //     res.send(validation);
    // } catch (error) {
    //     res.status(400).send(error.details[0].message);
    // }

    // Checking if the user already registered
    const emailExist = await User.findOne({email: req.body.email});
    if(emailExist) return res.status(400).send('Email already exists'); 

    //Hash the pass word
    var salt = bcrypt.genSaltSync(10);
    var hashedPassword = bcrypt.hashSync(req.body.password, salt);
    

   
    // Create a new User
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword
    });

    try {
        const savedUser = await user.save();
        res.send({user: user._id});
    } catch (err) {
        res.status(400).send(err);
    }
});

// Login
router.post('/login',async (req,res) => {
 //validating the user
 const { error, value } = loginValidationSchema.validate(req.body);
 if (error) {
     return res.status(400).send(error.details[0].message);
 }

 // Checking if the email exists
 const user = await User.findOne({email: req.body.email});
 if(!user) return res.status(400).send('Incorrect email'); 

// Checking if the password is correct
const validPaaword = await bcrypt.compareSync(req.body.password, user.password);
if(!validPaaword) return res.status(400).send('Incorrect password'); 

//Create and assign atoken
const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
res.header('auth-token', token).send(token);


});


export default router;

