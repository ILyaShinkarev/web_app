
import express from 'express';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import { validationResult } from 'express-validator';

import {registerValidation} from './validations/auth.js';

// import UserModel from './models/user.js'; // error

mongoose.connect('mongodb+srv://bkleon96:123@web.iabef27.mongodb.net/?retryWrites=true&w=majority')
.then(() => console.log('Db OK'))
.catch((err) => console.log('Db error',err));

const app = express();

app.use(express.json());

app.post('/auth/register',registerValidation,(req,res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json(errors.array());
    }

    const doc = new UserModel({
        email: req.body.email,
        fullname: req.body.fullname,
        avatarUrl: req.body.avatarUrl,
        passwordHash: req.body.password
    });

    res.json({
        success: true,
    });

});

app.listen(4444,(err) => {

    if (err) {
        console.log('error')
    }

    console.log('Server OK');
});


