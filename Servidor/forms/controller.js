
const pool = require('../services/pool')


async function postForms(req, res){
    try {
        let form = req.body;
        const result = await pool.query("insert into public.consultas(name, email, consulta) values ($1, $2, $3) returning *",
        [form.name, form.email, form.content])
        console.log(result.rows);
        console.log('Consulta enviada correctamente');
        res.status(200).send({message:'La consulta se envió correctamente', form: form});
      }catch (error){
        console.error('No se puso conectar a BD :', error);
          res.sendStatus(510)
      }
}


module.exports = {
    postForms
}