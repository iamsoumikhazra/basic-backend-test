
require('dotenv').config()
const express = require('express')


const app = express()
const port = process.env.PORT || 5000
const insta = "iamsoumikhazra";



app.get('/',(req,res)=>{
  res.send('sending hello from world\'s backend !\nNow I want to see real time changes in my app after pushing code into github.')
})

app.get('/insta',(req,res)=>{
  res.send(`<a href="https://www.instagram.com/${insta}/" target="_blank">${insta}</a> IS HERE `)
})
app.get('/google',(req,res)=>{
  res.send(`GO TO<a href="https://www.google.com/" target="_blank">Google</a>`)
})

app.listen(port,()=>{
  console.log(`server is running on port ${port}`)
})


