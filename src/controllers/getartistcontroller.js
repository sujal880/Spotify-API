const Artist = require("../models/artistmodel")

const getartistController=async(req,res)=>{
    try{
        const data=await Artist.find();
        res.status(200).json({
            message:"success",
            data:data
        })
    }
    catch(ex){
        res.status(500).json({
            message:"internal server error"
        })
    }
}

module.exports=getartistController;