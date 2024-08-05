const User = require("../models/usermodel");

const FetchUserProfileController = async (req, res) => {
    try {
        const {user}=req.body;
        if(!user){
            res.status(400).json({
                message:"enter user id"
            })
        }
        const data=await User.findById(user);
        res.status(200).json({
            message:"success",
            data:data
        })
    }
    catch (ex) {
        res.status(500).json({
            message: "internal server error"
        })
    }
}

module.exports=FetchUserProfileController;