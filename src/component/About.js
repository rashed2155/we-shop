import React from "react";
import logo from "../pic/logo.png";

function About() {
  return (
    <div className="container about">
      <div className="logo1">
        <div className="about-logo">
          <img src={logo} alt="wee-shop" />
          <h2>Wee Shop</h2>
        </div>
      </div>
      <div className="info">
        <div className="about-info">
          <h2>About Us</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <br></br>
        <div className="social-contact">
          <div className="fb">
            <i class="fab fa-facebook-square s-icon"></i>
            <a
              href="https://www.facebook.com/i.m.rashed.khan/"
              target="_blank"
              rel="noreferrer"
            >
              <h4>wee shop</h4>
            </a>
          </div>
          <div className="wp">
            <i class="fab fa-whatsapp-square s-icon"></i>
            <h4>+880 162 9341869</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
