// Imported libraries
const express = require('express');
const db = require('./config/mongoose');

// Creating an App with Express
const app = express();
const port = 8000;

//Enable us to pass data through URL
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//Routes
app.use('/',require('./routes/index'));

app.listen(port,()=>{
    console.log(`Server up and running on port:  ${port}`);
});
