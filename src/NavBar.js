import React from 'react'
import { NavLink } from 'react-router-dom';

function NavBar() {
  const linkStyles = {
    width: "60px",
    padding: "9px",
    paddingRight: "34px",
    margin: "20px 100px 6px",
    textDecoration: "none",
    fontSize: "24px",
    color: "white",
    borderRadius: "6px",
  };
    return (
      
    <div className="navbar">
      <NavLink
        to="/"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Home
      </NavLink>
      <NavLink to="/search">Search</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/signup">Sign</NavLink>
    </div>
  );
}

export default NavBar