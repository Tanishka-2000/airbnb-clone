import './card.css';

function Card(props){

    function handleClick(e){
        // let hotelId = e.target.getAttribute('data-hotelid') || e.target.parentElement.getAttribute('data-hotelid') || e.target.parentElement.parentElement.getAttribute('data-hotelid');
        console.log('clicked: ');
        props.showHotelDetail(props.data);
    }

 return (
     <div className='card' data-hotelid={props.data.hotelid} onClick={handleClick}>
        <div className='image-div'><img src={props.data.max_photo_url} alt='sometext'/></div>
        <p className='heading'>{props.data.hotel_name}, {props.data.country_trans}<span className='rating'><span className="material-symbols-outlined star">star</span>{props.data.review_score}</span></p>
        <p>2-7Jul</p>
        <p><span className='price'>{props.data.soldout ? 'Sold Out' : props.data.price_breakdown.gross_price * .0054} </span> night</p>
     </div>
 );
}
export default Card;
