'use strict';

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
//Database
const db=require('./config/db.config');

const User = require('./models/user.model');
const Zone= require('./models/zone.model');
// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.use(bodyParser.json());
app.use(cors());
app.get('/', (req, res) => {
  res.send('Assist Internship 2021. Hello Node.js Sample!\n');
});
//SIGN IN
app.get('/signin', (req,res) => {
})
app.post('/user', async (req,res) => {
  try{
    console.log(req);
    console.log("MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM",req.body);
    const newUser=new User(req.body)
    console.log(newUser);
    await newUser.save()
    res.json({user: newUser})
  }catch(error){
    console.log(error);
  }
})
app.get('/user/:userId', async (req, res) => {
  const userId = req.params.userId
  try {
  const user = await User.findAll({
  where: {
  id: userId
  }}
  )
  res.json({ user })
  } catch(error) {
  console.error(error)
  }
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
    .then(() => console.log('MERGE'))
    .catch(err => console.log("ErrorL:"+err))


//
var port = process.env.PORT||PORT;
app.listen(port);
console.log(`Running on http://${HOST}:${PORT}`);
