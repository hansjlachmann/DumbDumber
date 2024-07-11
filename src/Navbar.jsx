import React from 'react';
import './navbar.css'
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

<header className="css"></header>

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/roadmap">Roadmap</Link></li>
        <li><Link to="/stake">Stake</Link></li>
        <li><Link to="/burn">Burn</Link></li>
        <li><Link to="/tokenholders">Tokeholders</Link></li>            
        <li><Link to="/buy">Buy Tokens</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;