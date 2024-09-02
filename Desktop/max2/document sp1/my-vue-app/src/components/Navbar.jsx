import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/create">Create Collection</Link></li>
        <li><Link to="/view">View Collection</Link></li>
        <li><Link to="/upload">Upload File</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
