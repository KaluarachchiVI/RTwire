import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2025 Twire. All Rights Reserved.</p>
      <div className="social-icons">
        <a href="#" target="_blank" title="Facebook"><i className="fab fa-facebook-f"></i></a>
        <a href="#" target="_blank" title="Twitter"><i className="fab fa-twitter"></i></a>
        <a href="#" target="_blank" title="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
        <a href="#" target="_blank" title="Instagram"><i className="fab fa-instagram"></i></a>
      </div>
    </footer>
  );
};

export default Footer;
