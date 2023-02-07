import { Suspense } from "react";
import {Await, defer, useLoaderData } from "react-router-dom";
import Container from "../components/container/Container";
import ScrollBar from "../components/scrollbar/ScrollBar";
import SkeletonHomePage from "../skeletonHomePage/skeletonHomePage";
export async function homeLoader(){
  const result = await getDataByName('beach');
  console.log({result});
    // let hotels = []
    // for(const item of result){
    //     const result2 = await getDataByDestId(item.dest_id, item.dest_type);
    //     hotels = result2 ? [...hotels, ...result2] : [...hotels];
    // }
    // let checkIn = new Date();
    // let checkOut = new Date(checkIn.getTime() + 5*24*60*60*1000);

  //   let response = await fetch('https://booking-com.p.rapidapi.com/v1/hotels/search?checkout_date='+ checkOut.toISOString().slice(0,10)+'&units=metric&dest_id='+result[0].dest_id+'&dest_type='+result[0].dest_type +'&locale=en-us&adults_number=2&order_by=popularity&filter_by_currency=USD&checkin_date='+ checkIn.toISOString().slice(0,10)+'&room_number=1',{
  //     headers: {
  //         'X-RapidAPI-Key': '1107a84eabmsh0c79d2680cb6d1cp1384edjsn1e7834c13e78',
  //         'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
  //     }
  // });

  let result2 = getDataByDestId(result[0].dest_id, result[0].dest_type);
  // const data = await response.json();
  console.log({result2});

  return defer({hotels: result2});
}

// data loading speed two slow  
export default function Home({userId}){
  const data = useLoaderData();
  // console.log({loader:hotels});
  return(
    <>
      <Suspense fallback={<SkeletonHomePage />}>
        <Await resolve={data.hotels}>
          {(hotels) => 
          <>
            <ScrollBar refreshScreen={null}/>
            <Container data={hotels} showHotelDetail={null} userId={userId} />
          </>
          }
        </Await>
      </Suspense>
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
  console.log({response, result});
  return result.result;
}