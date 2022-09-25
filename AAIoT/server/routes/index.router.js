// in this we will route common route inside this application
// giving path to all component in this application

const express= require('express');
const router=express.Router();

const ctrlUser = require('../controller/user.controller');  //path for user,controller.js
const jwtHelper= require('../config/jwtHelper');  // path for JWT_HELPER

// routing for registration|login, authentication and user profile

router.post('/register', ctrlUser.register);
router.post('/authenticate', ctrlUser.authenticate);
router.get('/patient',jwtHelper.verityJwtToken, ctrlUser.patient);

// here the patient is property which exports data from database if email id and password matches
// in router we declare the method (post, get, delete,etc) to get or send data from DB
//export this module with name router

module.exports=router;      //exports the module router to work in