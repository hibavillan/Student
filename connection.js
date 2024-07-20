var mongoose = require('mongoose');
mongoose.connect(
    "mongodb+srv://cr7hibacr7:hiba@cluster0.xdbfgeb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(()=>{
    console.log("connected to db");
}).catch((err)=> console.log(err));