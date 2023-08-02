import React, { useEffect, useRef } from "react";
import "./index.css";
import logo from "../../assets/logo.png";
import apple from "../../assets/apple.png";
import cola from "../../assets/cola.png";
import amazon from "../../assets/amazon.png";
import adidas from "../../assets/adidas.png";
import intel from "../../assets/intel.png";
import nike from "../../assets/nike.png";
import samsung from "../../assets/samsung.png";
import deloitte from "../../assets/deloitte.png";
import kpmg from "../../assets/kpmg.png";
import mastercard from "../../assets/mastercard.png";
import { motion, useAnimation, useInView } from "framer-motion";

const BrandSlider = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);
  return (
    <div className="main-brand-container">
      <svg
        width="100%"
        height="100%"
        id="svg"
        viewBox="0 0 1440 390"
        xmlns="http://www.w3.org/2000/svg"
        class="transition duration-300 ease-in-out delay-150"
      >
        <path
          d="M 0,400 C 0,400 0,200 0,200 C 83.39743589743588,207.93846153846152 166.79487179487177,215.87692307692308 247,203 C 327.20512820512823,190.12307692307692 404.21794871794873,156.4307692307692 491,173 C 577.7820512820513,189.5692307692308 674.3333333333333,256.40000000000003 760,261 C 845.6666666666667,265.59999999999997 920.448717948718,207.9692307692308 986,198 C 1051.551282051282,188.0307692307692 1107.8717948717947,225.72307692307692 1182,234 C 1256.1282051282053,242.27692307692308 1348.0641025641025,221.13846153846154 1440,200 C 1440,200 1440,400 1440,400 Z"
          stroke="none"
          stroke-width="0"
          fill="#2bb262"
          fill-opacity="1"
          class="transition-all duration-300 ease-in-out delay-150 path-0"
          transform="rotate(-180 720 200)"
        ></path>
      </svg>
      <div ref={ref} className="brand-container">
        <motion.h1
          variants={{
            hidden: { opacity: 0, x: 40 },
            visible: { opacity: 1, scale: 1, x: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 1 }}
          className="brand-heading"
        >
          Our Employer network includes…
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
            background: "#2bb262",
            color: "#2bb262",
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
          className="brand-para"
        >
          MNCs that you wanted to work for, Unicorns that you followed on the
          news, startups and soon-icorns that can unlock the potential in you.
        </motion.p>
      </div>
      <div className="logos">
        <div className="logos-slide">
          <img src={apple} />
          <img src={cola} />
          <img src={amazon} />
          <img src={intel} />
          <img src={nike} />
          <img src={samsung} />
          <img src={kpmg} />
          <img src={mastercard} />
          <img src={deloitte} />
        </div>
        <div className="logos-slide">
          <img src={apple} />
          <img src={cola} />
          <img src={amazon} />
          <img src={intel} />
          <img src={nike} />
          <img src={samsung} />
          <img src={kpmg} />
          <img src={mastercard} />
          <img src={deloitte} />
        </div>
      </div>
    </div>
  );
};

export default BrandSlider;
