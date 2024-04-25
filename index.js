
require('dotenv').config()
const express = require('express')


const app = express()
const port = process.env.PORT || 5000
const insta = "iamsoumikhazra";

const github = "https://api.github.com/users/iamsoumikhazra" ;

const axios =require('axios')

app.get('/',(req,res)=>{
  res.send(`sending hello from world\'s backend <br/>
  Now I want to see real time changes in my app after pushing code into github.`)
})

app.get('/insta',(req,res)=>{
  res.send(`<a href="https://www.instagram.com/${insta}/" target="_blank">${insta}</a> IS HERE `)
})
app.get('/google',(req,res)=>{
  res.send(`GO TO<a href="https://www.google.com/" target="_blank">Google</a>`)
  
})



app.get('/github', async (req, res) => {
  try {
    const response = await axios.get(github);
    const avatarUrl = response.data.avatar_url;
    const name = response.data.name;
    const followers = response.data.followers;
    res.send(`<img src="${avatarUrl}" alt="avatar" /> </br> <h2>${name} </br> Followers:${followers}</h2>`);
    
    // res.send(`<h2>name:${name}:${followers}</h2>`);
  } catch (error) {
    console.error(error);
  }
});




app.listen(port,()=>{
  console.log(`server is running on port ${port}`)
})


