const Artist = require("../models/artistmodel");

const addartist=async(req,res)=>{
    try{
        const {artistname,artistsongs}=req.body;
        if(!artistname || !artistsongs){
            res.status(400).json({
                message:"enter required field's"
            })
        }
        const data=new Artist({
            artistname:artistname,
            artistsongs:artistsongs
        });
        const response=await data.save();
        res.status(200).json({
            message:"success",
            response:response
        })
    }
    catch(ex){
        res.status(500).json({
            message:"internal server error"
        })
    }
}

module.exports=addartist;