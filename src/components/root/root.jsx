// import './styles.css';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../navbar/NavBar';
// import ScrollBar from '../components/scrollbar/ScrollBar';

export default function Root(){
  const [userId, setUserId] = useState(null);

  return(
    <>
      <NavBar setUserId={setUserId} userId={userId}/>
      <Outlet userId={userId}/>
    </>
  );
}