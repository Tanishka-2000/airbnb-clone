// import {useEffect, useState} from 'react';

function Rooms(props) {

    return(
        <div className='rooms'>
            <h2>Where you'll stay</h2>
            <div className='room-images'>
                <div className='rooms-scrollbar'>
                {props.hotelImages?.slice(5,12).map((image,i) => <img src={image.url_max} key={i}/>)}
                </div>
            </div>
        </div>
    )
}
export default Rooms;
// <img src='./img1.jpg'/>
// <img src='./img2.jpg'/>
// <img src='./img3.jpg'/>
// <img src='./img4.jpg'/>
// <img src='./img5.jpg'/>

// const [roomImages, setRoomImages] = useState([]);
// async function getRoomList(id){
//     let checkIn = new Date().toISOString().slice(0,10);
//     let checkOut = new Date();
//     checkOut.setDate(checkOut.getDate() + 5);
//     checkOut = checkOut.toISOString().slice(0,10);
//     const response = await fetch('https://booking-com.p.rapidapi.com/v1/hotels/room-list?checkout_date='+ checkOut+'&units=metric&locale=en-us&adults_number_by_rooms=2,2&currency=INR&checkin_date='+checkIn+'&hotel_id='+id,{
//            headers: {
//                'X-RapidAPI-Key': '1107a84eabmsh0c79d2680cb6d1cp1384edjsn1e7834c13e78',
//                'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
//            }
//        });
//        const result = await response.json();
//        const rooms = result[0].rooms
//        for(let key in rooms){
//           setRoomImages(rooms[key].photos);
//           break;
//        }
// }
// useEffect(() => {
//     setTimeout(() => {
//         getRoomList(props.hotelId)
//     },1000);
// },[]);
