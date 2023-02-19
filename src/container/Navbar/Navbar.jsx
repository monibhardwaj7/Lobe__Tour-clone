import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";

import { images } from "../../constants";
import "./Navbar.scss";

const Navbar = () => {
  const [selected, setSelected] = useState("Tour");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__Navbar">
      <div className="app__Navbar-logo">
        <img src={images.logo} />
      </div>
      <ul className="app__Navbar-links">
        {["Overview", "Examples", "Tour", "Blog", "Help"].map((item) => (
          <li className="app__flex" key={`link-${item}`}>
            <motion.a
              href={`#${item}`}
              style={{ color: selected === item && "#333" }}
              whileHover={{ scale: 1.04 }}
            >
              {item}
            </motion.a>
          </li>
        ))}
      </ul>
      <motion.button
        className="btn btn-lg download-btn"
        whileHover={{ scale: 1.06 }}
      >
        Download
      </motion.button>

      <div className="app__Navbar-menu">
        <HiMenu onClick={() => setToggle(true)} />

        {toggle && (
          <>
            <div>
              <IoMdClose onClick={() => setToggle(false)} />

              <img src={images.logo} width={80} />

              <hr style={{ marginTop: "25px" }} />

              <ul>
                {["Overview", "Examples", "Tour", "Blog", "Help"].map(
                  (item) => (
                    <motion.li
                      key={`link-${item}`}
                      whileHover={{ scale: 1.04 }}
                    >
                      <a
                        href={`#${item}`}
                        onClick={() => setToggle(false)}
                        style={{ color: selected === item && "#333" }}
                      >
                        {item}
                      </a>
                    </motion.li>
                  )
                )}
              </ul>

              <motion.button
                className="btn btn-lg"
                whileHover={{ scale: 1.02 }}
              >
                Download
              </motion.button>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
