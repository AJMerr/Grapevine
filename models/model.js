// Imports connection.js
const mongoose = require('./connection.js')


// Global variable to act as in a memory database
global.grapevine = [];


// Schemas
const GrapevineSchema = new mongoose.Schema({
  message: String,
  createdAt: String
})


// Creates a collection API
const GrapevineCollection = mongoose.model('Sample', GrapevineSchema)


// Gets all from Grape schema
const getAllGrapes = () => {
  return GrapevineCollection.find({});
}

// Gets one item from Grape schema
const getOneGrape = (id) => {
  return GrapevineCollection.findById(id);
}

// Creates a new Grape
const createGrap = (newGrape) => {
  return GrapevineCollection.create(newGrape);;
}

// Edit a Grape
const editGrape = (id, newGrape) => {
  return GrapevineCollection.update({_id: id}, newGrape);
}

// Delete Grape
const deleteGrape = (id) => {
  return GrapevineCollection.deleteOne({_id: id});
}


// Exports all functions
module.exports = {
  getAllGrapes,
  getOneGrape,
  createGrap,
  editGrape,
  deleteGrape
}
