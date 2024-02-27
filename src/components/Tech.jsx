import { motion } from "framer-motion"; // Import motion from framer-motion
import React from "react";
import { technologies } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles"; // Import styles from the appropriate file
import { textVariant } from "../utils/motion"; // Import textVariant from utils/motion
import { BallCanvas } from "./canvas";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}> {/* Add motion.div with variants */}
        <p className={`${styles.sectionSubText} text-center`}>
          WHAT I HAVE LEARN SO FAR
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
        Computer Programming Languages.
        </h2>
      </motion.div>
      <div className='flex flex-row flex-wrap justify-center gap-10'>
        {technologies.map((technology) => (
          <div className='w-28 h-28' key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
