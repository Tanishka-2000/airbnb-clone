// import {useState, useEffect} from 'react';

function ImageGrid(props){
    return(
        <div className='image-grid'>
        {props.hotelImages?.slice(0,5).map((image,i) => <div  key={i}><img src={image.url_max}/></div>)}
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
