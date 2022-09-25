require('./config/config.js');
require('./models/db');
require('./config/passportConfig');

const express = require('express');
const bodyparser=require('body-parser');
const cors = require('cors');
const passport=require('passport');

const rtsIndex= require('./routes/index.router');

var app = express();

//middleware 
app.use(bodyparser.json());
app.use(cors()); // cors require to connect with andular
app.use(passport.initialize());
app.use('/api',rtsIndex);

//error handler
app.use((req, res, err, next)=>{
    if (err.name ==='validationError'){
        var valErrors =[];
        Object.keys(err.errors).forEach(key=>valErrors.push(err.errors[key].message));
        res.status(422).send(valErrors)
    }
});
//'/api/register'
//start server
app.listen(process.env.PORT, ()=> console.log(`server started at port: ${process.env.PORT}`));

