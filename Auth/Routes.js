const router = require('express').Router();
//Controller
const  user = require('./Controller');

 //Register
router.post('/register',user.register);
//Sign In
router.post('/signin',user.signIn);
 
//Router   
module.exports = router