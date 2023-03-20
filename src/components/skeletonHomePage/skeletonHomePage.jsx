import './styles.css';

export default function SkeletonHomePage(){
  return(
    
    <div className='skeleton'>
      <div className='skeleton-container'>

       { Array.from({length:10}).map((elem, i) => <SkeletonCard key={i}/>)}
        
      </div>
    </div>
  )
}

function SkeletonCard(){
  return(
    <div className='skeleton-card'>
      <div className='image'></div>
      <p></p>
      <p></p>
      <p className='price'></p>
    </div>
  )
}