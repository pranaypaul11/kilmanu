import React from "react";
import "./Services.css";
import nature from "../../assets/nature.jpg";
import carbon from "../../assets/carbon.jpg";
import emission from "../../assets/emission.png";
import csr from "../../assets/csr.webp";
import tracking from "../../assets/tracking.png";

const Services1 = () => {
  return (
    <div className="services-container">
      <h2 className="services-title">Our Services</h2>
      <div className="services-header">
        <img
          src={nature}
          alt="Services Header"
          className="services-header-image"
        />
      </div>
      <div className="services-list">
        <div className="service-item">
          <div className="service-icon">
            <img src={carbon} alt="Mobile Development" />
          </div>
          <h3 className="service-title">Carbon Footprint Tracking</h3>
          <p className="service-description">
            Empower individuals and businesses to easily track their daily
            activities and calculate their carbon emissions. By inputting data
            such as travel habits, energy consumption, and business operations,
            users can gain insights into their environmental impact. The
            platform uses a real-time carbon calculation engine based on the GHG
            Protocol and connects to APIs like the Carbon Interface for accurate
            emissions data. Whether for personal use or organizational analysis,
            our carbon footprint tracker makes it easy to monitor and reduce
            your environmental impact.
          </p>
          <button className="service-btn">MORE</button>
        </div>

        <div className="service-item">
          <div className="service-icon">
            <img src={emission} alt="Mobility Services" />
          </div>
          <h3 className="service-title">Real-Time Emission Dashboards</h3>
          <p className="service-description">
            Individuals and businesses can visualize their carbon emissions
            through intuitive dashboards that display real-time updates. With
            options to view daily, weekly, and monthly emissions, users can
            easily track their progress. Businesses benefit from detailed
            insights, with emissions breakdowns by department or activity.
            Comparative graphs help both individuals and businesses measure
            their reductions over time, offering a powerful tool for ongoing
            environmental management and decision-making.
          </p>
          <button className="service-btn">MORE</button>
        </div>

        <div className="service-item">
          <div className="service-icon">
            <img src={csr} alt="Software Consulting" />
          </div>
          <h3 className="service-title">Compliance and CSR Reporting Tools</h3>
          <p className="service-description">
            Businesses can use our platform to automatically generate compliance
            reports that meet regulatory requirements or create Corporate Social
            Responsibility (CSR) reports to share with stakeholders. With
            customizable templates, businesses can streamline reporting on
            emissions, making the process easy and efficient. Reports can be
            downloaded in various formats or shared directly with government
            bodies, partners, or clients, helping businesses showcase their
            commitment to sustainability.
          </p>
          <button className="service-btn">MORE</button>
        </div>
        <div className="service-item">
          <div className="service-icon">
            <img src={tracking} alt="Software Consulting" />
          </div>
          <h3 className="service-title">GPS-Integrated Commute Tracking</h3>
          <p className="service-description">
            For individuals who enable location services, our platform offers
            automatic tracking of commute activities, whether by car, bus, bike,
            or foot. This feature increases the accuracy of emission data,
            helping users better understand the impact of their daily travel.
            With minimal user input, this service ensures easy, seamless carbon
            footprint tracking and encourages users to make environmentally
            conscious commuting choices
          </p>
          <button className="service-btn">MORE</button>
        </div>
      </div>
    </div>
  );
};

export default Services1;
