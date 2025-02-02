import React from "react";
import "../styles/Header.css";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img
          src="https://www.twire.se/wp-content/uploads/2019/05/logo_spacing_1.svg"
          alt="Twire Logo"
        />
      </div>
      <nav>
        <ul>
          <li><a href="#">Meet Twire</a></li>
          <li><a href="#">Our Services</a></li>
          <li><a href="#">Vacancies</a></li>
        </ul>
      </nav>
      <a href="#" className="cta">Get in Touch</a>
    </header>
  );
};

export default Header;
