const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const {check, validationResult} = require('express-validator/check');
const router = express.Router();

const User = require('../models/User');
const jwtSecret = process.env.JWT_SECRET || 'sixHotLoads06414';

// @route           POST api/users
// @description     Register a user
// @access          Public
router.post('/',[
    check('name', 'Name is required')
        .not()
        .isEmpty(),
    check('email', 'Please enter valid email')
        .isEmail(),
    check('password', 'Please enter a password with 6+ characters')
        .isLength({min: 6})

], async (request, response) => {
    const errors = validationResult(request);
    if (!errors.isEmpty()){
        return response.status(400).json({errors: errors.array()});
    }

    const {name, email, password}  = request.body;

    try {
        //Is user already exist check
        let user = await User.findOne({email});

        if (user) {
            return response.status(400).json({message:"User already exist!"});
        }

        // If user do not exist, create new user
        user = new User({
            name,
            email,
            password
        });

        // Generate salt
        const salt = await bcrypt.genSalt(10);

        // Hash user's password
        user.password = await bcrypt.hash(password, salt);

        await user.save();

        const payload = {
            user: {
                id: user.id
            }
        };

        jwt.sign(payload, jwtSecret, {
            expiresIn: 3600
        }, (error, token) => {
            if (error) throw error;
            response.json({token});

        })
    } catch (error) {
        console.error(error.message);
        response.status(500).send('Server error');
    }
});

module.exports = router;