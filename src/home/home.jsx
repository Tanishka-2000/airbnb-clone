import { defer, useLoaderData } from "react-router-dom";
import Container from "../components/container/Container";
export async function homeLoader(){
  const result = await getDataByName('beach');
    let hotels = []
    for(const item of result){
        const result2 = await getDataByDestId(item.dest_id, item.dest_type);
        hotels = result2 ? [...hotels, ...result2] : [...hotels];
    }
  return defer({hotels});
}

// data loading speed two slow  
export default function Home({userId}){
  const data = useLoaderData();
  console.log(data);
  return(
    <>
      <Container data={data} showHotelDetail={null} userId={userId} />
    </>
  )
}

// getting destination id by place names
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

// getting hotels by destination id
async function getDataByDestId(destId, destType){
  let checkIn = new Date();
  let checkOut = new Date(checkIn.getTime() + 5*24*60*60*1000);

  const response = await fetch('https://booking-com.p.rapidapi.com/v1/hotels/search?checkout_date='+ checkOut.toISOString().slice(0,10)+'&units=metric&dest_id='+destId+'&dest_type='+destType +'&locale=en-us&adults_number=2&order_by=popularity&filter_by_currency=USD&checkin_date='+ checkIn.toISOString().slice(0,10)+'&room_number=1',{
      headers: {
          'X-RapidAPI-Key': '1107a84eabmsh0c79d2680cb6d1cp1384edjsn1e7834c13e78',
          'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
      }
  });
  const result = await response.json();
  return result.result;
}