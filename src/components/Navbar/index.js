import React, { Component } from "react";
import "./index.css";
import logo from "../../assets/logo.png";
import { AiOutlineMenu } from "react-icons/ai";
import { HashLink as Link } from "react-router-hash-link";
import { motion } from "framer-motion";

class Navbar extends Component {
  state = { showMenu: false };
  onClickMenu = () => {
    this.setState((prevState) => ({
      showMenu: true,
    }));
    if (typeof window != "undefined" && window.document) {
      document.body.style.overflow = "hidden";
    }
  };
  onExitMenu = () => {
    this.setState((prevState) => ({
      showMenu: false,
    }));
    document.body.style.overflow = "unset";
  };

  render() {
    const { showMenu } = this.state;
    return (
      <nav className="navbar-container">
        <Link style={{ textDecoration: "none" }} to="/">
          <motion.img
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="logo"
            src={logo}
            alt="logo"
          />
        </Link>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="menu-container"
        >
          <Link style={{ textDecoration: "none" }} to="/#home">
            <h1 className="menu-items">Home</h1>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/#jobs">
            <h1 className="menu-items">Jobs</h1>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/#aboutus">
            <h1 className="menu-items">About Us</h1>
          </Link>
        </motion.div>
        <motion.a
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{ textDecoration: "none", color: "black" }}
        >
          <Link style={{ textDecoration: "none" }} to="/login">
            <button className="signin-button">Sign In</button>
          </Link>
        </motion.a>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="hamburger-menu-container"
        >
          <AiOutlineMenu
            className="hamburger-menu"
            onClick={this.onClickMenu}
          />
        </motion.div>
        {showMenu ? (
          <div className="menuMask" onClick={this.onExitMenu}></div>
        ) : null}
        {showMenu ? (
          <div className="menu">
            <div>
              <div className="mobile-menu-container">
                <Link style={{ textDecoration: "none" }} to="/#home">
                  <h1 onClick={this.onExitMenu} className="mobile-menu-items">
                    Home
                  </h1>
                </Link>
              </div>
              <div className="mobile-menu-container">
                <Link style={{ textDecoration: "none" }} to="/#jobs">
                  <h1 className="mobile-menu-items" onClick={this.onExitMenu}>
                    Jobs
                  </h1>
                </Link>
              </div>
              <div className="mobile-menu-container">
                <Link style={{ textDecoration: "none" }} to="/#aboutus">
                  <h1 onClick={this.onExitMenu} className="mobile-menu-items">
                    About us
                  </h1>
                </Link>
              </div>
            </div>
            <a style={{ textDecoration: "none", color: "black" }}>
              <button className="signin-button-mobile">Sign In</button>
            </a>
          </div>
        ) : null}
      </nav>
    );
  }
}

export default Navbar;
