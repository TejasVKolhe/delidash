const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://kstkh10:a8KSzJS3Rl1XM7qz@cluster0.byybuak.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const mongoDB=()=>{
    mongoose.connect(mongoURI, { useNewUrlParser:true });
    console.log('connected');
}

module.exports=mongoDB;