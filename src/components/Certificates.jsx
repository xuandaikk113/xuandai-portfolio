import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { certificates } from "../constants";

const CertificateCard = ({ index, name, description, image }) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.3, 1.2)}
    initial="hidden"
    whileInView="show"
    // viewport={{ once: true, amount: 0.7 }}
    whileHover={{ scale: 1.05 }}
    className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
  >
    <p className="text-white font-black text-[24px]">***</p>

    <div className="mt-1">
      <div className="mt-3 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col">
          <p className="text-white font-bold text-[24px]">
            <span className="blue-text-gradient"></span> {name}
          </p>
          <p className="mt-2 text-white-90 font-medium text-[16px]">
            <span className="blue-text-gradient"></span> {description}
          </p>
        </div>
      </div>
      <img
        src={image}
        alt={`feedback_by-${name}`}
        className="mt-4 w-full h-full object-cover"
      />
    </div>
  </motion.div>
);

const Certificates = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div
          variants={textVariant()}
          initial="hidden"
          whileInView="show"
          // viewport={{ once: true, amount: 0.7 }}
        >
          <p className={styles.sectionSubText}>certificates i have achieved</p>
          <h2 className={styles.sectionHeadText}>Certificates.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {certificates.map((certificate, index) => (
          <CertificateCard
            key={certificate.name}
            index={index}
            {...certificate}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Certificates, "certificates");
