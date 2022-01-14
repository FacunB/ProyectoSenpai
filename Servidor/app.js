const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');


const albumsRoutes = require('./albums/routes');
const formRoutes = require('./forms/routes')

require('dotenv').config();

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(function(req, res, next){
    console.log('Request logged at ', Date.now());
    next();
});

app.use('/albums', albumsRoutes);
app.use('/contact', formRoutes);



app.listen(7000, (req, res)=>{
    console.log("App listening port 7000")
})