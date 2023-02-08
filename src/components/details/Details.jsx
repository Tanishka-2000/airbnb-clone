import { defer, useLoaderData, Await } from 'react-router-dom';
import './details.css';
import HotelForm from './utilities/HotelForm';
import Amenities from './utilities/Amenities';
import Specials from './utilities/Specials';
import ReviewData from './utilities/reviewdata';
import ReviewScore from './utilities/reviewScore';
import Rooms from './utilities/Rooms';
import { Suspense } from 'react';
import {SkeletonImageGrid, SkeletonReviewData, SkeletonReviewScore} from './utilities/skeletonDetailsPage';
// import async from 'async';
// import app from '../firebase-config';
// import { getFirestore , doc, updateDoc, arrayUnion} from "firebase/firestore";

export async function hotelLoader({params}){

    const hotelImages = getImages(params.hotelId);
    const descp = getHotelDescription(params.hotelId);
    const reviewScore = getReviewScore(params.hotelId);
    const reviewData = getReviewData(params.hotelId);

    // const result = async.parallelLimit({
    //     hotelImages: async function(cb){
    //         let r = await getImages(params.hotelId);
    //     }
    // })
    return defer({hotelImages, descp, reviewScore, reviewData});
}

export default function Details(){
    const data = useLoaderData();
    const hotel = JSON.parse(localStorage.getItem('hotel'));

    // const db = getFirestore(app);

    // async function addToFavoutite(){
    //     console.log('updating adding');
    //     await updateDoc(doc(db, 'users', props.userId), {
    //         favourite: arrayUnion(props.hotel.hotel_id),
    //     });
    // }
    // async function removeFromFavoutite(){
    //     console.log('updating removing');
    //     await updateDoc(doc(db, 'users',  props.userId), {
    //         favourite: arrayRemove(props.hotel.hotel_id),
    //     });
    // }


    return(
        
        <div className='details'>
            <div className='heading'>{hotel.hotel_name}, {hotel.address}, {hotel.country_trans}</div>
            <Suspense fallback={<SkeletonImageGrid />}>
                <Await resolve={data.hotelImages}>
                    {(resolvedImages) => 
                    <div className='image-grid'>
                        {resolvedImages?.slice(0,5).map((image,i) => <div  key={i}><img src={image.url_max} alt={image.photo_id}/></div>)}
                    </div>
                    }
                </Await>
            </Suspense>

            <div className='overview'>
                <div className='configuration'>
                    <div className='big'>{hotel.unit_configuration_label.split('<')[0]}</div>
                    <p>{hotel.unit_configuration_label.split(':')[1]}</p>
                </div>
                <Specials />

                <Suspense fallback={<div className='skeleton-descp'></div>}>
                    <Await resolve={data.descp}>
                        {(resolvedDesp) => <div className='description'>{resolvedDesp}</div> }                  
                    </Await>
                </Suspense>
                
                <Suspense fallback={<div className='skeleton-room-images'><div></div><div></div></div>}>
                    <Await resolve={data.hotelImages}>
                        {(resolvedImages) => 
                            <Rooms hotelImages={resolvedImages}/>
                        }
                    </Await>
                </Suspense>

                <Amenities/>
                <HotelForm price={hotel.composite_price_breakdown}/>
            </div>
            <div id='reviews'>
                <h2>&#9733; 9.0 <span className=''>23 reviews</span></h2>
            
                <Suspense fallback={<SkeletonReviewScore />}>
                    <Await resolve={data.reviewScore}>
                        {(resolvedScore) =>
                            <ReviewScore reviewScores={resolvedScore}/>
                        }
                    </Await>
                </Suspense>

                <Suspense fallback={<SkeletonReviewData />}>
                    <Await resolve={data.reviewData}>
                        {(resolvedData) =>
                            <ReviewData reviewData={resolvedData}/>
                        }
                    </Await>
                </Suspense>
            </div>            
        </div> 
        
    )
}

// export default function Details(){
//     const data = useLoaderData();
//     const hotel = localStorage.getItem('hotel');
//     return(
//         <Suspense fallback={<SkeletonDetailPage />}>
//             <Await resolve={data}>
//                 <div className='details'>
//                     <div className='heading'>{hotel.hotel_name}, {hotel.address}, {hotel.country_trans}</div>

//                     {(data) => 
//                         <div className='image-grid'>
//                             {data.hotelImages?.slice(0,5).map((image,i) => <div  key={i}><img src={image.url_max} alt={image.photo_id}/></div>)}
//                         </div>
//                     }

//                     <div className='overview'>
//                         <div className='configuration'>
//                             <div className='big'>{hotel.unit_configuration_label.split('<')[0]}</div>
//                             <p>{hotel.unit_configuration_label.split(':')[1]}</p>
//                         </div>

//                         <Specials />
//                         {(data) => <div className='description'>{data.desp}</div> } 
//                         {(data) => <Rooms hotelImages={data.hotelImages}/> }
//                         <Amenities/>
//                         <HotelForm price={hotel.composite_price_breakdown}/>
//                     </div>

//                     <div className='reviews'>
//                         <h2>&#9733; 9.0 <span className=''>23 reviews</span></h2>
//                         {(data) => <ReviewScore reviewScores={data.reviewScore}/>}
//                         {(data) => <ReviewData reviewData={data.reviewData}/>}
//                     </div>

//                 </div> 
//             </Await>
//         </Suspense>
//     )
// }

async function getImages(id){ //ImageGrid
    const response = await fetch('https://booking-com.p.rapidapi.com/v1/hotels/photos?locale=en-gb&hotel_id='+id,{
        headers: {
            'X-RapidAPI-Key': '1107a84eabmsh0c79d2680cb6d1cp1384edjsn1e7834c13e78',
            'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
        }
    });
    const result = await response.json();
    return result;
}

async function getHotelDescription(id){//Overview
    const response = await fetch('https://booking-com.p.rapidapi.com/v1/hotels/description?locale=en-gb&hotel_id='+id,{
           headers: {
               'X-RapidAPI-Key': '1107a84eabmsh0c79d2680cb6d1cp1384edjsn1e7834c13e78',
               'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
           }
       });
       const result = await response.json();
       return result.description;
}

async function getReviewScore(id){
    const response = await fetch('https://booking-com.p.rapidapi.com/v1/hotels/review-scores?locale=en-gb&hotel_id='+id,{
           headers: {
               'X-RapidAPI-Key': '1107a84eabmsh0c79d2680cb6d1cp1384edjsn1e7834c13e78',
               'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
           }
       });
       const result = await response.json();
    return result.score_breakdown[0].question;
}

async function getReviewData(id){
    const response = await fetch('https://booking-com.p.rapidapi.com/v1/hotels/reviews?sort_type=SORT_MOST_RELEVANT&locale=en-gb&hotel_id='+id,{
           headers: {
               'X-RapidAPI-Key': '1107a84eabmsh0c79d2680cb6d1cp1384edjsn1e7834c13e78',
               'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
           }
       });
       const result = await response.json();
    return result.result;
}