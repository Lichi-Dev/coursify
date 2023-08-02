import React, { useEffect, useRef } from "react";
import "./index.css";
import { motion, useAnimation, useInView } from "framer-motion";

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);
  return (
    <section id="aboutus">
      <div ref={ref} className="about-container">
        <motion.h1
          variants={{
            hidden: { opacity: 0, x: 40 },
            visible: { opacity: 1, scale: 1, x: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 1 }}
          style={{ color: "white" }}
        >
          About
        </motion.h1>
        <motion.hr
          variants={{
            hidden: { opacity: 0, x: -40 },
            visible: { opacity: 1, scale: 1, x: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 1 }}
          style={{
            background: "black",
            color: "black",
            borderColor: "transparent",
            height: "3px",
            width: "30px",
          }}
        />
        <motion.p
          variants={{
            hidden: { opacity: 0, x: -40 },
            visible: { opacity: 1, scale: 1, x: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 1 }}
          className="about-para"
          style={{ color: "white" }}
        >
          Finder's mission is to be a straightforward and productive hiring
          solution for retail, hospitality and x businesses. It's simple: we
          help build pipeline, and we help screen candidates for managers. We do
          it with a delightful interface and AI recruiting assistant who has
          time to get to all the things managers and recruiters can't.
        </motion.p>
      </div>
    </section>
  );
}

export default About;
