import {useState, useEffect} from 'react';

import './details.css';
import ImageGrid from './utilities/ImageGrid';
import Overview from './utilities/Overview';
import Reviews from './utilities/Reviews';
import app from '../firebase-config';
import { getFirestore , doc, updateDoc, arrayUnion} from "firebase/firestore";

function Details(props){
    const [images, setImages] = useState(null);
    // console.log(props.hotel);
    const db = getFirestore(app);
    async function getHotelImages(id){
        const response = await fetch('https://booking-com.p.rapidapi.com/v1/hotels/photos?locale=en-gb&hotel_id='+id,{
               headers: {
                   'X-RapidAPI-Key': '1107a84eabmsh0c79d2680cb6d1cp1384edjsn1e7834c13e78',
                   'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
               }
           });
           const result = await response.json();
           setImages(result);
    }
    async function addToFavoutite(){
        console.log('updating adding');
        await updateDoc(doc(db, 'users', props.userId), {
            favourite: arrayUnion(props.hotel.hotel_id),
        });
    }
    // async function removeFromFavoutite(){
    //     console.log('updating removing');
    //     await updateDoc(doc(db, 'users',  props.userId), {
    //         favourite: arrayRemove(props.hotel.hotel_id),
    //     });
    // }
    useEffect(() => {
        getHotelImages(props.hotel.hotel_id);
    },[]);

    return(
        <div className='details'>
            <div className='heading'>{props.hotel.hotel_name}, {props.hotel.address}, {props.hotel.country_trans}</div>
            <ImageGrid hotelImages={images} addToFavoutite={addToFavoutite}/>
            <Overview data={props.hotel.unit_configuration_label} hotelId={props.hotel.hotel_id} price={props.hotel.composite_price_breakdown} hotelImages={images}/>
            <Reviews hotelId={props.hotel.hotel_id}/>
        </div>
    )
}

export default Details;
