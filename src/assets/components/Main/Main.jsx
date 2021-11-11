import React from 'react';
import { Aboutme } from './Aboutme';
import { Contact } from './Contact';
import { Title } from './Title';
import { Mywork } from './Mywork';

export const Main = () =>{
    return(
        <div className="scroll-container">
            <Title/>
            <Aboutme/>
            <Mywork/>
            <Contact/>                                          
        </div> 
           
    )
}