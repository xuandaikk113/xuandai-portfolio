import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { textVariant, fadeIn } from "../utils/motion";
import { styles } from "../styles";
const Tech = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <p className={`${styles.sectionSubText} `}>My Skills</p>
        <h2 className={`${styles.sectionHeadText}`}>Technical Skills.</h2>
      </motion.div>
      <motion.div
        variants={fadeIn("up", "spring", 0.3, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.7 }}
        className="mt-20 flex flex-row flex-wrap justify-center gap-10"
      >
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default SectionWrapper(Tech, "");
