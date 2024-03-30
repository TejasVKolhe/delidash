const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://kstkh10:a8KSzJS3Rl1XM7qz@cluster0.byybuak.mongodb.net/delidash?retryWrites=true&w=majority&appName=Cluster0';
const mongoDB=()=>{
    mongoose.connect(mongoURI, { useNewUrlParser:true })
    .then(function(){
    console.log('connected');
    const fetch_data=mongoose.connection.db.collection("food_items")
    console.log("got the collection");
    fetch_data.find().toArray(function(err, data){
        if (err) console.log(err);
        else console.log(data);
        });
})
}

module.exports=mongoDB;