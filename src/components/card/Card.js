import './card.css';

function Card(props){

    function handleClick(e){
        let hotelId = e.target.getAttribute('data-hotelid') || e.target.parentElement.getAttribute('data-hotelid') || e.target.parentElement.parentElement.getAttribute('data-hotelid');
        console.log('clicked: ' + hotelId);
    }

 return (
     <div className='card' data-hotelid={props.hotelid} onClick={handleClick}>
        <div className='image-div'><img src={props.imageUrl} alt='sometext'/></div>
        <p className='heading'>{props.name}, {props.country}<span className='rating'><span className="material-symbols-outlined star">star</span>{props.rating}</span></p>
        <p>2-7Jul</p>
        <p><span className='price'>{props.price * .0054} </span> night</p>
     </div>
 );
}
export default Card;
