import React from "react";
import { FaReddit, FaTwitter, FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";

import { images } from "../../constants";
import "./Footer.scss";

const Footer = () => {
  return (
    <div>
      <hr />

      <div className="app__Footer">
        <div className="app__copyright app__flex">
          <img src={images.logo} width={60} />

          <ul>
            {[
              "A product by Microsoft.",
              "All rights reserved.",
              "©️ Microsoft 2021",
            ].map((item) => (
              <li key={`copy-${item}`}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="app__AG">
          <div className="app__About">
            <h4>About</h4>
            <ul>
              {["Download", "Overview", "Examples", "Blog"].map((about) => (
                <motion.li whileHover={{ scale: 1.04 }} key={`about-${about}`}>
                  <a href={`#${about}`}>{about}</a>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="app__General">
            <h4>General</h4>
            <ul>
              {["Notice", "License", "Press Inquiry", "Press Images"].map(
                (general) => (
                  <motion.li
                    whileHover={{ scale: 1.04 }}
                    key={`general-${general}`}
                  >
                    <a href={`#${general}`}>{general}</a>
                  </motion.li>
                )
              )}
            </ul>
          </div>
        </div>

        <div className="app__RI">
          <div className="app__Resources">
            <h4>Resources</h4>
            <ul>
              {["Help", "Tour", "Contact", "Privacy"].map((resource) => (
                <motion.li
                  whileHover={{ scale: 1.04 }}
                  key={`resource-${resource}`}
                >
                  <a href={`#${resource}`}>{resource}</a>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="app__Icons">
            <motion.div whileHover={{ scale: 1.1 }}>
              <a href="#">
                <FaReddit />
              </a>
            </motion.div>

            <motion.div whileHover={{ scale: 1.1 }}>
              <a href="#">
                <FaTwitter />
              </a>
            </motion.div>

            <motion.div whileHover={{ scale: 1.1 }}>
              <a href="#">
                <FaYoutube />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
