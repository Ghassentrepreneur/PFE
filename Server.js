//DotEnv
require('dotenv').config();
//Express
const express = require('express');
const app = express();
//Db
const db = require('./Config/DB');
db();
//Cors
const cors = require('cors');
app.use(cors());
app.use(express.json());
//ARTICLE ROUTES
const articleRoutes = require('./Article/Controller');
app.use('/article',articleRoutes);
//AUTH ROUTES
const authRoutes = require('./Auth/Routes');
app.use('/auth',authRoutes);
//USER ROUTES
const userRoutes = require('./User/Controller');
app.use('/user',userRoutes);
//COMMENTS ROUTES
const commentRoutes = require('./Comment/Controller');
app.use('/comment',commentRoutes);
//PORT
const PORT = process.env.PORT || 4000;
//SERVER
app.listen(PORT,()=>{
    console.log(`Serving At : http://localhost:${PORT}`);
});