// import {useState, useEffect} from 'react';
import { defer, useLoaderData, Await } from 'react-router-dom';

import './details.css';
// import ImageGrid from './utilities/ImageGrid';
// import Overview from './utilities/Overview';
// import Reviews from './utilities/Reviews';
import HotelForm from './utilities/HotelForm';
import { Suspense } from 'react';
import {SkeletonImageGrid, SkeletonReviewData, SkeletonReviewScore} from './utilities/skeletonDetailsPage';
// import app from '../fi rebase-config';
// import { getFirestore , doc, updateDoc, arrayUnion} from "firebase/firestore";

export async function hotelLoader({params}){
    const hotelImages = getImages(params.hotelId);
    const descp = getHotelDescription(params.hotelId);
    const reviewScore = getReviewScore(params.hotelId);
    const reviewData = getReviewData(params.hotelId);
    return defer({hotelImages, descp, reviewScore, reviewData});
}

function Details(){
    const data = useLoaderData();
    const hotel = JSON.parse(localStorage.getItem('hotel'));
    // const [images, setImages] = useState(null);
    // console.log(props.hotel);
    // const db = getFirestore(app);
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
    // useEffect(() => {
    //     getHotelImages(props.hotel.hotel_id);
    // },[]);

    // return(
    //     <div className='details'>
    //         <div className='heading'>{props.hotel.hotel_name}, {props.hotel.address}, {props.hotel.country_trans}</div>
    //         <ImageGrid hotelImages={images} addToFavoutite={addToFavoutite}/>
    //         <Overview data={props.hotel.unit_configuration_label} hotelId={props.hotel.hotel_id} price={props.hotel.composite_price_breakdown} hotelImages={images}/>
    //         <Reviews hotelId={props.hotel.hotel_id}/>
    //     </div>
    // )

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

export default Details;

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

function Specials(){
    return (
        <div className='specials'>
            <div>
            <span className="material-symbols-outlined">meeting_room</span>
                <div>
                    <span className='bold'>Self check-in</span>
                    <p>You can check in with the doorperson.</p>
                </div>
            </div>
            <div>
            <span className="material-symbols-outlined">location_on</span>
                <div>
                    <span className='bold'>Great location</span>
                    <p>90% of recent guests gave the location a 5-star rating.</p>
                </div>
            </div>
            <div>
            <span className="material-symbols-outlined">event</span>
                <div>
                    <span className='bold'>Free cancellation</span>
                </div>
            </div>
        </div>
    )
}

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

const icons = ['restaurant_menu','room_service','local_bar','fitness_center','smoke_free','local_laundry_service','dry_cleaning','iron','hot_tub','ac_unit','directions_car','mode_heat']

const amenities = ['Restaurant','Room service','Bar','Fitness centre','Non-smoking rooms','Laundry','Dry cleaning','Ironing','Hot Tub','Air Conditioning','Parking','room heating'];
function Amenities(){
    return(
        <div className='amenities'>
            <h2>What this place offers</h2>
            <div className='list'>
                {amenities.map((item,i) => <div key={i}><span className="material-symbols-outlined">{icons[i]}</span>{item}</div>)}
            </div>
        </div>
    )
}

function ReviewScore({reviewScores}){
    return(
        <div className='review-score'>
            {reviewScores.map((score,i) =>
            <div key={i}>
                <span className='question'>{score.localized_question}</span>
                <span>
                    <span className='bar-container'><span className='bar' style={{width: score.score*10 + '%'}}></span></span>
                    <span className='score'>{score.score}</span>
                </span>
            </div>
            )}
        </div>
    )
}

function ReviewData({reviewData}){
    return(
        <div className='review-hotel'>
            {reviewData.map((review,i) => (
                <div className='review-data' key={i}>
                    <div className='profile'>
                    <span className="material-symbols-outlined">account_circle</span>
                        <div>
                            <span className='name'>{review.author.name}</span>
                            <span>{(new Date(review.date)).toDateString().slice(3)}</span>
                        </div>
                    </div>
                    <div className='review-text'>
                        <p>{review.title}</p>
                        <p><span className='bold'>pros:</span> {review.pros}</p>
                        <p><span className='bold'>cons:</span> {review.cons}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}