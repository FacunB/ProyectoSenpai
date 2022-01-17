
const pool = require('../services/pool')


async function postForms(req, res){
    try {
        let form = req.body;
        const result = await pool.query("insert into public.consultas(name, email, consulta) values ($1, $2, $3) returning *",
        [form.name, form.email, form.content])
        console.log(result.rows);
        console.log('Consulta enviada correctamente');
        res.status(200).redirect("http://localhost:3000/query");
      }catch (error){
        console.error('No se puso conectar a BD :', error);
          res.sendStatus(510)
      }
}

async function getForms(req, res){
  try {
    const result = await pool.query("select * from public.consultas order by timestamp desc limit 1")
    console.log(result.rows);
    console.log('Connection has been established successfully.');
      res.status(200).send(result.rows);
    } catch (error){
      console.error('No se puso conectar a BD :', error);
        res.sendStatus(510)
    }
}

module.exports = {
    getForms,
    postForms
}