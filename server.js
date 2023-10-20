
//gitrequire('dotenv').config()

const express = require('express')
const app = express()

//const request = require('request');

app.use(express.json())


const webhooksRouter = require('./routes/webhooks')
app.use('/webhooks',webhooksRouter)
 

app.listen(5000, ()=> console.log("Server Started Port: 5000"))