import './styles.css';
import { useState } from 'react';
import NavBar from '../components/navbar/NavBar';
import ScrollBar from '../components/scrollbar/ScrollBar';

export default function Root(){
  const [userId, setUserId] = useState(null);

  return(
    <>
      <NavBar hideHotelDetail={null} refreshScreen={null} setUserId={setUserId}/>
      <ScrollBar refreshScreen={null}/>
    </>
  );
}