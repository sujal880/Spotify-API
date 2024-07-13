const User = require("../models/usermodel");
const bcrypt = require('bcrypt');
const signupController = async (req, res) => {
    try {
        const { email, password, dob, createdat } = req.body;

        if (!email || !password || !dob) {
            res.status(400).json({
                message: "enter required field's email,password,dob"
            })
        }
        const existinguser = await User.findOne({ email });
        if (existinguser) {
            res.status(403).json({
                message: "user already exists"
            })
        }
        const hashedpassword = await bcrypt.hash(password, 10);
        const data = new User({
            email: email,
            password: hashedpassword,
            dob: dob,
            createdat: createdat
        });
        const response = await data.save();
        if (response) {
            res.status(200).json({
                message: "user created",
                response: response
            })
        }
        res.status(400).json({
            message: "user Not created"
        })
    }
    catch (ex) {
        res.status(500).json({
            message: "internal server error"
        })
    }
}
module.exports = signupController;