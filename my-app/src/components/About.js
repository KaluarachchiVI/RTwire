import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <section className="reveal-section">
      <img
        src="https://www.twire.se/wp-content/uploads/2019/06/Twire-38-of-141.jpg"
        alt="Background"
      />
      <div className="translucent-box animate">
        <h2 style={{ color: "black" }}>We create strategies, innovation & growth.</h2>
        <p style={{ color: "black" }}>
          Twire is a consultancy firm focused on strategic IT and software
          development connecting top expertise with clients worldwide. Over
          more than a decade we have collected a huge experience within IT and
          now help our clients to build their outsourcing solutions,
          high-performance distributed teams, strategic IT solutions as well
          as privacy program and data protection. Twire uses a customised and
          unique qualification process to gather and offer only the best
          developers and services available. Twire is based in Colombo, Sri
          Lanka, with Swedish founders, global customers and top-notch talent.
        </p>
      </div>
    </section>
  );
};

export default About;
