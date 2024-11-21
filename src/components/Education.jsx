import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const Education = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="mb-10">
        <p className={styles.sectionSubText}>where i graduated...</p>
        <h2 className={styles.sectionHeadText}>Education.</h2>
      </motion.div>
      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-25 mb-10 text-white-100 text-[30px] max-w-7xl leading-[30px] flex flex-col sm:flex-row justify-between"
      >
        <span>DANANG UNIVERSITY OF SCIENCE AND TECHNOLOGY</span>
        <span>09/2017 - 03/2022</span>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.4, 1)}
        className="mt-20 text-secondary text-[20px] sm:text-[25px] max-w-3xl leading-[30px]"
      >
        &nbsp; ✯ Major: Control Engineering & Automation
      </motion.p>
      <motion.p
        variants={fadeIn("", "", 0.7, 1)}
        className="mt-20 mb-30 text-secondary text-[20px] sm:text-[25px] max-w-3xl leading-[30px]"
      >
        &nbsp; ✯ Technology Degree: Engineer
      </motion.p>
      <motion.p
        variants={fadeIn("", "", 1, 1)}
        className="mt-20 text-secondary text-[20px] sm:text-[25px] max-w-3xl leading-[30px]"
      >
        &nbsp; ✯ Classification: Good
      </motion.p>
      <br />
      <br />
    </>
  );
};

export default SectionWrapper(Education, "education");
