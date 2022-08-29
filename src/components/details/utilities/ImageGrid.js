// import {useState, useEffect} from 'react';
// import { doc, getDoc } from "firebase/firestore";

function ImageGrid(props){
    // const [favourite, setFavoutite] = useState(false);
    function addToFavoutite(){
        props.addToFavoutite();
    }
    // function removeFromFavoutite(){
    //     props.removeFromFavoutite();
    // }
    // async function isFavourite(){
    //     const docSnap = await getDoc(doc(props.db, 'users', props.userId));
    //     if(docSnap.data().favourite.includes(props.hotelId)) setFavoutite(true);
    // }
    // useEffect(() => {
    //     isFavourite();
    // });
    return(
        <div className='image-grid'>
        {props.hotelImages?.slice(0,5).map((image,i) => <div  key={i}><img src={image.url_max} alt={image.photo_id}/></div>)}
        <div className='like-btn' onClick={addToFavoutite}>&#9825;</div>

        </div>
    )
}
export default ImageGrid;

// <img src='./img2.jpg'/>
// <img src='./img3.jpg'/>
// <img src='./img4.jpg'/>
// <img src='./img5.jpg'/>

// const [images, setImages] = useState(null);
// async function getHotelImages(id){
//     const response = await fetch('https://booking-com.p.rapidapi.com/v1/hotels/photos?locale=en-gb&hotel_id='+id,{
//            headers: {
//                'X-RapidAPI-Key': '1107a84eabmsh0c79d2680cb6d1cp1384edjsn1e7834c13e78',
//                'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
//            }
//        });
//        const result = await response.json();
//        setImages(result);
// }
