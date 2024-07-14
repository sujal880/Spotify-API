const allMusic = require("../models/allmusicmodel")

const getmusicController=async(req,res)=>{
    try{
        const data=await allMusic.find();
        res.status(200).json({
            message:"success",
            musics:data
        })
    }
    catch(ex){
        res.status(500).json({
            message:"internal server error"
        })
    }
}

module.exports=getmusicController;