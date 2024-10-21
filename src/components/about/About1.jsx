import React from "react";
import "./about1.css";
import pollution from "../../assets/pollution.jpg";
import pollution1 from "../../assets/pollution1.jpg";

const About1 = () => {
  return (
    <div>
      {/* Section 1: Left Image, Right Text */}
      <div className="mission-vision-container left-image">
        <div className="image-section">
          <img src={pollution} alt="Woman with binoculars" className="image" />
        </div>
        <div className="text-section">
          <h2 className="title">OUR MISSION</h2>
          <p className="description">
            "Our mission is to empower individuals, small-to-medium enterprises
            (SMEs), and large organizations to take meaningful action towards
            reducing their carbon footprint. Through an intuitive and accessible
            platform, we aim to make tracking, reducing, and offsetting carbon
            emissions easy and effective. By providing real-time insights,
            personalized recommendations, and access to verified carbon offset
            projects, we help users understand their environmental impact and
            contribute to a more sustainable future. Our goal is to foster a
            culture of environmental responsibility, enabling users to make
            data-driven decisions that reduce emissions, conserve resources, and
            combat climate change."
          </p>

          <button className="discover-btn">DISCOVER</button>
        </div>
      </div>

      {/* Section 2: Left Text, Right Image */}
      <div className="mission-vision-container right-image">
        <div className="text-section">
          <h2 className="title">OUR VISION</h2>
          <p className="description">
            "Our vision is to create a world where every individual and business
            is empowered to make informed choices that lead to a carbon-neutral
            future. We aspire to be the global leader in sustainability
            solutions, helping millions reduce their carbon footprint, offset
            emissions, and embrace eco-friendly practices. By fostering
            collaboration and innovation, we envision a future where technology
            and data drive the transition to a greener economy, ensuring that
            sustainable living becomes the norm for individuals, businesses, and
            industries worldwide."
          </p>

          <button className="discover-btn">DISCOVER</button>
        </div>
        <div className="image-section">
          <img src={pollution1} alt="Woman with binoculars" className="image" />
        </div>
      </div>
    </div>
  );
};

export default About1;
