import React from "react";
import { RiFacebookBoxLine, RiInstagramLine,RiYoutubeLine } from "react-icons/ri";
import { Link } from "react-router-dom";
const Contact = () => {


  




























  return (
    <>
      <section id="contact">
        <h1>CONTACT Us</h1>
        
<p>
Reach out to us via phone, email. Our knowledgeable and friendly professionals are committed to providing you with personalized service and timely responses to ensure all your real estate needs are met.
        </p>
        <div className="container">
          <img src="/about.jpg" alt="about" />
          <div className="content">
              <h3>Let's connect</h3>
              <div>
                <p>Phone</p>
                <span>+91 989*******</span>
              </div>
              <div>
                <p>Email</p>
                <span>krud*****@gmail.com</span>
              </div>
              <div>
                <p>Address</p>
                <span>Building No.12 Sector A-1 Noida</span>
              </div>
              <ul>
                <Link to={"/facebook"} target="_blank">
                  <RiFacebookBoxLine />
                </Link>
                <Link to={"/instagram"} target="_blank">
                  <RiInstagramLine />
                </Link>
                <Link to={"/youtube"} target="_blank">
                  <RiYoutubeLine />
                </Link>
              </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
