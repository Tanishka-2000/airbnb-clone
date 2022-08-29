import app from '../firebase-config';
import { getFirestore , doc, updateDoc, arrayUnion, arrayRemove} from "firebase/firestore";
import './container.css';
import Card from '../card/Card';

function Container(props){
    const db = getFirestore(app);
    async function addToFavoutite(id){
        console.log('updating adding');
        console.log(id);
        await updateDoc(doc(db, 'users', props.userId), {
            favourite: arrayUnion(id),
        });
    }
    async function removeFromFavoutite(id){
        console.log('updating removing');
        await updateDoc(doc(db, 'users',  props.userId), {
            favourite: arrayRemove(id),
        });
    }
    return(
        <div className='container'>
        {props.data.map((item,i) => <Card key={i} data={item} showHotelDetail={props.showHotelDetail} userId={props.userId} addToFavoutite={addToFavoutite} removeFromFavoutite={removeFromFavoutite}/>)}
        </div>
    )
}
export default Container;
