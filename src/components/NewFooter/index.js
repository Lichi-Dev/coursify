import React from "react";
import "./index.css";
import logo from "../../assets/logo.png";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function NewFooter() {
  return (
    <div className="footer">
      <img src={logo} className="footer-company-logo" />
      <hr
        style={{
          background: "white",
          color: "white",
          borderColor: "white",
          height: "0.5px",
          width: "90%",
        }}
      />
      <div className="bottom-details">
        <div className="bottom_text">
          <span className="copyright_text">
            Copyright © 2023 <a href="/">Finder</a> All rights reserved
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
    </div>
  );
}

export default NewFooter;
