import React, { useEffect, useRef } from "react";
import "./index.css";
import { motion, useInView, useAnimation } from "framer-motion";

function Job() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);
  return (
    <section ref={ref} className="job-container" id="jobs">
      <motion.h1
        variants={{
          hidden: { opacity: 0, x: 40 },
          visible: { opacity: 1, scale: 1, x: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 1 }}
      >
        Jobs
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
        className="job-para"
      >
        Finder is a Job platform that thousands of global people rely on to get
        their first job.
      </motion.p>
      <button className="job-button">Find Job</button>
      <svg
        width="100%"
        height="100%"
        id="svg"
        viewBox="0 0 1440 390"
        xmlns="http://www.w3.org/2000/svg"
        class="transition duration-300 ease-in-out delay-150"
      >
        <path
          d="M 0,400 C 0,400 0,200 0,200 C 80.7564410855376,234.05152868430093 161.5128821710752,268.10305736860187 227,257 C 292.4871178289248,245.89694263139813 342.70491240123675,189.6392992098935 404,180 C 465.29508759876325,170.3607007901065 537.667468223978,207.3397457918241 616,225 C 694.332531776022,242.6602542081759 778.6252147028514,241.00171762281005 840,219 C 901.3747852971486,196.99828237718995 939.8316729646169,154.65338371693576 1011,166 C 1082.168327035383,177.34661628306424 1186.0480934386808,242.38474750944692 1263,257 C 1339.9519065613192,271.6152524905531 1389.9759532806597,235.80762624527654 1440,200 C 1440,200 1440,400 1440,400 Z"
          stroke="none"
          stroke-width="0"
          fill="#2bb262"
          fill-opacity="1"
          class="transition-all duration-300 ease-in-out delay-150 path-0"
        ></path>
      </svg>
    </section>
  );
}

export default Job;
