import './styles.css'
import { Suspense } from "react";
import {Await, defer, useLoaderData } from "react-router-dom";
import Card from "../card/Card";
import ScrollBar from "../scrollbar/ScrollBar";
import SkeletonHomePage from "../skeletonHomePage/skeletonHomePage";
import async from 'async';

export async function homeLoader({params}){
  let name = params.placeName || 'beach';
  const result = await getDataByName(name);
  let hotels = getDataByDestId(result[0]);

  return defer({hotels});
}

export default function Home({userId}){
  const data = useLoaderData();
  
  return(
    <>
      <ScrollBar refreshScreen={null}/>
      
        <Suspense fallback={<SkeletonHomePage />}>
          <Await resolve={data.hotels}>
            {(hotels) =>    
              <div className='container'>      
                {hotels.map((item,i) => <Card key={item.hotel_id} data={item} userId={userId}/>) } 
              </div>
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
      console.log(result);
      return result;
}

// getting hotels by destination id
async function getDataByDestId(dest){
  let checkIn = new Date();
  let checkOut = new Date(checkIn.getTime() + 5*24*60*60*1000);

  const response = await fetch('https://booking-com.p.rapidapi.com/v1/hotels/search?checkout_date='+ checkOut.toISOString().slice(0,10)+'&units=metric&dest_id='+dest.dest_id+'&dest_type='+dest.dest_type +'&locale=en-us&adults_number=2&order_by=popularity&filter_by_currency=USD&checkin_date='+ checkIn.toISOString().slice(0,10)+'&room_number=1',{
      headers: {
          'X-RapidAPI-Key': '1107a84eabmsh0c79d2680cb6d1cp1384edjsn1e7834c13e78',
          'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
      }
  });
  
  const result = await response.json();
  return result.result;
}

// async function getTestData(){
//   const response = await fetch('https://booking-com.p.rapidapi.com/v1/hotels/search?checkout_date=2023-02-16&units=metric&dest_id=63&dest_type=country&locale=en-us&adults_number=2&order_by=popularity&filter_by_currency=INR&checkin_date=2023-02-11&room_number=1',{
//       headers: {
//           'X-RapidAPI-Key': '1107a84eabmsh0c79d2680cb6d1cp1384edjsn1e7834c13e78',
//           'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
//       }
//   });
//   const result = await response.json();
//   // console.log(result);
//   // console.log(result2.result);
//   return result.result;
// }