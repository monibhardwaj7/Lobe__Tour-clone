import React from "react";
import { motion } from "framer-motion";

import "./Download.scss";

const Download = () => {
  return (
    <div className="app__Download">
      <h2>Train your app with Lobe</h2>
      <motion.button className="btn btn-lg" whileHover={{ scale: 1.06 }}>
        Download
      </motion.button>
    </div>
  );
};

export default Download;
