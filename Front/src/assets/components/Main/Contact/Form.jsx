import React from 'react';
import { useState } from "react";
import * as utils from "../../JS/validators";
import { useHistory } from "react-router-dom";


export const Form = () =>{
    let historia = useHistory();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [content, setContent] =useState("")
    const [nameError, setNameError] = useState ("")
    const [emailError, setEmailError] = useState ("")
    const [contentError, setContentError] = useState ("")


    const Validacion = () => {
        if((utils.validacionName(name)  || utils.validacionEmail(email))||
            utils.validacionContent(content)) 
            {
            cargaInfo();
            }
        else{
            historia.push("/contact")
            } 
        }
    
    const cargaInfo = () => {
        setNameError(utils.validacionName(name));
        setEmailError(utils.validacionEmail(email));
        setContentError(utils.validacionContent(content));
    }

    return (
        <>
            <p>Haceme una pregunta! te respondere al correo asociado</p>
                    <form method='post' action='http://localhost:7000/contact' encType='application/json'>
                        <input type="text" id="name" name="name" placeholder="Ingresa tu nombre" onChange={e => setName (e.target.value)} value={name}/>
                        {nameError && (<p className="error">Verifique su nombre</p>)}

                        <input type="text" id="email" name="email" placeholder="Ingresa tu correo" onChange={e => setEmail (e.target.value)} value={email} />
                        {emailError && (<p className="error">Verifique correo</p>)}

                        <input type="text" id="content" name="content" placeholder="Ingresa tu pregunta" onChange={e => setContent (e.target.value)} value={content} />
                        {contentError && (<p className="error">Verifique su consulta</p>)}

                        <button id="send" onClick={Validacion}>Enviar</button>
                    </form>
        </>
    )
}