import './container.css';
import Card from '../card/Card';

function Container(props){

    return (
        <div className='container'>
        {props.data.map(item => (
            <Card key={item.hotel_id}
                hotelId={item.hotel_id}
                imageUrl={item.max_photo_url}
                name={item.hotel_name}
                country={item.country_trans}
                rating={item.review_score}
                price={item.soldout || item.price_breakdown.gross_price} />
        ))}
        </div>
    )
}
export default Container;
