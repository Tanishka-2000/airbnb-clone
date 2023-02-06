import {useState} from 'react';
// import { doc, getDoc } from "firebase/firestore";

function ImageGrid(props){
    const [isFavourite, setIsFavoutite] = useState(false);
    function addToFavoutite(){
        setIsFavoutite(prev => !prev);
        props.addToFavoutite();
    }
    // function removeFromFavoutite(){
    //     props.removeFromFavoutite();
    // }
    // async function isFavourite(){
    //     const docSnap = await getDoc(doc(props.db, 'users', props.userId));
    //     if(docSnap.data().favourite.includes(props.hotelId)) setFavoutite(true);
    // }
    // useEffect(() => {
    //     isFavourite();
    // });
    return(
        <div className='image-grid'>
        {props.hotelImages?.slice(0,5).map((image,i) => <div  key={i}><img src={image.url_max} alt={image.photo_id}/></div>)}
        <div className='like-btn' onClick={addToFavoutite}>{isFavourite ? <i className="fa-solid fa-heart"></i> : <i className="fa-regular fa-heart"></i>}</div>

        </div>
    )
}
export default ImageGrid;