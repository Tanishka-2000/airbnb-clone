export default function ReviewData({reviewData}){
  return(
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
                      <p><span className='bold'>pros:</span> {review.pros}</p>
                      <p><span className='bold'>cons:</span> {review.cons}</p>
                  </div>
              </div>
          ))}
      </div>
  )
}