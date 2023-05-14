import '../css/NavBar.css'

function NavBar() {
    return(
      <div>
        <ul className="nav-list">
          <li className="nav-button"><a href="/" >Home</a></li>
          <li className="nav-button"><a href="/login">Log In</a></li>
          <li className="nav-button"><a href="/create_account">Create Account</a></li>
          <li className="nav-button"><a href="/cocktails_list">Cocktails list</a></li>
          <li className="nav-button"><a href="/cocktail">Cocktail recipe</a></li>
        </ul>
      </div>
    );
  };
  
  export default NavBar;