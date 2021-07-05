'use strict'

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const axios = require('axios')
require('dotenv').config()
const app = express()
app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 8081
const getData = require('./Controllers/Country.controller')
const Crud = require('./Controllers/Shema.contoller')
mongoose.connect('mongodb://localhost:27017/art', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
app.get('/', (req, res) => {
  res.send(`My app is working well`)
})

app.get('/country', getData)
app.post('/country/list', Crud.createItem)
app.get('/country/list', Crud.getItem)
app.delete('/country/list/:slug', Crud.deleteItem)
app.put('/country/list/:slug', Crud.updateItem)



app.listen(PORT, () => {
  console.log(`Server work at ${PORT}`);
})