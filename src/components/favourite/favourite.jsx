import './styles';
// import Card from '../card/Card';
import { doc, getDoc } from "firebase/firestore";
import db from '../firebase-config';
import { useActionData } from 'react-router-dom';

export async function favouriteAction({request}){
  const formData = await request.formData();
  const docRef = doc(db, "users", formData.get('userId') );
  const docSnap = await getDoc(docRef);
  
  if (docSnap.exists()) return docSnap.data();
  else return null;
}

export default function Favourite(){
  const hotels = useActionData();
  console.log(hotels);

  return(<h1>Favourite</h1>
    // hotels.map(hotel => <Card key={hotel.hotel_id} data={hotel} userId={userId}/>)
  )
}