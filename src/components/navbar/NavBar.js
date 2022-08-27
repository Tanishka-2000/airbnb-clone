import './navbar.css';

function NavBar(props){
    return(
        <nav>
        <img src='airbnb-logo.png' alt="airbnb Logo" onClick={props.hideHotelDetail}/>
        <input type='text' placeholder='search' />
        <button className='signup-btn'>Sign Up</button>
        </nav>
    );
}
export default NavBar;
