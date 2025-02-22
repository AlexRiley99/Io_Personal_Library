//Users Router
const express = require('express') //require express
const router = express.Router() //get the router from express
const Library = require('../models/library') //require library from models

//Get all
router.get('/', async (req, res) => { //Get libraries by id
    try{
        const users = await Library.find()
        res.json(library) //send all libraries 
    } catch (err){ 
        res.status(500).json({message: err.message}) //500 error = something wrong with server
    }
})


//Get one
router.get('/:id', getLibrary, (req, res) => { //Get one library by id
    console.log('User found, getting user:', res.library.user);
    res.send(res.library.user);
})


//Create one /MODIFY SCHEMA/
router.post('/', async (req, res) => { //Create library based on user input
    const library = new Library({
        user: req.body.user, //body = what the user sends
        un: req.body.un,
        pw: req.body.pw
    })
    try{
        const newLibrary = await library.save()
        res.status(201).json(newLibrary) //Status 201 = succesfully created
    } catch (err){
        res.status(400).json({message: err.message}) //400 error = something wrong with user input
    }
})


//Update one
router.patch('/:id', getUser, async (req, res) => { //Update library based on user input - access library by id
    console.log('User found, updating user:', res.library.user)
    
    if(req.body.user != null){
        res.library.user = req.body.user 
    }
    if(req.body.un != null){
        res.library.un = req.body.un
    }
    if(req.body.pw != null){
        res.library.pw = req.body.pw
    }

    try{
        const updatedLibrary = await res.library.save()
        res.json(updatedLibrary)
    } catch(err){
        res.status(400).json({message: err.message})
    }

})


//Delete one
router.delete('/:id', getLibrary, async (req, res) => { //Delete library by id
    console.log('User found, deleting user:', res.library.user);
    try{
        await user.deleteOne({_id: res.user._id});
        res.json({message: 'Deleted user'})
    }catch(err){
        res.status(500).json({message: err.message})
    }
})



const mongoose = require('mongoose');

async function getUser(req, res, next){ //If called, move on to next section
    const { id } = req.params;

    //Validate provided id
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).send("Invalid ID"); //Return bad request
    }


    let user;
    try{
        user = await User.findById(req.params.id); //Get user by ID
        if(!user){ //if user does not exist
            return res.status(404).send("Cannot find user"); //not found
        }
        res.user = user //Store user in res.user to pass to the next handler
        next(); //continue to the route handler
    }catch(err){
        console.error(err);
        return res.status(500).json({message: err.message});
    }

    
}
module.exports = router //export router