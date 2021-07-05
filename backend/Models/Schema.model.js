'use strict'
const mongoose = require("mongoose")
const CountrySchema = mongoose.Schema({
  name: {
    type: String,
    unquie: true,
    lowercase: true,
    trim: true
  },
  slug: {
    type: String,
    unquie: true,
    lowercase: true,
    trim: true
  },
  capital: String,
  flag: String,
  regionalBlocs: String,
})

const CountryModel = mongoose.model('CountrySchema', CountrySchema)

module.exports = CountryModel