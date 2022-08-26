
// const icons = ['restaurant_menu','room_service','local_bar','fitness_center','smoke_free','local_laundry_service','dry_cleaning','iron','hot_tub','ac_unit','directions_car',mode_heat]
// const icons = {
//     'Restaurant': 'restaurant_menu',
//     'Room service': 'room_service',
//     'Bar': 'local_bar',
//     'Fitness centre': 'fitness_center',
//     'Non-smoking rooms': 'smoke_free',
//     'Laundry (additional charge)': 'local_laundry_service',
//     'Dry cleaning (additional charge)': 'dry_cleaning',
// }

function Amenities(){
    return(
        <div className='amenities'>
            <h2>What this place offers</h2>
            <div className='list'>
                <div>⚫ Restaurant</div>
                <div>⚫ Room Services</div>
                <div>⚫ Bar</div>
                <div>⚫ Fitness Center</div>
                <div>⚫ Non-Smoking Rooms</div>
                <div>⚫ Laundry</div>
                <div>⚫ Dry cleaning</div>
                <div>⚫ Hot Tub</div>
                <div>⚫ Air Conditioning</div>
                <div>⚫ Parking</div>
            </div>
        </div>
    )
}
export default Amenities;
