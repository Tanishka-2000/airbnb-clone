
import {useState} from 'react';
import db from '../firebase-config';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc} from "firebase/firestore";
import './navbar.css';
import { useNavigate, Form, Link} from 'react-router-dom';
import airbnbLogo from '../../airbnb-logo.png';

function NavBar(props){
    const [value, setValue] = useState('');
    const [isSigningUp, setIsSigningUp] = useState(false);
    const [isSigningIn, setIsSigningIn] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    function inputChange(e){
        setValue(e.target.value);
    }
    function handleClick(e){
        e.preventDefault();
        navigate(`places/${value}`)
    }
    function signUpUser(e){
        e.preventDefault();
        console.log('signing up user');

        let email = e.target[0].value;
        let password = e.target[1].value;

        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
            props.setUserId(user.uid);
            startUserDatabase(user.uid);
            setIsSigningUp(false);
            setIsLoggedIn(true);
          })
          .catch((error) => {
            console.log(error);
          });
    }
    function signInUser(e){
        e.preventDefault();
        console.log('sign in user');

        let email = e.target[0].value;
        let password = e.target[1].value;

        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);

            props.setUserId(user.uid);
            startUserDatabase(user.uid);
            setIsSigningIn(false);
            setIsLoggedIn(true);
          })
          .catch((error) => {
            console.log(error);
          });
    }
     async function startUserDatabase(uid){
         await setDoc(doc(db, 'users', uid),{
             favourite: [],
         });
     }

    function hideSignInUpDiv(){
        setIsSigningIn(false);
        setIsSigningUp(false);
    }
    return(
        <nav>
        <Link to='/' ><img src={airbnbLogo} alt="airbnb Logo" onClick={props.hideHotelDetail}/></Link>
        <form onSubmit={handleClick}>
            <input type='text' placeholder='Search for AnyWhere' value={value} onChange={inputChange}/>
            <div className='search-btn'><span className="material-symbols-outlined">search</span></div>
        </form>

        <div className='signup-btn-group'>
            {isLoggedIn ?
                <Form action='favourite' method='post' className='like-btn-form'>
                <input type='hidden' name='userId' value={props.userId || ''} />
                <button><i className="fa-solid fa-heart"></i></button>
                </Form>
            :
            <>
            <button className='signup-btn' onClick={() => { setIsSigningIn(false);setIsSigningUp(true)}}>Sign Up</button>
            <button className='signup-btn' onClick={() =>{ setIsSigningUp(false);setIsSigningIn(true)}}>Sign In</button>
            </>
        }
            <span className="material-symbols-outlined">account_circle</span>
        </div>
            {
            (isSigningUp || isSigningIn) &&
            (<div className='sign-up-div'>
                <span className="material-symbols-outlined close" onClick={hideSignInUpDiv}>close</span>
                <h1>{isSigningIn ? 'Sign In' : 'Sign Up'}</h1>
                <form onSubmit={isSigningUp ? signUpUser : signInUser}>
                    <div className='input-div'>
                        <input id='email' type='email' placeholder=' '/>
                        <label htmlFor='email'>Email</label>
                    </div>
                    <div className='input-div'>
                        <input id='password' type='password' placeholder=' ' minLength='6'/>
                        <label htmlFor='password'>Password</label>
                    </div>
                    <button type='submit'>{isSigningIn ? 'Sign In' : 'Sign Up'}</button>
                </form>
            </div>
            )}
    </nav>
    );
}
export default NavBar;
// <h1>Or</h1>
// <div className='sign-in-btns'>
//     <button>Sign In With Google<img src='google-logo.png'/></button>
//     <button>Sign In With Facebook<img src='facebook-logo.png' /></button>
// </div>
