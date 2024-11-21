import { motion } from "framer-motion";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
      style={{ height: "75vh" }} // Adjust height to 70% of viewport height
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <p className="mt-4 text-lg text-gray-400">
          Feel free to contact me at the following information:
        </p>
        <div className="flex flex-col justify-center gap-8">
          <p className="mt-8 text-xl text-white">
            Email:{" "}
            <a
              href="mailto:nguyenvoxuandaikk113@gmail.com"
              className="ml-2 text-blue-400 underline"
            >
              nguyenvoxuandaikk113@gmail.com
            </a>
          </p>
          <p className="mt-8 text-xl text-white">
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/đài-nguyễn-682185210"
              className="ml-2 text-blue-400 underline"
            >
              Đài Nguyễn
            </a>
          </p>
          <p className="mt-8 text-xl text-white">
            Zalo: <span className="ml-2 text-blue-400">0868325521</span>
          </p>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="xl:flex-1 xl:h-auto md:h-[450px] h-[300px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
