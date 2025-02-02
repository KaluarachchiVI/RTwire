import React from "react";
import "../styles/TrustedPartners.css";

const TrustedPartners = () => {
  return (
    <section className="logo-grid-container">
      <h1>Our Trusted Partners</h1>
      <div className="logo-grid">
        <div className="logo-row">
          <img src="https://www.twire.se/wp-content/uploads/2019/06/AcquestLogo.png" alt="Company 1" className="logo" />
          <img src="https://www.twire.se/wp-content/uploads/2019/06/Svenskl%C3%A5nef%C3%B6rmedlinglogo.png" alt="Company 2" className="logo" />
          <img src="https://www.twire.se/wp-content/uploads/2019/06/EffectSoft-Logo-e1561097466118.png" alt="Company 3" className="logo" />
          <img src="https://www.twire.se/wp-content/uploads/2019/06/MinKalenderLogo-e1561097499966.png" alt="Company 4" className="logo" />
        </div>
      </div>
    </section>
  );
};

export default TrustedPartners;
