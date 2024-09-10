import React from "react";
import './Header.css';

const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="logo"><img src="Landing page.png"alt="logo"></img></div>
        <ul className="nav-links">
          <li><a href="#features">Features</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
