import {useState, useEffect} from 'react';
import NavBar from './components/navbar/NavBar';
import ScrollBar from './components/scrollbar/ScrollBar';
import Container from './components/container/Container';
import Details from './components/details/Details';

function App() {
    const [data, setData] = useState([]);
    const [showDetails, setShowDetails] = useState(false);
    const [hotel, setHotel] = useState(null);
    // async function changeData(name){
    //     const result = await getDataByName(name);
    //     for(const item of result){
    //         const result2 = await getDataByDestId(item.dest_id, item.dest_type);
    //         result2 && setData(prev => [...prev, ...result2]);
    //     }
    // }
    async function getTestData(){
        const response2 = await fetch('https://booking-com.p.rapidapi.com/v1/hotels/search?checkout_date=2022-10-01&units=metric&dest_id=99&dest_type=country&locale=en-us&adults_number=2&order_by=popularity&filter_by_currency=INR&checkin_date=2022-09-07&room_number=1',{
            headers: {
                'X-RapidAPI-Key': '1107a84eabmsh0c79d2680cb6d1cp1384edjsn1e7834c13e78',
                'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
            }
        });
        const result2 = await response2.json();
        console.log(result2.result);
        result2.result && setData([...result2.result]);
    }
    function showHotelDetail(hotel){
        setShowDetails(true);
        setHotel(hotel)
    }
    function hideHotelDetail(){
        setShowDetails(false);
    }
    useEffect(() => {
        getTestData();
    },[]);

  return (
      <>
      <NavBar hideHotelDetail={hideHotelDetail}/>
      {showDetails ? <Details hotel={hotel}/> :
      <>
      <ScrollBar getDataByName={getTestData}/>
      <Container data={data} showHotelDetail={showHotelDetail} />
      </>}
      </>
  );

}
// async function getData(){
//
//     const response = await fetch('https://booking-com.p.rapidapi.com/v1/hotels/locations?locale=en-us&name=tropical',{
//         headers: {
//             'X-RapidAPI-Key': '1107a84eabmsh0c79d2680cb6d1cp1384edjsn1e7834c13e78',
//             'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
//         }
//     });
//     const result = await response.json();
//
//
//     for(const item of result){
//         const response2 = await fetch('https://booking-com.p.rapidapi.com/v1/hotels/search?checkout_date=2022-10-01&units=metric&dest_id='+ item.dest_id+'&dest_type='+ item.dest_type +'&locale=en-us&adults_number=2&order_by=popularity&filter_by_currency=INR&checkin_date=2022-09-07&room_number=1',{
//             headers: {
//                 'X-RapidAPI-Key': '1107a84eabmsh0c79d2680cb6d1cp1384edjsn1e7834c13e78',
//                 'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
//             }
//         });
//         const result2 = await response2.json();
//         console.log(result2.result);
//         result2.result && setData(prev => [...prev, ...result2.result]);
//     }
// }
async function getDataByName(name){
    const response = await fetch('https://booking-com.p.rapidapi.com/v1/hotels/locations?locale=en-us&name='+name,{
            headers: {
                'X-RapidAPI-Key': '1107a84eabmsh0c79d2680cb6d1cp1384edjsn1e7834c13e78',
                'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
            }
        });
        const result = await response.json();
        return result;
}

async function getDataByDestId(destId, destType){
    let checkIn = new Date();
    let checkOut = new Date();
    checkOut.setDate(checkOut.getDate() + 5);
    const response2 = await fetch('https://booking-com.p.rapidapi.com/v1/hotels/search?checkout_date='+ formatDate(checkOut)+'&units=metric&dest_id='+destId+'&dest_type='+destType +'&locale=en-us&adults_number=2&order_by=popularity&filter_by_currency=INR&checkin_date='+ formatDate(checkIn)+'&room_number=1',{
        headers: {
            'X-RapidAPI-Key': '1107a84eabmsh0c79d2680cb6d1cp1384edjsn1e7834c13e78',
            'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
        }
    });
    const result2 = await response2.json();
    console.log(result2.result);
    return result2.result;
}
function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
}

function formatDate(date) {
    return [
    padTo2Digits(date.getDate()),
    padTo2Digits(date.getMonth() + 1),
    date.getFullYear(),
    ].join('-');
}


// async function getTestData(){
//     const response2 = await fetch('https://booking-com.p.rapidapi.com/v1/hotels/search?checkout_date=2022-10-01&units=metric&dest_id=99&dest_type=country&locale=en-us&adults_number=2&order_by=popularity&filter_by_currency=INR&checkin_date=2022-09-07&room_number=1',{
//         headers: {
//             'X-RapidAPI-Key': '1107a84eabmsh0c79d2680cb6d1cp1384edjsn1e7834c13e78',
//             'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
//         }
//     });
//     const result2 = await response2.json();
//     console.log(result2.result);
//     result2.result && setData([...result2.result]);
// }

export default App;
