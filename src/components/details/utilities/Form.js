
function Form(){
    return(
        <div className='hotel-form'>
            <div className='form-heading'>
                <div><span className='bold big'>&#8377;500 </span>night</div>
                <div><span className='bold'>* 4.9 </span><a href='#reviews' className='review-link'>19 reviews</a></div>
            </div>

            <form>
                <input type='date' placeholder='check-in'/>
                <input type='date' />
                <input type='number' />
                <button>Reserve</button>
            </form>
            <p>* you won't be charged yet</p>
            <div className='rate'>
                <div><span>&#8377; 500 X 5 nights</span><span>2500</span></div>
                <div><span>Cleaning fee</span><span>50</span></div>
                <div><span>Service fee</span><span>60</span></div>
            </div>
            <div className='total-rate'><span>Total before taxes</span><span>2610</span></div>
        </div>
    )
}

export default Form;
