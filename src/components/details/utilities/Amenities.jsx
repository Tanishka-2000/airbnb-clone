const icons = ['restaurant_menu','room_service','local_bar','fitness_center','smoke_free','local_laundry_service','dry_cleaning','iron','hot_tub','ac_unit','directions_car','mode_heat'];
const amenities = ['Restaurant','Room service','Bar','Fitness centre','Non-smoking rooms','Laundry','Dry cleaning','Ironing','Hot Tub','Air Conditioning','Parking','room heating'];
export default function Amenities(){
    return(
        <div className='amenities'>
            <h2>What this place offers</h2>
            <div className='list'>
                {amenities.map((item,i) => <div key={i}><span className="material-symbols-outlined">{icons[i]}</span>{item}</div>)}
            </div>
        </div>
    )
}