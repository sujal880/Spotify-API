const mongoose=require('mongoose');
const musicSchema=new mongoose.Schema({
    id:{
        type:String,
        required:true
    },
    music:{
        type:String,
        required:true
    }
});
const allMusic=mongoose.model('allmusics',musicSchema);
module.exports=allMusic;