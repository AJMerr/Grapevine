// Imports express
const express = require('express')


// Imports the API files from models
const grapevineApi = require('../models/grapevine.js')


// Creates a new router
const grapevineRouter = express.Router()


// Functions for normal messaging
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
    res.json(oneGrape);
  })
})

// Creates data into the Schema
grapevineRouter.post('/grapevine', (req, res) => {
  grapevineApi.createGrape(req.body)
  .then((newGrape) => {
    res.json(newGrape);
  })
})

// Edits data from the Schema
grapevineRouter.put('/grapevine/:id', (req, res) => {
  grapevineApi.editGrape(req.params.id, req.body)
  .then((editedGrape) => {
    res.json(editedGrape);
  })
})

// Deletes data
grapevineRouter.delete('/grapevine/:id', (req, res) => {
  grapevineApi.deleteGrape(req.params.id) 
  .then((deletedGrape) => {
    res.json(deletedGrape);
  })
})


// Functions for the User sign up
// Gets all users
grapevineRouter.get('/users', (req, res) => {
  grapevineApi.getAllUsers()
  .then((allUsers) => {
    res.json(allUsers);
  })
})

// Gets a user
grapevineRouter.get('/users/:id', (req, res) => {
  grapevineApi.getOneUser(req.params.id)
  .then((oneUser) => {
    res.json(oneUser);
  })
})

// Creates a user
grapevineRouter.post('/users', (req, res) => {
  grapevineApi.createUser(req.body)
  .then((newUser) => {
    res.json(newUser);
  })
})

// Edits a user
grapevineRouter.put('/users/:id', (req, res) => {
  grapevineApi.editUser(req.params.id, req.body)
  .then((editedUser) => {
    res.json(editedUser);
  })
})

// Delete user
grapevineRouter.delete('/users/:id', (req, res) => {
  grapevineApi.deleteUser(req.params.id)
  .then((deletedUser) => {
    res.json(deletedUser)
  })
})


// Exports the router
module.exports = {
  grapevineRouter
}
