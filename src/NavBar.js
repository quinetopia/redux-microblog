import React from "react"
import { Link } from "react-router-dom";


/**
 * Navigation header
 */
function NavBar() {

  return(
    <nav className="navbar navbar-light bg-info">
      <Link to="/" className="navbar-brand text-light">
        Microblog!
      </Link>
          <Link to="/" className="nav-link text-light">
            Blog
          </Link>
          <Link to="/new" className="nav-link text-light">
            New post
          </Link>
    </nav>
  );
}


export default NavBar;