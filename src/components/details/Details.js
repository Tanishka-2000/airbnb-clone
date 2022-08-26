import './details.css';
import ImageGrid from './utilities/ImageGrid';
import Overview from './utilities/Overview';
import Reviews from './utilities/Reviews';

function Details(props){
    console.log(props.hotel);
    return(
        <div className='details'>
            <div className='heading'>{props.hotel.hotel_name}, {props.hotel.address}, {props.hotel.country_trans}</div>
            <ImageGrid hotelId={props.hotel.hotel_id}/>
            <Overview data={props.hotel.unit_configuration_label} hotelId={props.hotel.hotel_id}/>
            <Reviews hotelId={props.hotel.hotel_id}/>
        </div>
    )
}

export default Details;
