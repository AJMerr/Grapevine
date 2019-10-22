// Imports express
const express = require('express')


// Imports the API files from models
const grapevineApi = require('../models/model.js')


// Creates a new router
const grapevineRouter = express.Router()


// Gets all from Grapevine Schema  
grapevineRouter.get('/grapevine', (req, res) => {
  const getAllGrapes = grapevineApi.getAllGrapes()
  res.json(getAllGrapes);
})      

// Gets one from the Schema
grapevineRouter.get('/grapevine/:index', (req, res) => {
  const getOneGrape = grapevineApi.getOneGrape(req.params.index)
  res.json(getOneGrape);
})

// Creates data into the Schema
grapevineRouter.post('/grapevine', (req, res) => {
  const createGrape = grapevineApi.createGrape()
  res.json(createGrape);
})

// Edits data from the Schema
grapevineRouter.put('/grapevine/:index', (req, res) => {
  const editGrape = grapevineApi.editGrape(req.params.index, req.body)
  res.json(editGrape);
})

// Deletes data
grapevineRouter.delete('/grapevine/:index', (req, res) => {
  const deleteGrape = grapevineApi.deleteGrape(req.params.index) 
  res.json(deleteGrape);
})


// Exports the router
module.exports = {
  grapevineRouter
}
