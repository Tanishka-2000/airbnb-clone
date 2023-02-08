 import '../details.css';
 
export function SkeletonImageGrid(){
  return(
    <div className='skeleton-image-grid'>
        <div className='image1'></div>
        <div className='image2'></div>
        <div className='image3'></div>
        <div className='image4'></div>
        <div className='image5'></div>
      </div>
  )
}

export function SkeletonReviewScore(){
  return(
      <div className='skeleton-review-score'>
        <div></div> <div></div> <div></div>
        <div></div> <div></div> <div></div>
      </div>
  )
}
export function SkeletonReviewData(){
  return(
    <div className='skeleton-review-hotel'>
      <div className='skeleton-review'>
        <div className='skeleton-username'></div>
        <div className='skeleton-comment'></div>
      </div>

      <div className='skeleton-review'>
        <div className='skeleton-username'></div>
        <div className='skeleton-comment'></div>
      </div>

      <div className='skeleton-review'>
        <div className='skeleton-username'></div>
        <div className='skeleton-comment'></div>
      </div>

      <div className='skeleton-review'>
        <div className='skeleton-username'></div>
        <div className='skeleton-comment'></div>
      </div>
    </div>
  )
}

export default function SkeletonDetailPage(){
  return(
    <div className='skeleton-detail'>
      <div className='skeleton-detail-header'></div>

      <div className='skeleton-image-grid'>
        <div className='image1'></div>
        <div className='image2'></div>
        <div className='image3'></div>
        <div className='image4'></div>
        <div className='image5'></div>
      </div>

      <div className='skeleton-overview'>
        <div className='skeleton-container'>
          <div className='skeleton-config'></div>

          <div className='skeleton-special'>
            <div></div>
            <div></div>
            <div></div>
          </div>

          <div className='skeleton-descp'></div>

          <div className='skeleton-room-images'>
            <div></div>
            <div></div>
          </div>

          <div className='skeleton-ameneties'>
            <div></div><div></div><div></div><div></div><div></div>
            <div></div><div></div><div></div><div></div><div></div>
          </div>
        </div>

        <div className='skeleton-hotel-form'></div>
      </div>

      <div className='skeleton-review-score'>
        <div></div><div></div><div></div>
        <div></div><div></div><div></div>
      </div>

      <div className='skeleton-review-hotel'>
        <div className='skeleton-review'>
          <div className='skeleton-username'></div>
          <div className='skeleton-comment'></div>
        </div>

        <div className='skeleton-review'>
          <div className='skeleton-username'></div>
          <div className='skeleton-comment'></div>
        </div>

        <div className='skeleton-review'>
          <div className='skeleton-username'></div>
          <div className='skeleton-comment'></div>
        </div>

        <div className='skeleton-review'>
          <div className='skeleton-username'></div>
          <div className='skeleton-comment'></div>
        </div>
      </div>
    </div>
  )
}