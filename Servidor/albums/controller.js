
const {Client}  = require('pg');


const config = {
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    user: process.env.PGUSER,
    password:process.env.PGPASSWORD
  }
   async function getAlbum(req, res){
    try {
      const client = new Client(config)
    await client.connect();
    const result = await client.query("select * from public.images")
    console.log(result.rows);
    await client.end();
    console.log('Connection has been established successfully.');
      res.status(200).send(result.rows);
    } catch (error){
      console.error('No se puso conectar a BD :', error);
        res.sendStatus(510)
    }
}
 
/*
function getAlbum(req, res){
  res.send(albums)
}
let albums = 
    [{
        "nombre":"Amarillo",
        "album":[
            {
              "id": 11,
              "imgSrc": "/img/amarillo/h1.jpg"
            },
            {
              "id": 12,
              "imgSrc": "img/amarillo/h2.jpg"
            },
            {
              "id": 13,
              "imgSrc": "/img/amarillo/h3.jpg"
            },
            {
              "id": 14,
              "imgSrc": "img/amarillo/h4.jpg"
            },
            {
              "id": 15,
              "imgSrc": "/img/amarillo/h5.jpg"
            }
        ]
      },
      {
        "nombre":"Azul",
        "album":[
            {
              "id": 21,
              "imgSrc": "/img/azul/h1.jpg"
            },
            {
              "id": 22,
              "imgSrc": "/img/azul/h2.jpg"
            },
            {
              "id": 23,
              "imgSrc": "/img/azul/h3.jpg"
            },
            {
              "id": 24,
              "imgSrc": "/img/azul/h4.jpg"
            },
            {
              "id": 25,
              "imgSrc": "/img/azul/h5.jpg"
            }
        ]
      },
      {
        "nombre":"Rojo",
        "album":[
            {
              "id": 31,
              "imgSrc": "/img/rojo/v1.jpg"
            },
            {
              "id": 32,
              "imgSrc": "/img/rojo/v2.jpg"
            },
            {
              "id": 33,
              "imgSrc": "/img/rojo/v3.jpg"
            },
            {
              "id": 34,
              "imgSrc": "/img/rojo/v4.jpg"
            },
            {
              "id": 35,
              "imgSrc": "/img/rojo/v5.jpg"
            },
            {
              "id": 36,
              "imgSrc": "/img/rojo/v6.jpg"
            },
            {
              "id": 37,
              "imgSrc": "/img/rojo/v7.jpg"
            }      
       ]
      },
      {
        "nombre":"Verde",
        "album":[
            {
              "id": 41,
              "imgSrc": "/img/verde/v1.jpg"
            },
            {
              "id": 42,
              "imgSrc": "/img/verde/v2.jpg"
            },
            {
              "id": 43,
              "imgSrc": "/img/verde/v3.jpg"
            },
            {
              "id": 44,
              "imgSrc": "/img/verde/v4.jpg"
            },
            {
              "id": 45,
              "imgSrc": "/img/verde/v5.jpg"
            }
        ]
      }
      
    ]
  
*/
module.exports = {
    getAlbum
}