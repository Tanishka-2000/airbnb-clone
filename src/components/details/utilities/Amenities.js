
const icons = ['restaurant_menu','room_service','local_bar','fitness_center','smoke_free','local_laundry_service','dry_cleaning','iron','hot_tub','ac_unit','directions_car','mode_heat']
// const icons = {
//     'Restaurant': 'restaurant_menu',
//     'Room service': 'room_service',
//     'Bar': 'local_bar',
//     'Fitness centre': 'fitness_center',
//     'Non-smoking rooms': 'smoke_free',
//     'Laundry (additional charge)': 'local_laundry_service',
//     'Dry cleaning (additional charge)': 'dry_cleaning',
// }
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
export default Amenities;
//
// <div className='list'>
//     <div><span className="material-symbols-outlined">account_circle</span> Restaurant</div>
//     <div><span className="material-symbols-outlined">account_circle</span> Room Services</div>
//     <div><span className="material-symbols-outlined">account_circle</span> Bar</div>
//     <div><span className="material-symbols-outlined">account_circle</span> Fitness Center</div>
//     <div><span className="material-symbols-outlined">account_circle</span> Non-Smoking Rooms</div>
//     <div><span className="material-symbols-outlined">account_circle</span> Laundry</div>
//     <div><span className="material-symbols-outlined">account_circle</span> Dry cleaning</div>
//     <div><span className="material-symbols-outlined">account_circle</span> Hot Tub</div>
//     <div><span className="material-symbols-outlined">account_circle</span> Air Conditioning</div>
//     <div><span className="material-symbols-outlined">account_circle</span> Parking</div>
// </div>
