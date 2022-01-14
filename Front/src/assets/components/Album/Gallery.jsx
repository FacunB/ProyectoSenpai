import React from 'react';


const Gallery = ({gallery}) =>{
    console.log(gallery)
   
    return (

        <div className="gallery" id="gallery">
            {
                    gallery.map((item, index)=>{
                        return(
                            
                               <a href={item}><img src={item} alt=""/></a>
                            
                        )
                    })
                } 
        </div>
    )
}

export default Gallery