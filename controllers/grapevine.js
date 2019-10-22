// Imports express
const express = require('express')


// Imports the API files from models
const grapevineApi = require('../models/grapevine.js')


// Creates a new router
const grapevineRouter = express.Router()


// Gets all from Grapevine Schema  
grapevineRouter.get('/grapevine', (req, res) => {
  grapevineApi.getAllGrapes()
    .then((allGrapes) => {
      res.json(allGrapes);
    })
})      

// Gets one from the Schema
grapevineRouter.get('/grapevine/:id', (req, res) => {
  grapevineApi.getOneGrape(req.params.id)
  .then((oneGrape) => {
    res.json(oneGrape)
  })
})

// Creates data into the Schema
grapevineRouter.post('/grapevine', (req, res) => {
  grapevineApi.createGrape(req.body)
  .then((newGrape) => {
    res.json(newGrape)
  })
})

// Edits data from the Schema
grapevineRouter.put('/grapevine/:id', (req, res) => {
  grapevineApi.editGrape(req.params.id, req.body)
  .then((editedGrape) => {
    res.json(editedGrape)
  })
})

// Deletes data
grapevineRouter.delete('/grapevine/:id', (req, res) => {
  grapevineApi.deleteGrape(req.params.id) 
  .then((deletedGrape) => {
    res.json(deletedGrape)
  })
})


// Exports the router
module.exports = {
  grapevineRouter
}
