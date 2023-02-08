import {useState, useEffect} from 'react';

function HotelForm(props){
    // const [indianExhangeRate, setIndianExhangeRate] = useState(0);
    // const [price, setPrice] = useState(0);

    let pricePerN = props.price.gross_amount_per_night.value;
    let currency = props.price.gross_amount_per_night.currency;
    // console.log(props);

    // async function getExchangeRate(curr){
    //     const response = await fetch('https://booking-com.p.rapidapi.com/v1/metadata/exchange-rates?locale=en-gb&currency='+currency,{
    //            headers: {
    //                'X-RapidAPI-Key': '1107a84eabmsh0c79d2680cb6d1cp1384edjsn1e7834c13e78',
    //                'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
    //            }
    //        });
    //        const result = await response.json();
    //        const rates = result.exchange_rates;
    //        for(let i = 58; i<62; i++){
    //           if( rates[i].currency === 'INR'){
    //               setIndianExhangeRate(rates[60].exchange_rate_buy);
    //               break;
    //           }
    //        }
    // }
    // useEffect(() => {
    //     // setPrice(props.price.gross_amount_per_night.)
    //     getExchangeRate();
    // },[]);

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
