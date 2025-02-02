import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../styles/Testimonials.css";

const Testimonials = () => {
  return (
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
            friendly and efficient for our customers.
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.twire.se/wp-content/uploads/2019/06/SlideCatcherLogo-1.png"
            alt="Slide 3"
          />
          <h3>slideCatcher</h3>
          <p>
            By far one of the best companies I have experienced.
          </p>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Testimonials;
