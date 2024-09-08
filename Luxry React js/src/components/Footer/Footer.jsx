import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return (
    <>
      <footer className={isHomePage ? 'homePage_footer otherPage_footer': "otherPage_footer"}>
        <div className="container1">
          <h4>Heaven Hub</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum et
            minus voluptatibus corporis eligendi quasi iure nihil eum reiciendis
            quod.
          </p>
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/termsandconditions"}>Terms&Conditions</Link>
            </li>
            <li>
              <Link to={"/contact"}>Contact</Link>
            </li>
          </ul>
        </div>
        <div className="container1">
          <h3>Connect with us</h3>
          <p>+91 989*******</p>
          <p>krud*****@gmail.com</p>
          <p>© All Rights Reserved By Rudraksh.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
