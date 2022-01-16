
const pool = require('../services/pool')

async function getAlbum(req, res){
    try {
    const result = await pool.query("select * from public.images")
    console.log(result.rows);
    console.log('Connection has been established successfully.');
      res.status(200).send(result.rows);
    } catch (error){
      console.error('No se puso conectar a BD :', error);
        res.sendStatus(510)
    }
}
 
module.exports = {
    getAlbum
}