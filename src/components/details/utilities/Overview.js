import {useState, useEffect} from 'react';

import Specials from './Specials';
import Amenities from './Amenities';
import Rooms from './Rooms';
import HotelForm from './HotelForm';

function Overview(props){
    const [desp, setDesp] = useState('');
    async function getHotelDescription(id){
        const response = await fetch('https://booking-com.p.rapidapi.com/v1/hotels/description?locale=en-gb&hotel_id='+id,{
               headers: {
                   'X-RapidAPI-Key': '1107a84eabmsh0c79d2680cb6d1cp1384edjsn1e7834c13e78',
                   'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
               }
           });
           const result = await response.json();
           setDesp(result.description);
    }
    useEffect(() => {
        getHotelDescription(props.hotelId);
    },[]);
    return(
        <div className='overview'>
            <div className='configuration'>
                <div className='big'>{props.data.split('<')[0]}</div>
                <p>{props.data.split(':')[1]}</p>
            </div>
            <Specials />
            <div className='description'>{desp}</div>
            <Rooms hotelImages={props.hotelImages}/>
            <Amenities hotelId={props.hotelId}/>
            <HotelForm price={props.price}/>
        </div>
    )
}
export default Overview;
