import './navbar.css';

function NavBar(){
    return(
        <nav>
        <img src='airbnb-logo.png' alt="airbnb Logo" />
        <input type='text' placeholder='search' />
        <button className='signup-btn'>Sign Up</button>
        </nav>
    );
}
export default NavBar;
