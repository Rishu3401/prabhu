import React from 'react';
import './Header.css';
function Header() {
  return (
    <header className="header">
      <h1>Space Philic</h1>
      <nav>
        <ul>
          <li>
            <div className="nav-link">
              <a href="#products">Products</a>
            </div>
          </li>
          <li>
            <div className="nav-link">
              <a href="#about">About Us</a>
            </div>
          </li>
          <li>
            <div className="nav-link">
              <a href="#contact">Contact</a>
            </div>
          </li>
          <li>
            <div className="nav-link">
              <a href="#team">Team</a>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;