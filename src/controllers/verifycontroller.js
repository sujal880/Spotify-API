require('dotenv').config();
const secretkey=process.env.SECRETKEY;
const jwt=require('jsonwebtoken');
const verifyuserController=async(req,res,next)=>{
    try{
        const token=req.headers['authorization'];
        if(!token){
            res.status(403).json({
                message:"no token provided"
            })
        }
        jwt.verify(token,secretkey,(err,decoded)=>{
            if(err){
                res.status(400).json({
                    message:"token expired regenerate new token"
                })
            }
            req.user=decoded;
            next();
        })
    }
    catch(ex){
        res.status(500).json({
            message:"internal server error"
        })
    }
}

module.exports=verifyuserController;