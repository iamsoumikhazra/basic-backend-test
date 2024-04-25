
require('dotenv').config()
const express = require('express')

const app = express()
const port = procesclears.env.PORT
const insta = "iamsoumikhazra";



app.get('/',(req,res)=>{
  res.send('sending hello from world\'s backend !')
})

app.get('/insta',(req,res)=>{
  res.send(`<a href="https://www.instagram.com/${insta}/" target="_blank">${insta}</a> IS HERE `)
})

app.listen(port,()=>{
  console.log(`server is running on port ${port}`)
})


