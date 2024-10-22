import React from 'react';
import './landingPage.css';
import pollution from "../../assets/pollution.jpg"
import ScrollImages from './ScrollImages';
import Footer from '../Home/Footer';
import Cards from './Cards';

const LandingPage = () => {
  return (
    <div className="sustainability-container">
      <h2 className="sustainability-heading">
        We're here to support you no matter where you are in your sustainability journey
      </h2>
      <div className="sustainability-cards">
        <div className="card">
          <div className="icon">🏁</div>
          <h3>Gather footprint data, report & share</h3>
        </div>
        <div className="card">
          <div className="icon">☁️</div>
          <h3>Reduce & remove carbon</h3>
        </div>
        <div className="card">
          <div className="icon">💲</div>
          <h3>Originate & manage carbon offset projects</h3>
        </div>
      </div>

      {/* New Section - Holistic Climate Action */}
      <div className="holistic-action-section">
        <h2 className="holistic-heading">A holistic <span className="climate-action">CLIMATE ACTION</span> at your fingertips</h2>
        <p className="holistic-subheading">Understanding what is carbon footprint is only the start of the journey. Go beyond with our proprietary tech and intelligence, and get a personalized strategy to help the environment.</p>
        <div className="holistic-cards">
          <div className="holistic-card">
            <div className="holistic-icon">📍</div>
            <h3>Track</h3>
            <p>Get your Green Score™, experience of proprietary intelligence a step beyond traditional carbon footprint calculators, and understand both the positive & negative impacts of your lifestyle.</p>
          </div>
          <div className="holistic-card">
            <div className="holistic-icon">🚴‍♂️</div>
            <h3>Reduce</h3>
            <p>With Deeds take pledges and participate in live initiatives. Learn to make lifestyle choices with the highest carbon impact and enjoy unique deals on top Green Brands.</p>
          </div>
          <div className="holistic-card">
            <div className="holistic-icon">🌱</div>
            <h3>Offset</h3>
            <p>Offset the carbon footprint you can't reduce yet, by supporting high-quality and certified carbon offsetting projects across 'Bharat' and start your net-zero journey.</p>
          </div>
          <div className="holistic-card">
            <div className="holistic-icon">🤝</div>
            <h3>Multiply</h3>
            <p>It is impossible to fight climate change alone, multiply your impact by joining your community and claiming your corporate initiatives. Add family & friends to multiply your impact.</p>
          </div>
        </div>
      </div>

      {/* Existing Section */}
      <h2 className="sustainability-heading">Your one-stop shop for environmental sustainability solutions</h2>
      <div className="solution-cards">
        <div className="solution-card">
          <img src={pollution} alt="Sustainability Reporting" className="solution-image" />
          <a href="#" className="solution-link">Climat.Report</a>
          <h3>Sustainability Reporting</h3>
          <p>Gather emissions data & track your sustainability performance using global reporting standards as per GRI, TCFD, BRSR, UN-SDG.</p>
          <button className="learn-more">Learn More</button>
        </div>
        <div className="solution-card">
          <img src={pollution} alt="Carbon Marketplace" className="solution-image" />
          <a href="#" className="solution-link">Climat.Carbon</a>
          <h3>Offset with Carbon Marketplace</h3>
          <p>Offset your carbon emissions to reach your net-zero goals. Invest in carefully vetted carbon offset projects worldwide.</p>
          <button className="learn-more">Learn More</button>
        </div>
        <div className="solution-card">
          <img src={pollution} alt="Manage Carbon Projects" className="solution-image" />
          <a href="#" className="solution-link">Climat.Carbon</a>
          <h3>Originate & Manage Carbon Project</h3>
          <p>For project owners looking to create, manage & sell credits. Turn your sustainability vision into impactful projects.</p>
          <button className="learn-more">Learn More</button>
        </div>
        <div className="solution-card">
          <img src={pollution} alt="Manage Carbon Projects" className="solution-image" />
          <a href="#" className="solution-link">Climat.Carbon</a>
          <h3>Originate & Manage Carbon Project</h3>
          <p>For project owners looking to create, manage & sell credits. Turn your sustainability vision into impactful projects.</p>
          <button className="learn-more">Learn More</button>
        </div>
      </div>
      <ScrollImages/>
      <Cards/>
      <Footer/>
    
    </div>
  );
};

export default LandingPage;

