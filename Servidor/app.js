const express = require('express');
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser')

const albumsRoutes = require('./albums/routes');

app.use(cors());

app.use(function(req, res, next){
    console.log('Request logged at ', Date.now());
    next();
});

app.get('/health',async(req,res)=>{
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        res.sendStatus(200)

      } catch (error) {
        console.error('Unable to connect to the database:', error);
        res.sendStatus(510)
      }
});

app.use('/albums', albumsRoutes);



app.listen(7000, (req, res)=>{
    console.log("App listening port 7000")
})