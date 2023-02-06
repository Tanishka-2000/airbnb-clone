import app from '../firebase-config';
import { getFirestore , doc, updateDoc, arrayUnion} from "firebase/firestore";
// import { useState} from 'react';
import './container.css';
import Card from '../card/Card';

function Container(props){
    // const [favourite, setFavoutite] = useState([]);
    const db = getFirestore(app);
    async function addToFavoutite(id){
        if(!props.userId) return;
        console.log('updating adding');
        console.log(id);
        await updateDoc(doc(db, 'users', props.userId), {
            favourite: arrayUnion(id),
        });
    }
    // async function removeFromFavoutite(id){
    //     console.log('updating removing');
    //     await updateDoc(doc(db, 'users',  props.userId), {
    //         favourite: arrayRemove(id),
    //     });
    // }
    // async function isFavourite(){
    //     const docSnap = await getDoc(doc(props.db, 'users', props.userId));
    //     setFavoutite(docSnap.data().favourite);
    // }
    return(
        <div className='container'>
        {props.data.map((item,i) => <Card key={i} data={item} showHotelDetail={props.showHotelDetail} addToFavoutite={addToFavoutite}/>)}
        </div>
    )
}
export default Container;
// userId={props.userId} addToFavoutite={addToFavoutite} removeFromFavoutite={removeFromFavoutite} favourite={favourite}
