const mongoose=require('mongoose');
const mongoURI="mongodb://localhost:27017/Note-Taking";
const connectToMongo=()=>{
    mongoose.connect(mongoURI)
    .then(()=>{
        console.log("Connection Successfull");
    })
    .catch(()=>{
        console.log("Error occured");
    })
}
module.exports=connectToMongo;