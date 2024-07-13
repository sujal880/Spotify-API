const mongoose=require('mongoose');
const userSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    dob:{
        type:String,
        required:true
    },
    createdat:{
        type:Date,
        default:Date.now
    }
});

const User=mongoose.model('users',userSchema);
module.exports=User;