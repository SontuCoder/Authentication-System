const mongoose = require("mongoose");
const  dotenv  = require('dotenv');
dotenv.config();

const db_url = process.env.DB_URL;
mongoose.connect(db_url,{
    serverSelectionTimeoutMS: 5000
});

mongoose.connection.on("connected", ()=>{
    console.log("Connected to MongoDB");
});

mongoose.connection.on("error", (error)=>{
    console.log("MongoDB connection error: ", error);
});

module.exports = mongoose;