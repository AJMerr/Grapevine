// Imports connection.js
const mongoose = require('./connection.js')


// Schemas
const GrapevineSchema = new mongoose.Schema({
  message: String,
  createdAt: Date
})

const UserSchema = new mongoose.Schema({
  userAge: Number,
  userEmail: String
})


// Creates a collection API
const GrapevineCollection = mongoose.model('grapevine', GrapevineSchema)

const UserCollection = mongoose.model('user', UserSchema)


// Functions for the Message Schema
// Gets all from Grape schema
const getAllGrapes = () => {
  return GrapevineCollection.find({});
}

// Gets one item from Grape schema
const getOneGrape = (id) => {
  return GrapevineCollection.findById(id);
}

// Creates a new Grape
const createGrape = (newGrape) => {
  return GrapevineCollection.create(newGrape);
}

// Edit a Grape
const editGrape = (id, newGrape) => {
  return GrapevineCollection.update({_id: id}, newGrape);
}

// Delete Grape
const deleteGrape = (id) => {
  return GrapevineCollection.deleteOne({_id: id});
}


// Functions for the User Schema
// Get all users
const getAllUsers = () => {
  return UserCollection.find({});
}

// Get a single user
const getOneUser = (id) => {
  return UserCollection.findById(id);
}

// Create user
const createUser = (newUser) => {
  return UserCollection.create(newUser);
}

// Edit user
const editUser = (id, newUserData) => {
  return UserCollection.update({_id: id}, newUserData);
}

// Delete User
const deleteUser = (id) => {
  return UserCollection.deleteOne({_id: id});
}


// Exports all functions
module.exports = {
  getAllGrapes,
  getOneGrape,
  createGrape,
  editGrape,
  deleteGrape,
  getAllUsers,
  getOneUser,
  createUser,
  editUser,
  deleteUser
}
