import React, { useEffect } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Swiper, SwiperSlide } from "swiper/react"; // Keep this
import "./App.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";



const App = () => {
    useEffect(() => {
        // Logo animation
        const rows = document.querySelectorAll('.logo-row');
        rows.forEach((row, index) => {
          setTimeout(() => {
            row.style.opacity = '1';
            row.style.transform = 'translateY(0)';
          }, index * 500);
        });
    
        // Intersection Observer for animations
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add('active');
              } else {
                entry.target.classList.remove('active');
              }
            });
          },
          { threshold: 0.2 }
        );
    
        const animatedElements = document.querySelectorAll('.animate');
        animatedElements.forEach((el) => observer.observe(el));
      }, []);

  return (
    <>
      {/* Screen 1 */}
    
      <header>
        <title>Twire</title>
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

      <main>
        <div className="background-shapes animate">
          <div className="circle circle-blue"></div>
          <div className="circle circle-teal"></div>
        </div>
        <p className="animate">
          Strategic IT solutions & outsourcing, privacy & data protection –
        </p>
        <h1 className="animate">Innovations That Move Your Business Forward</h1>
      </main>

      {/* Screen 2 */}
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

      {/* Screen 3 */}
      <section className="slider-section">
        <Swiper navigation pagination={{ clickable: true }}>
          <SwiperSlide>
            <img
              src="https://www.twire.se/wp-content/uploads/2019/06/jonas-2.jpg"
              alt="Slide 1"
            />
            <h3>Jonas</h3>
            <p>
              We’re thrilled to have Twire, Sri Lanka, as one of our main
              development centers, and we’re excited to see where it takes us.
              We believe in collaboration, diverse set of skills and
              backgrounds for innovative solutions thereof. Therefor, Twire with
              its Manager and team have the right mindset and expertise for us.
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://www.twire.se/wp-content/uploads/2019/06/MinKalenderLogo.png"
              alt="Slide 2"
            />
            <h3>Minkalender</h3>
            <p>
              Our goal at Minkalender has always been to make our products user
              friendly and efficient for our customers. One of the ways we’re
              accomplishing this is through our business relationship with Twire.
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://www.twire.se/wp-content/uploads/2019/06/SlideCatcherLogo-1.png"
              alt="Slide 3"
            />
            <h3>slideCatcher</h3>
            <p>
              There are many companies out there working within the IT-industry,
              and then there is Twire, able to offer the support and reliability
              of a traditional consultancy firm with the low cost of an
              outsourcing company with the broadness and flexibility of a
              well-grounded business that also emphasise on integrity and data
              protection with right expertise. By far one of the best companies I
              have experienced.
            </p>
          </SwiperSlide>
        </Swiper>
      </section>

      {/* Trusted Partners */}
      <section className="logo-grid-container">
        <h1>Our Trusted Partners</h1>
        <div className="logo-grid">
          <div className="logo-row">
            <img
              src="https://www.twire.se/wp-content/uploads/2019/06/AcquestLogo.png"
              alt="Company 1"
              className="logo"
            />
            <img
              src="https://www.twire.se/wp-content/uploads/2019/06/Svenskl%C3%A5nef%C3%B6rmedlinglogo.png"
              alt="Company 2"
              className="logo"
            />
            <img
              src="https://www.twire.se/wp-content/uploads/2019/06/EffectSoft-Logo-e1561097466118.png"
              alt="Company 3"
              className="logo"
            />
            <img
              src="https://www.twire.se/wp-content/uploads/2019/06/MinKalenderLogo-e1561097499966.png"
              alt="Company 4"
              className="logo"
            />
          </div>
          <div className="logo-row">
            <img
              src="https://www.twire.se/wp-content/uploads/2019/06/micropol.png"
              alt="Company 5"
              className="logo"
            />
            <img
              src="https://www.twire.se/wp-content/uploads/2019/06/Glitteray.png"
              alt="Company 6"
              className="logo"
            />
            <img
              src="https://www.twire.se/wp-content/uploads/2019/06/appspotr.png"
              alt="Company 7"
              className="logo"
            />
            <img
              src="https://www.twire.se/wp-content/uploads/2019/06/STORADIO_2_RGB.png"
              alt="Company 8"
              className="logo"
            />
          </div>
          <div className="logo-row">
            <img
              src="https://www.twire.se/wp-content/uploads/2019/06/esmokes-logo-e1561098728826.png"
              alt="Company 9"
              className="logo"
            />
            <img
              src="https://www.twire.se/wp-content/uploads/2019/06/adme_logo_black.png"
              alt="Company 10"
              className="logo"
            />
            <img
              src="https://www.twire.se/wp-content/uploads/2019/06/logo-e1561099119307.png"
              alt="Company 11"
              className="logo"
            />
            <img
              src="https://www.twire.se/wp-content/uploads/2019/06/themobilestore.png"
              alt="Company 12"
              className="logo"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 Twire. All Rights Reserved.</p>
        <div className="social-icons">
          <a href="#" target="_blank" title="Facebook">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" target="_blank" title="Twitter">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" target="_blank" title="LinkedIn">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="#" target="_blank" title="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </footer>
    </>
  );
};

export default App;