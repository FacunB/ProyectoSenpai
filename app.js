let horizontalGallery1 = ['assets/img/horizontal1/h1.jpg', 'assets/img/horizontal1/h2.jpg', 'assets/img/horizontal1/h3.jpg', 'assets/img/horizontal1/h4.jpg', 'assets/img/horizontal1/h5.jpg']
let horizontalGallery2 = ['assets/img/horizontal2/h2 (1).jpg', 'assets/img/horizontal2/h2 (2).jpg', 'assets/img/horizontal2/h2 (3).jpg', 'assets/img/horizontal2/h2 (4).jpg', 'assets/img/horizontal2/h2 (5).jpg']
let verticalGallery1 = ['assets/img/vertical1/v1 (1).jpg', 'assets/img/vertical1/v1 (2).jpg', 'assets/img/vertical1/v1 (3).jpg', 'assets/img/vertical1/v1 (4).jpg', 'assets/img/vertical1/v1 (5).jpg', 'assets/img/vertical1/v1 (6).jpg', 'assets/img/vertical1/v1 (7).jpg',]
let verticalGallery2 = ['assets/img/vertical2/v2 (1).jpg', 'assets/img/vertical2/v2 (2).jpg', 'assets/img/vertical2/v2 (3).jpg', 'assets/img/vertical2/v2 (4).jpg', 'assets/img/vertical2/v2 (5).jpg']


const gallery = document.getElementById('gallery')




function changeAlbum(album) {
    let htmlContentToAppend = "";
    //document.getElementById('gallery').innerHTML = '<img src='+horizontalGallery1[1] +'>'
    //document.getElementById('gallery').innerHTML = '<p> ' + album + '</p>'
    if (album == "1") {
        currentAlbum = horizontalGallery1;
        console.log(currentAlbum)
    } if (album == "2") {
        currentAlbum = horizontalGallery2;
        console.log(currentAlbum)
    } if (album == "3") {
        currentAlbum = verticalGallery1;
        console.log(currentAlbum)
    } if (album == "4") {
        currentAlbum = verticalGallery2;
        console.log(currentAlbum)
    }
    for (let i = 0; i < currentAlbum.length; i++) {
        let selectedalbum = currentAlbum[i];
        htmlContentToAppend += `
        <a href="${selectedalbum}"><img src="${selectedalbum}" alt="" class="imgstyle"></a>
        
        `
    }
    document.getElementById("gallery").innerHTML = htmlContentToAppend;

};

