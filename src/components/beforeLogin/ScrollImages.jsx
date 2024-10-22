import React from 'react';
import './landingPage.css';
import pollution from "../../assets/pollution.jpg"

const ScrollImages = () => {
  return (
    <div className="methodology-section">
      <h2 className="methodology-heading">Global Methodology and Standards</h2>
      <div className="logo-scroller">
        <div className="logos">
          <img src={pollution} alt="IPCC Logo" className="logo" />
          <img src={pollution} alt="ISO Logo" className="logo" />
          <img src={pollution} alt="Science Based Targets" className="logo" />
          <img src={pollution} alt="CII Logo" className="logo" />
          <img src={pollution} alt="CSRD Logo" className="logo" />
          <img src={pollution} alt="IPCC Logo" className="logo" />
          <img src={pollution} alt="ISO Logo" className="logo" />
          <img src={pollution} alt="Science Based Targets" className="logo" />
          <img src={pollution} alt="CII Logo" className="logo" />
          <img src={pollution} alt="CSRD Logo" className="logo" />
        </div>
      </div>
    </div>
  );
};

export default ScrollImages;

