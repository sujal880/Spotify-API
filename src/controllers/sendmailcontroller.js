const nodemailer=require('nodemailer');
require('dotenv').config();
const sendmailController=async(email,res)=>{
    try{
        const transporter=nodemailer.createTransport({
            service:'gmail',
            auth:{
                user:process.env.USER_EMAIL,
                pass:process.env.USER_PASS
            }
        });
        const mailoptions={
            from:process.env.USER_EMAIL,
            to:email,
            subject:"Welcome to Sujal's Spotify App"
        }
        transporter.sendMail(mailoptions,(error,info)=>{
            if(error){
                return res.status(400).json({
                    message:"can't send mail"
                })
            }
            else{
                res.status(200).json({
                    message:"Email Sent"
                })
            }
        })
    }
    catch(ex){
        res.status(500).json({
            message:"internal server error"
        })
    }
}

module.exports=sendmailController;