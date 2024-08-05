const mongoose=require('mongoose');
const artistSchema=new mongoose.Schema({
    artistname:{
        type:String,
        required:true
    },
    artistsongs:{
        type:String,
        required:true
    }
});
const Artist=mongoose.model('artists',artistSchema);
module.exports=Artist;