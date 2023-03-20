function HotelForm(props){

    let pricePerN = props.price.gross_amount_per_night.value;

    function handleSubmit(e){
        e.preventDefault();
        console.log(e);
    }
    return(
        <div className='hotel-form'>
            <div className='form-heading'>
                <div><span className='bold big'>&#8377; {Math.round(pricePerN)} </span>night</div>
                <div><span className='bold'>* 4.9 </span><a href='#reviews' className='review-link'>19 reviews</a></div>
            </div>

            <form onSubmit={handleSubmit}>
                <input type='date'/>
                <input type='date' />
                <input type='number' placeholder='GUESTS'/>
                <button type='submit'>Reserve</button>
            </form>
            <p>* you won't be charged yet</p>
            <div className='rate'>
                <div><span>&#8377; {Math.round(pricePerN)} X 5 nights</span><span>&#8377; {Math.round(pricePerN)*5}</span></div>
                <div><span>Cleaning fee</span><span>0</span></div>
                <div><span>Service fee</span><span>0</span></div>
            </div>
            <div className='total-rate'><span>Total before taxes</span><span>&#8377; {Math.round(pricePerN) * 5}</span></div>
        </div>
    )
}

export default HotelForm;
