import React, { useState } from "react";
import { motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";

import "./Content.scss";

const Content = () => {
  const [frame, setFrame] = useState(false);

  return (
    <div>
      <div className="app__Content app__flex">
        <h1>
          Lobe <span style={{ color: "#04ddb2" }}>Tour</span>
        </h1>

        <p>
          Build your first machine learning model in ten minutes. No code or
          experience required.
        </p>

        <div>
          <motion.img
            src="https://www.lobe.ai/assets/tour/Video.jpg"
            whileHover={{ scale: 1.01 }}
            transition={{ type: "tween" }}
            onClick={() => setFrame(true)}
          />
          {console.log(frame)}
        </div>

        {frame && (
          <div className="frame__background">
            <div></div>
            <IoMdClose onClick={() => setFrame(false)} />
            <div className="app__frame">
              <div>
                <div>
                  <iframe
                    src="https://www.youtube-nocookie.com/embed/Mdcw3Sb98DA?autoplay=1&modestbranding=1"
                    allow="autoplay; encrypted-media"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Content;
