'use strict';

const express = require('express');
const cors = require('cors');

//Database
const db=require('./config/db.config');


// Constants
const PORT = 5000;
const HOST = '0.0.0.0';

// App
const app = express();
app.use(cors());
app.get('/', (req, res) => {
  res.send('Assist Internship 2021. Hello Node.js Sample!\n');
});
//SIGN IN
app.get('/signin', (req,res) => {
  

})
app.post('/signin', (req,res) => {

})

///SIGN UP
app.get('/signup', (req,res) => {
  
})


app.post('/signup', (req,res) => {
  
})
//database test
db.authenticate()
    .then(() => console.log('MERGE BOSS'))
    .catch(err => console.log("ErrorL:"+err))


//
var port = process.env.PORT||PORT;
app.listen(port);
console.log(`Running on http://${HOST}:${PORT}`);
