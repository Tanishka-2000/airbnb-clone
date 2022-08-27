import {useState, useEffect} from 'react';

function Reviews(props){
    const [reviewScores, setReviewScores] = useState([]);
    const [reviewData, setReviewData] = useState([]);

    async function getReviewScore(id){
        const response = await fetch('https://booking-com.p.rapidapi.com/v1/hotels/review-scores?locale=en-gb&hotel_id='+id,{
               headers: {
                   'X-RapidAPI-Key': '1107a84eabmsh0c79d2680cb6d1cp1384edjsn1e7834c13e78',
                   'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
               }
           });
           const result = await response.json();
           console.log(result.score_breakdown[0]);
           setReviewScores(result.score_breakdown[0].question);
    }

    async function getReviewData(id){
        const response = await fetch('https://booking-com.p.rapidapi.com/v1/hotels/reviews?sort_type=SORT_MOST_RELEVANT&locale=en-gb&hotel_id='+id,{
               headers: {
                   'X-RapidAPI-Key': '1107a84eabmsh0c79d2680cb6d1cp1384edjsn1e7834c13e78',
                   'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
               }
           });
           const result = await response.json();
           console.log(result.result);
           setReviewData(result.result);
    }

    useEffect(() => {
        setTimeout(() => {
            getReviewScore(props.hotelId);
            getReviewData(props.hotelId);
        },1000);
    },[]);

    return (
        <div id='reviews'>
        <h2>&#9733; 9.0 <span className='light'>23 reviews</span></h2>
            <div className='review-score'>
                {reviewScores.map((score,i) =>
                <div key={i}>
                    <span className='question'>{score.localized_question}</span>
                    <span>
                        <span className='bar-container'><span className='bar' style={{width: score.score*10 + '%'}}></span></span>
                        <span className='score'>{score.score}</span>
                    </span>
                </div>
                )}
            </div>
            <div className='review-hotel'>
            {reviewData.map((review,i) => (
                <div className='review-data' key={i}>
                    <div className='profile'>
                    <span className="material-symbols-outlined">account_circle</span>
                        <div>
                            <span className='name'>{review.author.name}</span>
                            <span>{(new Date(review.date)).toDateString().slice(3)}</span>
                        </div>
                    </div>
                    <div className='review-text'>
                        <p>{review.title}</p>
                        <p>{review.pros}</p>
                        <p>{review.cons}</p>
                    </div>
                </div>
            ))}
            </div>
        </div>
    );
}

export default Reviews;
