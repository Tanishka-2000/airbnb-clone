export default function Rooms(props) {
    return(
        <div className='rooms'>
            <h2>Where you'll stay</h2>
            <div className='room-images'>
                <div className='rooms-scrollbar'>
                {props.hotelImages?.slice(5,12).map((image,i) => <img src={image.url_max} key={i}/>)}
                </div>
            </div>
        </div>
    )
}