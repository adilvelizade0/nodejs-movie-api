const mongoose = require("mongoose");
module.exports = () =>{
    mongoose.connect("mongodb+srv://velizade0:Adil07112001@myproject.nxzwn.mongodb.net/movie-app-project?retryWrites=true&w=majority", { useNewUrlParser: true,useUnifiedTopology: true })
    mongoose.connection.on("open",()=>{
        // console.log("MongoDB: Connected");
    });
    mongoose.connection.on("error",()=>{
        console.log("MongoDB: Error",err);
    })
    mongoose.Promise = global.Promise;
}