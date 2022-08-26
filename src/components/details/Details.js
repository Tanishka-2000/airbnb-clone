import './details.css';
import ImageGrid from './utilities/ImageGrid';
import Overview from './utilities/Overview';
import Reviews from './utilities/Reviews';

function Details(props){

    return(
        <div className='details'>
            <div className='heading'>Turtle Bay HuaHin eco luxeTurt Villa in Lotus Bay</div>
            <ImageGrid />
            <Overview />
            <Reviews />
        </div>
    )
}

export default Details;
