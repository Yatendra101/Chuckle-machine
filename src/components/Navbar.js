import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <h1>Chuckle Machine</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/scripts">Generate Scripts</Link></li>
        <li><Link to="/videos">Generate Videos</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
