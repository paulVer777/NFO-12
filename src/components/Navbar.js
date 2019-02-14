import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__item">
        <Link to="/" className="navbar__link">Home</Link>
      </div>
      <div className="navbar__item">
        <Link className="navbar__link navbar__link--about" to="/about">About</Link>
      </div>
    </div>
  )
}
