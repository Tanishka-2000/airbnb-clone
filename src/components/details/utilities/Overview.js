import Specials from './Specials';
import Amenities from './Amenities';
import Rooms from './Rooms';
import Form from './Form';

function Overview(){
    return(
        <div className='overview'>
            <div className='configuration'>
                <div className='big'>Houseboat hosted by Node</div>
                <p>2 guests1 . bathroom</p>
            </div>
            <Specials />
            <div className='description'></div>
            <Rooms />
            <Amenities />
            <Form />
        </div>
    )
}
export default Overview;
