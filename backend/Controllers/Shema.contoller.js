'use strict'

const gethub = require('../Models/Schema.model')

const createItem = async (req, res) => {
  const { name, capital, flag, regionalBlocs } = req.body;
  const slug = name.toLowerCase().split(' ').join('-');
  gethub.find({ name: name }, (error, data) => {
    if (data.length > 0) {
      res.send('item is exist')
    } else {
      const newCity = new gethub({
        name: name, capital: capital, flag: flag, regionalBlocs: regionalBlocs, slug: slug
      })
      console.log({ 'name:': name })
      newCity.save()
      res.send(newCity);
    }
  })
}
const getItem = async (req, res) => {
  gethub.find({}, (error, data) => res.send(data))
}
const deleteItem = async (req, res) => {
  const slug = req.params.slug;
  gethub.remove({ slug: slug }, (error, data) => {
    if (error) {
      res.send(error)
    } else {
      res.send(data)
    }
  })
}
const updateItem = async (req, res) => {
  const { regionalBlocs } = req.body;
  const slug = req.params.slug;
  gethub.find({ slug: slug }, (error, data) => {
    if (error) {
      res.send(error)
    } else {
      data[0].regionalBlocs = regionalBlocs;
      data[0].save();
      res.send(data)
    }
  })
}

module.exports = {
  createItem, getItem, deleteItem, updateItem
}