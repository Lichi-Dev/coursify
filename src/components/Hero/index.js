import React from "react";
import "./index.css";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="hero-container" id="home">
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="hero-heading"
      >
        Find Your Dream Job
        <br /> With Finder.
      </motion.h1>
    </section>
  );
}

export default Hero;
