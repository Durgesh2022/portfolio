import { motion } from "framer-motion";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import "react-vertical-timeline-component/style.min.css";
import { github } from "../assets";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
const source_link = "https://durgsh2022.github.io/copytube2/";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt="icon"
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div className="flex justify-center items-center flex-col">
            <img
              src="src\assets\jobit.png"
              alt={experience.title}
              className="w-[80%] h-auto mb-4"
            />

        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p
          className="mt-2 text-secondary text-[14px]"
          style={{ textAlign: "center" }}
        >
          {experience.points}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {experience.tags.map((tag, index) => (
            <p key={`tag-${index}`} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
        <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
          <div
            onClick={() => window.open(experience.source_code_link, "_blank")}
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <img
              src={github}
              alt="source code"
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
        </div>
      </div>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>My Work</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Projects.</h2>
        <p className={`${styles.sectionSubText} text-center`}>
          Following projects showcase my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </p>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
