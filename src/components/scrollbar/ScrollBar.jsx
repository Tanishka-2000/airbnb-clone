
import { useNavigate } from 'react-router-dom';
import './scrollbar.css';

function ScrollBar(props) {
    const navigate = useNavigate();
    const names = ['Beaches','Amazing Pools', 'National Parks', 'Tiny Homes', 'Design', 'Camping','Cabins','Lakefront','arctic','Amazing views','caves','surfing',
    'Bed & Breakfast','farm','countryside','castles','mansions','iconic cities','Wind Mill','Golf','Sking'];
    const options = ['beach_access','pool','landscape','cottage','villa','camping','cabin','houseboat','ac_unit','balcony','hiking','surfing','brunch_dining',
    'agriculture','house','villa','domain','location_city','wind_power','golf_course','downhill_skiing'];

    function handleClick(e){
        let name = e.target.getAttribute('data-name') || e.target.parentElement.getAttribute('data-name');
        console.log(name);
        navigate(`places/${name}`)
        // props.refreshScreen(name);
    }

    return (
        <div className='wrapper'>
            <div className='scrollbar'>
                {options.map((opt,i) => (
                    <div key={i} data-name={names[i]} onClick={handleClick}>
                        <span className="material-symbols-outlined">{opt}</span>
                        <p>{names[i]}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default ScrollBar;
