
import {useState} from 'react';
import './card.css';
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function Card(props){
    const [isFavourite, setIsFavoutite] = useState(false);
    function handleClick(e){
        props.showHotelDetail(props.data);
    }
    function addToFavoutite(e){
        setIsFavoutite(prev => !prev);
        props.addToFavoutite(props.data.hotel_id);
        e.stopPropagation();
    }
    // function removeFromFavoutite(e){
    //     props.removeFromFavoutite(props.data.hotel_id);
    //     e.stopPropagation();
    // }
    // function isFavourite(){
    //     if(props.favourite.includes(props.data.hotel_id)) setFavoutite(true);
    // }
    // useEffect(() => {
    //     isFavourite();
    // });
    let price = props.data.composite_price_breakdown?.gross_amount_per_night;
    let checkin = new Date();
    let checkOut = new Date(checkin.getTime() + 5*24*60*60*1000);
    return (
        <div className='card' onClick={handleClick}>
            <div className='like-btn' onClick={addToFavoutite}>{isFavourite ? <i className="fa-solid fa-heart"></i> : <i className="fa-regular fa-heart"></i>}</div>
            <div className='image-div'><img src={props.data.max_photo_url} alt='sometext'/></div>'
            <p className='heading'>
                <span className='bold'>{props.data.city}, {props.data.country_trans}</span>
                <span className='rating'>
                    <span className='bold'>&#9733;</span>
                    {props.data.review_score}
                </span>
            </p>
            <p>{props.data.hotel_name}</p>
            <p>{`${checkin.getDate()}-${checkOut.getDate()} ${months[checkOut.getMonth()]}`}</p>
            <p><span className='price bold'>{props.data.soldout ? 'Sold Out' : `$${Math.round(price.value)} `}</span>night</p>
        </div>
    );
}
export default Card;
// 9829
// 	&#10084;hearts filled
