// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../assets/Group 3.svg";
import Home from "./Home/Home";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [theme, setTheme] = useState("light");
  const [menuOpen, setMenuOpen] = useState(false); 

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light";
    setTheme(storedTheme);
    document.documentElement.setAttribute("data-theme", storedTheme);
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className={`navbar-links ${menuOpen ? "active" : ""}`}>
          <ul>
            <li><Link to="/"><a href="" onClick={toggleMenu}>Home</a></Link></li>
            <li><Link to="/About"><a href="" onClick={toggleMenu}>About</a></Link></li>
            <li><Link to="/Services"><a href="" onClick={toggleMenu}>Services</a></Link></li>
            <li><a href="" onClick={toggleMenu}>Contact</a></li>
            <div className="navbar-actions log_sign">
              <button className="login-btn" onClick={toggleMenu}>Login</button>
              <button className="signup-btn" onClick={toggleMenu}>Sign Up</button>
          </div>
          </ul>
        </div>
       
        <div className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

          <div className="navbar-actions log_signk">
            
              <Link to="/login" > <span className="signup-btn" >Sign Up</span></Link>
          </div>
        {/* Theme toggle button */}
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === "light" ? "🌙 Night Mode" : "☀️ Day Mode"}
        </button>
      </nav>
      <div>
      </div>
    </div>
   
  );
};

export default Navbar;
