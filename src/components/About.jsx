import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon, link }) => (
  <Tilt
    tiltMaxAngleX={45}
    tiltMaxAngleY={45}
    scale={1}
    transitionSpeed={450}
    className='xs:w-[250px] w-full'
  >
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className='block w-full'
      >
        <div className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col cursor-pointer hover:bg-[#1a1538] transition-colors duration-300'>
          <img
            src={icon}
            alt={title}
            className='w-24 h-24 object-contain'
          />

          <h3 className='text-white text-[20px] font-bold text-center'>
            {title}
          </h3>
        </div>
      </a>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>More about me...</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3.5xl leading-[30px] text-justify'
      >
      👋 Hi, my name is Luis!
      💻 I’m a Software Engineer with 7+ years of experience in programming. I graduated from university in 2020 and I’m currently based in Lima, Peru 🇵🇪.
      ⚙️ My favorite backend stack is Java 8+, especially using frameworks like Spring and Quarkus. Over the past three years, I’ve been working extensively with microservices architectures and the reactive stack provided by Spring.
      🧠 During this time, I’ve also gained experience with NoSQL databases such as MongoDB and Redis, as well as key concepts like concurrency, backpressure, distributed tracing, and microservices patterns.
      ☁️ I have hands-on experience with cloud technologies including AWS, GCP, and Azure, along with modern tools and best practices for building scalable systems.
      🌐 In addition to backend development, I also have full-stack experience, working with frontend technologies like Angular and Vue.js, as well as mobile development.
      ❤️ I truly love coding and solving challenging problems. More than just a job, software development is something I genuinely enjoy and consider an important part of my life.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10 justify-center items-center'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
