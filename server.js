// Imports for packages
const express = require('express')
const app = express()
const methodOverride = require('method-override')


// Imports routers from controllers
const { grapevineRouter } = require('./controllers/grapevine.js')


// Middleware registration
// Parses through the body of the HTTP requests from a URL encoded string 
app.use(express.urlencoded({extended: true}))


 // Parses through the body of the HTTP requests from a JSON string  
app.use(express.json())


 //add method-override middleware for "faking" DELETE and PUT/PATCH requests 
app.use(methodOverride('_method'))


// Uses Public directory for CSS, images, etc.
app.use(express.static(__dirname+"/public"))


 // Set the view engine of express to use the hbs (handlebars) package 
app.set('view engine', 'hbs')


 // Add router for the application to use. The first argument is a prefix to all the paths defined in the router.
app.use('/', grapevineRouter)


 // Set the port the server is to run on
const PORT = process.env.PORT || 3000 


//Starts the server
app.listen(PORT, () => {
    console.log(`App is listening on PORT ${PORT}`)
})
