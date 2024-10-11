import React, { useEffect } from "react";
import "./About.css";

function About() {
 

  return (
    <div className="App home  w-100 ">
      <div className="about-section">
        <div className="container">
          <h1>About us</h1>
          <p>Innovating for a Sustainable Future</p>
        </div>
      </div>

      <div className="mission-section ">
        <div className="container ">
          <h2 >User-Friendly Carbon Tracking</h2>
          < p>
            Tracking your carbon footprint doesn’t need to be complicated. Our
            platform allows individuals to easily log daily activities like
            travel, food consumption, or energy use through intuitive forms with
            dropdown menus and sliders. For businesses, we provide specialized
            activity input forms where teams can track emissions across various
            operations, such as transportation, energy use, or waste management,
            categorized by business units or departments. To enhance the
            accuracy and ease of tracking, we also integrate GPS functionality
            for automatic commute data tracking. Whether you’re biking, driving,
            or taking publ\ powered by the **Carbon Interface API**
            and follow internationally recognized standards like the GHG
            Protocol to ensure accurate and reliable data. By making carbon
            tracking simple and accessible, we empower both individuals and
            organizations to understand their impact and take responsibility for
            reducing emissions. We bridge the gap between daily habits and
            long-term sustainability goals with minimal effort from the user.
          </p>
          <h2>Real-Time Insights for Smarter Decisions</h2>
          <p>
            Our Unified Dashboard provides users with powerful insights into
            their carbon emissions in real time. For individuals, it offers a
            clear and straightforward view of your emissions over different
            periods, such as daily, weekly, or monthly. You can easily see how
            your activities affect your carbon footprint and adjust your
            behaviors to reduce emissions. For businesses, our dashboard goes
            further by providing detailed breakdowns of emissions across
            departments. Whether it’s energy use in production or emissions from
            logistics, you can view each unit’s contribution to your overall
            carbon footprint. This granular data helps businesses make more
            informed decisions about where to focus their sustainability
            efforts. Real-time emission updates ensure that your dashboard
            reflects the most current data, allowing you to track improvements
            or identify areas that need attention. We use advanced
            synchronization technologies to ensure seamless updates as new data
            is entered, whether for individuals or businesses. With comparative
            graphs, you can track progress over time and see how current
            emissions compare to previous periods. This feature is invaluable
            for setting realistic reduction targets and monitoring performance.
          </p>

          <h2>Carbon Offset Marketplace</h2>
          <p>
            Our Carbon Offset Marketplace is a unique feature designed to make
            it easy for users to act on the emissions data they collect. Once
            you know how much carbon you’re emitting, you can take direct action
            by purchasing offsets from a curated list of projects. These
            projects range from reforestation efforts to renewable energy
            initiatives, and each project is thoroughly vetted to ensure that
            they provide real, measurable carbon reductions. We offer
            personalized recommendations for carbon offset projects based on
            your emissions data. For example, if your biggest source of
            emissions is transportation, we might suggest contributing to a
            project that plants trees to offset CO₂. This helps both individuals
            and businesses make more informed choices about how to
            counterbalance their carbon footprint. Our platform also includes a
            Cart and Checkout System, allowing you to select one or more offset
            projects and proceed with secure payment through integrated gateways
            like Stripe or Razorpay. Whether you’re an individual looking to
            offset a few kilograms of CO₂ or a business needing to neutralize
            larger emissions, our marketplace simplifies the process and gives
            you confidence that your contributions are making a real difference.
          </p>

          <h2>Recommendations for a Greener Tomorrow</h2>
          <p>
            We believe that knowledge should lead to action, which is why our
            platform includes a sophisticated Recommendations Engine. After
            tracking your carbon footprint, our system provides tailored
            suggestions for reducing your emissions. For individuals, these
            might include recommendations like reducing car usage or switching
            to energy-efficient appliances. These tips are personalized based on
            your logged activities, ensuring that the advice is relevant to your
            lifestyle. For businesses, the recommendations go further, offering
            industry-specific insights. Our engine might suggest switching to
            renewable energy sources, optimizing supply chain logistics, or
            reducing waste. We also incorporate **AI-Powered Optimization**,
            which continually analyzes your data to provide ongoing suggestions
            as you update your activity. Our aim is to turn information into
            action by giving you practical, actionable steps to reduce your
            carbon footprint over time. Whether you’re an individual or a
            business, these recommendations can help you achieve meaningful,
            sustainable progress.
          </p>

          <h2>Rewards for Sustainable Actions</h2>
          <p>
            To make sustainability even more rewarding, we’ve integrated a
            **Gamification and Rewards System**. This feature is designed to
            motivate users to take eco-friendly actions by awarding points for
            sustainable behaviors. For individuals, you can earn points by
            reducing your energy use, choosing public transportation, or hitting
            personal sustainability goals. Businesses can compete in
            sustainability challenges through our **Business Leaderboard**,
            which ranks companies based on their emissions reduction efforts.
            This encourages a healthy competition among businesses to see who
            can make the most progress toward sustainability. The points earned
            can be redeemed for discounts on eco-friendly products and services
            through our Redemption Section, offering tangible rewards for
            positive actions. This gamified approach adds an element of fun and
            motivation, encouraging ongoing engagement with the platform and
            helping users stay committed to their sustainability journey.
          </p>

          <h2>Reporting Tools for Compliance and CSR</h2>
          <p>
            For businesses, meeting regulatory requirements and demonstrating
            Corporate Social Responsibility (CSR) is more important than ever.
            Our platform’s Reporting Tools make it easy to generate detailed
            reports based on your emissions data. These reports are
            automatically formatted for compliance with government regulations
            and can be tailored to fit specific needs. In addition to regulatory
            reporting, we provide tools for CSR reporting, allowing businesses
            to showcase their sustainability efforts to stakeholders in a
            professional and easily shareable format, such as PDFs or CSVs.
            These reports highlight your commitment to reducing your
            environmental impact and can be used in marketing, investor
            relations, or internal communications. By automating report
            generation, we take the complexity out of regulatory compliance and
            help businesses meet their sustainability goals efficiently.
          </p>

          <h2>Why Choose Us ?</h2>
          <p>
            Our platform offers a comprehensive solution for tracking, managing,
            and reducing your carbon footprint. With user-friendly tools,
            personalized recommendations, and a marketplace for carbon offsets,
            we make sustainability easy for everyone—whether you’re an
            individual looking to make small changes or a large organization
            aiming for significant emissions reductions. Our real-time insights,
            gamification system, and automated reporting tools give you
            everything you need to take meaningful action on climate change.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
