import React from "react";
import { Link } from "react-router-dom";
import { RiFacebookBoxLine, RiYoutubeLine, RiGithubLine,RiInstagramLine} from "react-icons/ri";
const SubContact = () => {
 
return (
    <>
    
      <section id="contact_Mini">
        <div className="super_container">
        <div className="container_1">
          <h3>Let’s connect </h3>
          <div>
            <p>Phone</p>
            <span>+91 989******</span>
          </div>
          <div>
            <p>Email</p>
            <span>krud*****@gmail.com</span>
          </div>
          <div>
            <p>Address</p>
            <span>Building No.12 Sector A-1 Noida </span>
          </div>
          <ul>
          <Link to={"/facebook"} target="_blank"><RiFacebookBoxLine/></Link>
          <Link to={"/instagram"} target="_blank"><RiInstagramLine/></Link>
          <Link to={"/youtube"} target="_blank"><RiYoutubeLine/></Link>
        </ul>
        </div>
        
        <div className="container_2">
          <h3>We'd love to hear from you</h3>
          <form>
            <div>
              <input type="text" placeholder="Your Name"/>
              <input type="email" placeholder="Email"/>
            </div>
            <textarea rows="4" placeholder="Your Message..."/>
            <button type="submit">SEND</button>
          </form>
          
        </div>
        </div>
      </section>
    </>
  );
};

export default SubContact;
