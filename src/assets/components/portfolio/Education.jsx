
// import React from "react";
// import c from "./styles.module.css";

// const educationData = [
//     { year: "B.Tech", institute: "Aditya College of Engineering and Technology", field: "Electronics and Communication Engineering", score: "CGPA: 7.51" },
//     { year: "Intermediate", institute: "Pragati Junior College", field: "MPC", score: "Points: 9.23" },
//     { year: "10th Standard", institute: "Z P High School", field: "", score: "Points: 10" }
// ];

// const Education = () => {
//     return (
//         <>
//             <div className={c.abouthead} id="Education">Education</div>
//             <div className={c.aboutline}>
//                 <div className={c.aboutlineone}>
//                     <div className={c.aboutlinetwo}></div>
//                 </div>
//             </div>
//             <div className={c.educationContainer}>
//                 <div className={c.timeline}>
//                     {educationData.map((item, index) => (
//                         <div key={index} className={`${c.timelineItem} ${c.fadeInUp}`}>
//                             <div className={c.timelineContent}>
//                                 <h3 className={c.year}>{item.year}</h3>
//                                 <h4 className={c.institute}>{item.institute}</h4>
//                                 <p className={c.field}>{item.field}</p>
//                                 <p className={c.score}>{item.score}</p>
//                                 {item.milestones && (
//                                     <ul className={c.milestones}>
//                                         {item.milestones.map((milestone, i) => (
//                                             <li key={i}>{milestone}</li>
//                                         ))}
//                                     </ul>
//                                 )}
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Education;

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
    CGPA: "7.51(present)",
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
