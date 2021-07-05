'use strict'

const { default: axios } = require('axios')
const { response } = require('express')
const CountryData = require('../Models/Country.model')

const getData = async (req, res) => {
  const url = `https://restcountries.eu/rest/v2?limit=10`
  axios.get(`https://restcountries.eu/rest/v2?limit=10`).then(response => {
    const CountryDetails = response.data.map(count => {
      return new CountryData(count)
    })
    res.send(CountryDetails)
  }).catch(error => {
    console.log(`hahahaha error`);
    console.log(error);
  })

}

module.exports = getData