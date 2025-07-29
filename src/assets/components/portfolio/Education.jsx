 

import React from "react";
import mystyles from "./styles.module.css";
import { FaSchool, FaGraduationCap, FaUniversity } from "react-icons/fa";

const educationDetails = [
  {
    id: 1,
    icon: <FaSchool />,
    title: "10th Grade",
    institution: "Z P High School",
    year: "2020",
    CGPA: "10.0",
    iconStyle: mystyles.iconSchool,
  },
  {
    id: 2,
    icon: <FaGraduationCap />,
    title: "Intermediate",
    institution: "Pragati Junior College",
    year: "2022",
    CGPA: "9.23",
    iconStyle: mystyles.iconIntermediate,
  },
  {
    id: 3,
    icon: <FaUniversity />,
    title: "B.Tech",
    institution: "Aditya college of Engineering and Technology",
    year: "2026",
    CGPA: "7.53(present)",
    iconStyle: mystyles.iconUniversity,
  },
];

const Education = () => {
  return (
    <>
      <div className={`${mystyles.abouthead} ${mystyles.mainhead}`} id="Education">Education</div>
      <div className={mystyles.aboutline} style={{marginBottom: "30px"}}>
        <div className={mystyles.aboutlineone}>
          <div className={mystyles.aboutlinetwo}></div>
        </div>
      </div>
      <div className={mystyles.cardcon}>
        {educationDetails.map((edu) => (
          <div key={edu.id} className={mystyles.cards}>
            <div className={`${mystyles.iconcon} ${edu.iconStyle}`}>{edu.icon}</div>
            <div style={{ marginTop: "10px" }}>{edu.title}</div>
            <p style={{ margin: "10px" }}>Institution: {edu.institution}</p>
            <p style={{ margin: "10px" }}>Year: {edu.year}</p>
            <p style={{ margin: "10px" }}>CGPA: {edu.CGPA}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Education;
