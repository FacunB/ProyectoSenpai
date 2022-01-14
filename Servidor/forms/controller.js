
function getForms(req,res){
    res.send(forms)
}

function postForms(req,res){
    console.log(req.body);
    let form = req.body;
    forms.push(form);
    res.send({message: "Enviado correctamente", form: form})
    console.log(forms)
    
}

let forms = [
    {
        "name":"name",
        "email":"email",
        "content":"content"
    }
]

module.exports = {
    getForms,
    postForms
}