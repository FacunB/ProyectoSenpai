import React from 'react';
import { useState } from "react";


export const Form = () =>{
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [content, setContent] =useState("")
    return (
        <>
            <p>Haceme una pregunta! te respondere al correo asociado</p>
                    <form>
                        <input type="text" id="name" name="name" placeholder="Ingresa tu nombre" onChange={e => setName (e.target.value)} value={name}/>
                        <input type="text" id="lastName" name="lastName" placeholder="Ingresa tu apellido" onChange={e => setLastName (e.target.value)} value={lastName} />
                        <input type="text" id="email" name="email" placeholder="Ingresa tu correo" onChange={e => setEmail (e.target.value)} value={email} />
                        <input type="text" id="content" name="content" placeholder="Ingresa tu pregunta" onChange={e => setContent (e.target.value)} value={content} />

                        <button id="send">Enviar</button>
                    </form>
        </>
    )
}