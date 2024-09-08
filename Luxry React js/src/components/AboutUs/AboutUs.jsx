import React from "react";
import AboutComponentMini from "../../SubComponents/About";
const AboutUs = () => {
  return (
    <section id="aboutPage" className="page">
      <div className="container">
        <img src="/about.jpg" alt="about" />
        <div className="content">
          <h3>Your peace of mind, our priority!</h3>
          <p>Welcome to Haven Hub, your trusted partner in finding the perfect property. Whether you’re buying your dream home, investing in commercial spaces, or searching for rental opportunities, we’re here to make your journey seamless and rewarding.

<p>With years of experience in the real estate industry, our team of dedicated professionals combines local market expertise with a deep understanding of your unique needs. We take pride in offering personalized services, ensuring every client finds the right property to match their lifestyle, budget, and aspirations.</p>

<p>At Haven Hub, we believe in building relationships based on trust, transparency, and a commitment to excellence. From the first consultation to the final deal, we are with you every step of the way, ensuring a smooth and stress-free experience.
</p>
Whether you’re a first-time buyer or a seasoned investor, we have the resources and insights to help you make informed decisions in today’s dynamic real estate market. Let us guide you home.</p>
        </div>
      </div>
      <AboutComponentMini />
    </section>
  );
};

export default AboutUs;
