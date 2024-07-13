const User = require("../models/usermodel");
const bcrypt=require('bcrypt');
require('dotenv').config();
const secretkey=process.env.SECRETKEY;
const jwt=require('jsonwebtoken');
const checkemail = process.env.email_regex;
const sendmailController = require("./sendmailcontroller");
const signinController=async(req,res)=>{
    const {email,password}=req.body;
    try{
        if(!email || !password){
            res.status(400).json({
                message:"enter required field's email and password"
            })
        }
        else if(checkemail.test(email)){
            const existinguser=await User.findOne({email});
            if(!existinguser){
                res.status(403).json({
                    message:"user not found please sign up"
                })
            }
            const isMatch=await bcrypt.compare(password,existinguser.password,);
            if(!isMatch){
                res.status(403).json({
                    message:"password doesnt match"
                })
            }
            const token=jwt.sign({
                userId:existinguser._id
            },secretkey,{expiresIn:'48h'});
            sendmailController(email);
            res.status(200).json({
                message:`Welcome ${existinguser.email}`,
                data:existinguser,
                token:token
            })
        }
        else{
            res.status(403).json({
                message: "email is Not valid!"
            })
        }
        
    }
    catch(ex){
        res.status(500).json({
            message:"internal server error"
        })
    }
}

module.exports=signinController;