// src/components/Home.jsx
import React from "react";
import "./Home.css";
import { useEffect } from "react";

import log from "../assets/Group 3.svg";



const Home = () => {
  
  useEffect(() => {
    const heroSection = document.querySelector(".hero-section");
    heroSection.classList.add("animate-in");
  }, []);

  return (
    <div className="home ">

    
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content hero-section">
          <h1 className="">Welcome to Klimanu</h1>
          <p className="fw-700">Your solution for a sustainable future</p>
          <button className="cta-btn">Get Started</button>
        </div>
        <div className="hero-image">
          <img src={log} alt="Sustainability" />
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <h2>Our Services</h2>
        <div className="service-cards">
          <div className="service-card scroll-element">
            <h3>Consulting</h3>
            <p>Expert advice on green energy solutions tailored to your needs.</p>
          </div>
          <div className="service-card scroll-element">
            <h3>Workshops</h3>
            <p>Join our sustainability workshops and learn the future of energy.</p>
          </div>
          <div className="service-card scroll-element">
            <h3>Support</h3>
            <p>24/7 support to help you transition to a more eco-friendly lifestyle.</p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">

        <p className="scroll-element">&copy; 2024 Klimanu. All rights reserved.</p>
      </footer>
    </div>
  );
};




export default Home;
