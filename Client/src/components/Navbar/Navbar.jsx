import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h1>Grocery Management System</h1>
      <ul>
        <li>Home</li>
        <li>Groceries</li>
        <li>Summary</li>
      </ul>
    </nav>
  );
}

export default Navbar;
