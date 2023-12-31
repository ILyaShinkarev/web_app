
import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import mongoose from 'mongoose';

import {registerValidation} from './validations/auth.js';

import checkAuth from './utils/checkAuth.js';

import * as UserController  from './controllers/UserController.js';

mongoose.connect('mongodb+srv://bkleon96:123@web.iabef27.mongodb.net/blog?retryWrites=true&w=majority')
.then(() => console.log('Db OK'))
.catch((err) => console.log('Db error',err));

const app = express();

app.use(express.json());

app.post('/auth/login', UserController.login);
app.post('/auth/register',registerValidation, UserController.register);
app.get('/auth/me', checkAuth, UserController.getMe);

app.listen(4444,(err) => {

    if (err) {
        console.log('error')
    }

    console.log('Server OK');
});