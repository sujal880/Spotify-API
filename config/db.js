const mongoose = require('mongoose');
const connection = mongoose.connect('mongodb+srv://davesujal12:0luzvUU0oqRT5G1w@cluster0.z9dwfdd.mongodb.net/spotify?retryWrites=true&w=majority&appName=Cluster0').then((value) => {
    console.log("Db is Connected!!");
});
module.exports = connection;