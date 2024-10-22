import React from 'react';
import './landingPage.css';

const FeatureCards = () => {
  const cards = [
    {
      title: "MEASURE",
      icon: "dot",
      description: "Track and analyze your environmental impact with precision. Our comprehensive measurement tools provide detailed insights into your carbon footprint across all operations.",
    },
    {
      title: "BENCHMARK",
      icon: "compass",
      description: "Compare your performance against industry standards and competitors. Understand where you stand and identify opportunities for improvement in your sustainability journey.",
    },
    {
      title: "PLAN",
      icon: "clock",
      description: "Chart your emission reduction roadmap with confidence using data. Expert guidance and ecosystem partners turn ambitious goals into real-world outcomes.",
    },
    {
      title: "REPORT",
      icon: "target",
      description: "Generate comprehensive sustainability reports with ease. Meet regulatory requirements and communicate your environmental progress to stakeholders transparently.",
    },
    {
      title: "EXCHANGE",
      icon: "exchange",
      description: "Participate in carbon markets and offset programs efficiently. Connect with verified partners and manage your environmental credits in one place.",
    }
  ];

  const renderIcon = (iconType) => {
    const icons = {
      dot: <div className="circle"><div className="dot"></div></div>,
      compass: <div className="compass"><div className="compass-inner"></div></div>,
      clock: <div className="clock"><div className="clock-hand"></div></div>,
      target: <div className="target"><div className="target-inner"></div></div>,
      exchange: <div className="exchange"><div className="exchange-circle"></div></div>
    };
    return icons[iconType] || null;
  };

  return (
    <div className="features-container">
      <div className="features-header">
        <h1 className="title">What you can do</h1>
        <h1 className="title-with">with <span className="title-sprih">Kilman</span></h1>
      </div>
      
      <div className="cards-container">
        {cards.map((card, index) => (
          <div key={index} className="feature-card">
            <div className="card-icon">
              {renderIcon(card.icon)}
            </div>
            <h3>{card.title}</h3>
            <div className="card-content">
              <p>{card.description}</p>
              <button className="learn-more">Learn more →</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCards;