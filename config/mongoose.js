// Creating a database to store products
require("dotenv").config()
const mongoose = require('mongoose');

// Connecting the database
mongoose.connect('mongodb+srv://ritikpatel705:ritik123@cluster0.gknttfg.mongodb.net/db');

const db = mongoose.connection;

// on unsuccessfull connection
db.on('error',console.error.bind(console,"Error connecting to MongoDB"));
//on succesfull connection
db.once('open',function(){
    console.log("*** Connected to Database :: MongoDB ***");
});

module.exports = db;
