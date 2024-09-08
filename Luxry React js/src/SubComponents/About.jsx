import React from "react";

const About = () => {
  return (
    <>
      <section id="aboutUs_Mini">
        <div className="first_container">
          <div className="content">
          <h1>ABOUT US</h1>
          <p>With years of experience in the real estate industry, our team of dedicated professionals combines local market expertise with a deep understanding of your unique needs. We take pride in offering personalized services, ensuring every client finds the right property to match their lifestyle, budget, and aspirations.</p>

<p>At Haven Hub, we believe in building relationships based on trust, transparency, and a commitment to excellence. From the first consultation to the final deal, we are with you every step of the way, ensuring a smooth and stress-free experience.
</p>
          
          </div>
          <button>We strive to offer you best possible homes to stay!</button>
        </div>
        <div className="second_container">
          <div className="image_1">
            <img src="/people.jpg" alt="people" />
          </div>
          <div className="image_2">
            <img src="people2.jpg" alt="people2" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
