import React from 'react';
import { useEffect } from 'react';
import { useState } from "react";

export const Questions = () => {
        const [question, setQuestion]= useState([]);


        useEffect(()=>{
            fetch("http://localhost:7000/contact")
                .then(data => data.json())
                .then(data =>{
                    setQuestion(data)
                })
                .catch(error=> console.log(error))

        },[])

        useEffect(()=>{
            console.log(question)
        },[question])
    return(
        <>
            <p>Tu consulta se ha realizado con exito!</p>
                <p>
                    {                        
                        question.map((item)=>{
                            return(
                                <p>{question[0].consulta}</p>

                            )
                        })
                    }
                </p>



        </>
    )

}