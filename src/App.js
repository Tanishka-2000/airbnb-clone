import {useState, useEffect} from 'react';
import NavBar from './components/navbar/NavBar';
import ScrollBar from './components/scrollbar/ScrollBar';
import Container from './components/container/Container';
import Details from './components/details/Details';

function App() {
    const [data, setData] = useState([]);
    const [showDetails, setShowDetails] = useState(false);

    const [hotel, setHotel] = useState(null);
    const [userId, setUserId] = useState(null);

    async function changeData(name){
        const result = await getDataByName(name);
        for(const item of result){
            const result2 = await getDataByDestId(item.dest_id, item.dest_type);
            result2 && setData(prev => [...prev, ...result2]);
        }
    }
    function refreshScreen(name){
        setShowDetails(false);
        setData([]);
        changeData(name);
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
    function showHotelDetail(hotel){
        setShowDetails(true);
        setHotel(hotel)
    }
    function hideHotelDetail(){
        setShowDetails(false);
    }

    useEffect(() => {
        changeData('caves');
    },[]);

  return (
      <>
      <NavBar hideHotelDetail={hideHotelDetail} refreshScreen={refreshScreen} setUserId={setUserId}/>
      {showDetails ? <Details hotel={hotel} userId={userId}/> :
      <>
      <ScrollBar refreshScreen={refreshScreen}/>
      <Container data={data} showHotelDetail={showHotelDetail} userId={userId} />
      </>}
      </>
  );
  // return(<NavBar  hideHotelDetail={hideHotelDetail} refreshScreen={refreshScreen} setUserId={setUserId}/>)

}
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
    const response2 = await fetch('https://booking-com.p.rapidapi.com/v1/hotels/search?checkout_date='+ checkOut.toISOString().slice(0,10)+'&units=metric&dest_id='+destId+'&dest_type='+destType +'&locale=en-us&adults_number=2&order_by=popularity&filter_by_currency=INR&checkin_date='+ checkIn.toISOString().slice(0,10)+'&room_number=1',{
        headers: {
            'X-RapidAPI-Key': '1107a84eabmsh0c79d2680cb6d1cp1384edjsn1e7834c13e78',
            'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
        }
    });
    const result2 = await response2.json();
    console.log(result2.result);
    return result2.result;
}


export default App;
