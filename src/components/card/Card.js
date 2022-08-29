
import {useState} from 'react';
import './card.css';

function Card(props){
    const [favourite, setFavoutite] = useState(false);
    function handleClick(e){
        props.showHotelDetail(props.data);
    }
    function addToFavoutite(e){
        setFavoutite(true);
        props.addToFavoutite(props.data.hotel_id);
        e.stopPropagation();
    }
    function removeFromFavoutite(e){
        setFavoutite(false);
        props.removeFromFavoutite(props.data.hotel_id);
        e.stopPropagation();
    }
 let price = props.data.composite_price_breakdown?.gross_amount_per_night;
 return (
     <div className='card' onClick={handleClick}>
        {favourite ? <div className='like-btn' onClick={removeFromFavoutite}>&#10084;</div> : <div className='like-btn' onClick={addToFavoutite}>&#9825;</div>}
        <div className='image-div'><img src={props.data.max_photo_url} alt='sometext'/></div>
        <p className='heading'>{props.data.hotel_name}, {props.data.country_trans}<span className='rating'>&#9733; {props.data.review_score}</span></p>
        <p>2-7Jul</p>
        <p><span className='price'>{props.data.soldout ? 'Sold Out' : price.value + '' + price.currency}</span>per night</p>
     </div>
 );
}
export default Card;
// 9829
// 	&#10084;hearts filled
