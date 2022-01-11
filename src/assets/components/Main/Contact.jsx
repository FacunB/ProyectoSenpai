import React from "react";
import { useState } from "react";
import {Form} from './Contact/form'
import {Social} from './Contact/social'



export const Contact = () => {
    
    return (
        <div className="scroll-area">
            <div className="parallaximg3">
                <div className="ptext">
                    <h2 className="desktoptext" id="contact">Contacto</h2>
                </div>
            </div>
            <section>
                <h2 className="mobiletext">Contacto</h2>                
                    <Form/>
                    <Social/>                              
            </section> 
        </div>
    )
}