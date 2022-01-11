import React from 'react';


const Gallery = ({gallery}) =>{
   
    return (

        <div className="gallery" id="gallery">
            {
                    gallery.map((item, index)=>{
                        return(
                            
                               <a href={item.imgSrc}><img src={item.imgSrc} alt=""/></a>
                            
                        )
                    })
                } 
        </div>
    )
}

export default Gallery