
import './scrollbar.css';

function ScrollBar() {
    const names = ['Beaches','Amazing Pools', 'National Parks', 'Tiny Homes', 'Design', 'Camping','Cabins','Lakefront','arctic','Amazing views','caves','surfing',
    'Bed & Breakfast','farm','countryside','castles','mansions','iconic cities','Wind Mill','Golf','Sking'];
    const options = ['beach_access','pool','landscape','cottage','villa','camping','cabin','houseboat','ac_unit','balcony','hiking','surfing','brunch_dining',
    'agriculture','house','villa','domain','location_city','wind_power','golf_course','downhill_skiing'];
    return (
        <div className='wrapper'>
            <div className='scrollbar'>
                {options.map((opt,i) => (
                    <div key={i}>
                        <span className="material-symbols-outlined">{opt}</span>
                        <p>{names[i]}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default ScrollBar;
