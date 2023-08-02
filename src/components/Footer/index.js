import React from "react";
import "./index.css";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { BiHome } from "react-icons/bi";
import { FaMobileAlt } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import logo from "../../assets/logo.png";
const Footer = () => {
  return (
    <footer>
      <div className="content">
        <div className="link-boxes">
          <ul className="box box-contacts">
            <li className="link_name">
              <img src={logo} className="footer-company-logo" />
            </li>
            {/* <li className="contact-information">
              <BiHome className="contact-icons" />
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.google.com/maps"
              >
                456, Model Town 3 , Delhi India
              </a>
            </li>
            <li className="contact-information">
              <FaRegEnvelope className="contact-icons" />
              <a rel="noreferrer" href="mailto:info@finder.in">
                info@finder.in
              </a>
            </li>
            <li className="contact-information">
              <FaMobileAlt className="contact-icons" />
              <a rel="noreferrer" href="tel:09759878654">
                09759878654
              </a>
            </li> */}
          </ul>

          <ul className="box box-quicklinks">
            <li className="link_name">QUICK LINKS</li>
            <div className="quicklinks-box">
              <div>
                <li>
                  <a rel="noreferrer" href="/">
                    Home
                  </a>
                </li>
                <li>
                  <a rel="noreferrer" href="/">
                    About
                  </a>
                </li>
                <li>
                  <a rel="noreferrer" href="/">
                    Pricing
                  </a>
                </li>
                <li>
                  <a rel="noreferrer" href="/">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a rel="noreferrer" href="/">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a rel="noreferrer" href="/">
                    Terms and Conditions
                  </a>
                </li>
              </div>
            </div>
          </ul>
        </div>
      </div>
      <div className="bottom-details">
        <div className="bottom_text">
          <span className="copyright_text">
            Copyright © 2023 Finder All rights reserved
          </span>
          <span className="social-media">
            <div>
              <h1 className="social-text">Follow us on</h1>
            </div>
            <div>
              <a
                className="icons twitter"
                rel="noreferrer"
                href="https://twitter.com"
                target="_blank"
              >
                <FaTwitter />
              </a>
              <a
                className="icons facebook"
                rel="noreferrer"
                href="https://www.facebook.com"
                target="_blank"
              >
                <FaFacebookF />
              </a>
              <a
                className="icons instagram"
                rel="noreferrer"
                href="https://www.instagram.com"
                target="_blank"
              >
                <FaInstagram />
              </a>
              <a
                className="icons youtube"
                rel="noreferrer"
                href="https://www.youtube.com"
                target="_blank"
              >
                <FaYoutube />
              </a>
            </div>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
