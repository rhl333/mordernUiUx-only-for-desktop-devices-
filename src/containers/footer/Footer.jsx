import React from "react";
import { Main, MainBottom, MainTop, MainMiddle } from "./style";
import logo from "../../assets/logo.svg";

const Footer = () => {
  return (
    <div>
      <Main>
        <MainTop>
          <h2>Do you want to step in to the future before others</h2>
        </MainTop>
        <MainMiddle>
          <p>Request Early Access</p>
        </MainMiddle>
        <MainBottom>
          <div className="first">
            <img src={logo} alt="" />
            <p>Rahul Negi, All Rights Reserved</p>
          </div>
          <div className="second">
            <h2>Links</h2>
            <a href="/">Overons</a>
            <a href="/">Social Media</a>
            <a href="/">Counters</a>
            <a href="/">Contact</a>
          </div>
          <div className="third">
            <h2>Company</h2>
            <a href="/">Terms and Conditions</a>
            <a href="/">Privacy Policy</a>
            <a href="/">Contact</a>
          </div>
          <div className="fourth">
            <h2>Get In Touch</h2>
            <p>rhlnegi333@gmail.com</p>
            <p>+91 8449963845</p>
          </div>
        </MainBottom>
      </Main>
    </div>
  );
};

export default Footer;
