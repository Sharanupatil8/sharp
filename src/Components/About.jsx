import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { style } from "../style";
import { fadeIn, textVariant } from "./utils/motion";
import { services } from "../constants";

import { SectionWrapper } from "./hoc";

function About() {
  return (
    <div className="">
      <motion.div variants={textVariant()}>
        <p className={`${style.sectionSubText}`}>our services</p>
        <h2 className={`${style.sectionHeadText}`}>Services.</h2>
        <motion.p
          className="text-secondary mt-4 text-[17px] max-w-3xl leading-[30px]"
          variants={fadeIn("", "", 0.1, 1)}
        >
          Welcome to our digital agency! We specialize in crafting compelling
          websites and implementing effective digital marketing strategies to
          boost your online presence. With our expertise, we'll help your brand
          stand out in the vast digital landscape, ensuring maximum visibility
          and engagement. Let us take your online presence to new heights!
        </motion.p>
      </motion.div>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((services, index) => {
          return (
            <Tilt
              options={{
                max: 45,
                scale: 1,
                speed: 420,
              }}
              className="xs:w-[250px] w-full"
              key={services.title}
            >
              <motion.div
                className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
                variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
              >
                <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
                  <img
                    src={services.icon}
                    className="w-16 h-16 object-contain"
                    alt=""
                  />
                  <p className="text-white text-[20px] text-center font-bold">
                    {services.title}
                  </p>
                </div>
              </motion.div>
            </Tilt>
          );
        })}
      </div>
    </div>
  );
}

export default SectionWrapper(About, "about");
