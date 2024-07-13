const express=require('express');
const signupController = require('../controllers/signupcontroller');
const signinController = require('../controllers/signincontroller');
const routes=express.Router();
routes.post('/signup',signupController);
routes.post('/signin',signinController);

module.exports=routes;