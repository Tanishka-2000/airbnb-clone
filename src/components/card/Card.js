import './card.css';

function Card(props){
    // let imgScr = props.imageUrl.split('?')[0];
 return (
     <div className='card'>
        <div className='image-div'><img src={props.imageUrl} alt='sometext'/></div>
        <p className='heading'>{props.name}, {props.country}<span className='rating'><span className="material-symbols-outlined star">star</span>{props.rating}</span></p>
        <p>2-7Jul</p>
        <p><span className='price'>{props.price} </span> night</p>
     </div>
 );
}
export default Card;
