import React, { useEffect, useState } from 'react';
import '../../styles/album.css'
import Gallery from './Gallery.jsx';


export const Album =() => {

    const [albums, setAlbums] = useState([])
    const [gallery, setGallery] = useState([])


    useEffect(()=>{
        fetch("http://localhost:7000/albums")
            .then(data => data.json())
            .then(data => {console.log(data);
                            setAlbums(data);
                            })
            .catch(error => console.log(error))
    },[])
    
    useEffect(()=>{
        if(albums.length>0)
        setGallery(albums[0].album)
    },[albums])


    return(
        
        <section>
            <div className="scroll-area">
                <h2>Albums</h2>                                    
                {
                    albums.map((item, index)=>{
                        return(
                            
                                
                                <a href="#" 
                                style={{padding: "5px"}} 
                                onClick={()=>setGallery(item.album)}>
                                    {item.nombre}
                                </a>
                                
                            
                        )
                    })
                }            
                     
            </div>    

            <Gallery
            gallery = {gallery}
            />    
            
            
        </section>
       
    )
}

/*
<section>
        <div class="album-selection">
            <h2>Albums</h2>
            <form action="">
                <input type="radio" name="album" id="amarillo" value="1" checked onclick="changeAlbum(this.value)">
                <label for="amarillo">Amarillo</label>
                <input type="radio" name="album" id="azul" value="2" onclick="changeAlbum(this.value)">
                <label for="azul">Azul</label>
                <input type="radio" name="album" id="rojo" value="3" onclick="changeAlbum(this.value)">
                <label for="rojo">Rojo</label>
                <input type="radio" name="album" id="verde" value="4" onclick="changeAlbum(this.value)">
                <label for="verde">Verde</label>
            </form>
            
            
        </div>
        
        <div class="gallery" id="gallery">
            <a href="assets/img/horizontal1/h1.jpg"><img src="assets/img/horizontal1/h1.jpg" alt=""></a>
            <a href="assets/img/horizontal1/h2.jpg"><img src="assets/img/horizontal1/h2.jpg" alt=""></a>
            <a href="assets/img/horizontal1/h3.jpg"><img src="assets/img/horizontal1/h3.jpg" alt=""></a>
            <a href="assets/img/horizontal1/h4.jpg"><img src="assets/img/horizontal1/h4.jpg" alt=""></a>
            <a href="assets/img/horizontal1/h5.jpg"><img src="assets/img/horizontal1/h5.jpg" alt=""></a>
        </div>
    </section>
*/