import React from 'react';

import { Facebook } from 'react-feather';
import { Instagram } from 'react-feather';
import { Twitter } from 'react-feather';


export const Social = () =>{
    return( 
    <>
        <p>Podes encontrarme por mis redes:</p>
                <div className="iconcontainer">
                    <div className="icons">
                        <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/El.facu.xB">
                            <Facebook></Facebook>
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/facunb/">
                            <Instagram></Instagram>
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="No hay xd">
                            <Twitter></Twitter>
                        </a>
                    </div>
                </div>
    </>
    )
}