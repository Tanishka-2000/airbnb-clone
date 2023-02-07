export default function ReviewScore({reviewScores}){
  return(
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
  )
}