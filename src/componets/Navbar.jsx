import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../assets/pngegg.png'; // Adjust the path as needed

function Navbar() {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  return (
    <header>
      <div className="logo">
        <img width={'100px'} src={logo} alt="Logo" />
      </div>
      <nav className={isNavVisible ? 'visible' : ''}>
        <ul>
          <li>Home</li>
          <li>Projects</li>
          <li>Skills</li>
          <li>Contacts</li>
        </ul>
        </nav>
      <button className="hamburger" onClick={toggleNav} aria-label="Toggle navigation">
        {isNavVisible ? '✕' : '☰'} {/* Toggle between hamburger and close icon */}
      </button>
    </header>
  );
}

export default Navbar;