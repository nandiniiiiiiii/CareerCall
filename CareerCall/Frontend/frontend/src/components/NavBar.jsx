import React from 'react'
import { Link } from 'react-router-dom';
import './Searchbar.css';

function NavBar() {
  return (
    <nav>
         <div className="topnav">
            <Link id="logo">Career Call</Link>
            <Link className="active" to="/"><b>Home</b></Link>
            <Link  className="great" to="/about"><b>About</b></Link>
            <Link className="good" to="/contact"><b>Contact</b></Link>
            <div className="topnav-right">
              <Link className="login" to="/signin">Login</Link>
              <Link className="register" to="/signup">Register</Link>
            </div>
          </div>

    </nav>
  )
}

export default NavBar
