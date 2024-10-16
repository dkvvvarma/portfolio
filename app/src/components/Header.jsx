import React, { useState } from "react";
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <h1 className="title">DKVV VARMA's Portfolio</h1>
      
      {/* Navigation Links */}
      <nav className={`nav ${menuOpen ? "active" : ""}`}>
        <a href="/" className="navLink">ABOUT ME</a>
        <a href="/resume" className="navLink">RESUME</a>
        <a href="/https://blog.dkvv.live" className="navLink">BLOG</a>
        <a href="/certifications" className="navLink activeNavLink">CERTIFICATIONS</a>
      </nav>
      
      {/* Hamburger Icon */}
      <div className="hamburger" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Styles */}
      <style jsx>{`
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px;
          background-color: #1a202c;
          position: relative;
          flexWrap:'wrap'
        }
        .title {
          font-size: 24px;
          font-weight: bold;
          color: white;
        }
        .nav {
          display: flex;
          gap: 20px;
        }
        .navLink {
          color: white;
          text-decoration: none;
          transition: color 0.3s;
        }
        .navLink:hover {
          color: #ff4b4b;
        }
        .activeNavLink {
          color: #ff4b4b;
        }
        .hamburger {
          display: none;
          font-size: 24px;
          color: white;
          cursor: pointer;
        }

        /* Mobile Styles */
        @media (max-width: 768px) {
          .nav {
            display: none;
            flex-direction: column;
            width: 100%;
            background-color: #1a202c;
            position: absolute;
            top: 70px;
            left: 0;
            padding: 20px;
            box-shadow: 0 8px 16px rgba(0,0,0,0.2);
          }
          .nav.active {
            display: flex;
          }
          .hamburger {
            display: block;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
