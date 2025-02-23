// import React from "react";
// import mystyles from "./styles.module.css";
// import { SiCisco, SiJavascript, SiPython, SiReact } from "react-icons/si";

// const certifications = [
//   {
//     id: 1,
//     icon: <SiCisco />,
//     title: "C Certification",
//     description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nam eligendi nostrum dicta cupiditate ipsa earum esse! Quia distinctio ex, assumenda et officiis cum iusto eligendi placeat tenetur, sed itaque.",
//     iconStyle: mystyles.iconCisco,
//     linkk: "https://drive.google.com/file/d/1T5zz6fwq9D-Qphvx8WgMMVnsbUmSQwi8/view?usp=sharing",
//   },
//   {
//     id: 2,
//     icon: <SiJavascript />,
//     title: "Python Certification",
//     description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nam eligendi nostrum dicta cupiditate ipsa earum esse! Quia distinctio ex, assumenda et officiis cum iusto eligendi placeat tenetur, sed itaque.",
//     iconStyle: mystyles.iconJS,
//     linkk: "https://drive.google.com/file/d/1LKNRtbP9keh3vI-GgNoAowPjg9TVb7JQ/view?usp=sharing",
//   },
//   {
//     id: 3,
//     icon: <SiPython />,
//     title: "Python Certification",
//     description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nam eligendi nostrum dicta cupiditate ipsa earum esse! Quia distinctio ex, assumenda et officiis cum iusto eligendi placeat tenetur, sed itaque.",
//     iconStyle: mystyles.iconPython,
//     linkk: "https://drive.google.com/file/d/17zcX9_GWObnhBBxA2_7wFN-_p8ApgBpm/view?usp=sharing",
//   },
//   {
//     id: 4,
//     icon: <SiReact />,
//     title: "Java Certification",
//     description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nam eligendi nostrum dicta cupiditate ipsa earum esse! Quia distinctio ex, assumenda et officiis cum iusto eligendi placeat tenetur, sed itaque.",
//     iconStyle: mystyles.iconReact,
//     linkk: "https://drive.google.com/file/d/1RzfTuk-tOTrl7WPgJaVA_KMtZvoEWkKS/view?usp=sharing",
//   },
//   {
//     id: 5,
//     icon: <SiCisco />,
//     title: "Java Certification",
//     description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nam eligendi nostrum dicta cupiditate ipsa earum esse! Quia distinctio ex, assumenda et officiis cum iusto eligendi placeat tenetur, sed itaque.",
//     iconStyle: mystyles.iconCisco,
//     linkk: "https://drive.google.com/file/d/143vKoYSw4iO9k5X7BqT-asTcqJryu9Q8/view?usp=sharing",
//   },
//   {
//     id: 6,
//     icon: <SiJavascript />,
//     title: "HTML & CSS Certification",
//     description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nam eligendi nostrum dicta cupiditate ipsa earum esse! Quia distinctio ex, assumenda et officiis cum iusto eligendi placeat tenetur, sed itaque.",
//     iconStyle: mystyles.iconJS,
//     linkk: "https://drive.google.com/file/d/1ZE_tGp0VoWgoGvAuUBkem5md7s0fFwMj/view?usp=sharing",
//   },
//   {
//     id: 7,
//     icon: <SiPython />,
//     title: "JavaScript Certification",
//     description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nam eligendi nostrum dicta cupiditate ipsa earum esse! Quia distinctio ex, assumenda et officiis cum iusto eligendi placeat tenetur, sed itaque.",
//     iconStyle: mystyles.iconPython,
//     linkk: "https://drive.google.com/file/d/1HQD9B0xgf0XJCKH55nX3tV1kdDHPlU9X/view?usp=sharing",
//   },
//   {
//     id: 8,
//     icon: <SiReact />,
//     title: "JavaScript Essentials 1",
//     description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nam eligendi nostrum dicta cupiditate ipsa earum esse! Quia distinctio ex, assumenda et officiis cum iusto eligendi placeat tenetur, sed itaque.",
//     iconStyle: mystyles.iconReact,
//     linkk: "https://drive.google.com/file/d/1eZNT4FxHuPKHj68316V_IKwTpGCB-Sai/view?usp=sharing",
//   },
//   {
//     id: 9,
//     icon: <SiCisco />,
//     title: "JavaScript Essentials 2",
//     description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nam eligendi nostrum dicta cupiditate ipsa earum esse! Quia distinctio ex, assumenda et officiis cum iusto eligendi placeat tenetur, sed itaque.",
//     iconStyle: mystyles.iconCisco,
//     linkk: "https://drive.google.com/file/d/1GPnBn353kO6wCGirrFDrRcnVnebuKJb3/view?usp=sharing",
//   },
  
// ];

// const Certifications = () => {
//   return (
//     <>
//       <div className={`${mystyles.abouthead} ${mystyles.mainhead}`} id="Certifications">Certifications</div>
//       <div className={mystyles.aboutline}>
//         <div className={mystyles.aboutlineone}>
//           <div className={mystyles.aboutlinetwo}></div>
//         </div>
//       </div>
//       <div className={mystyles.cardcon}>
//         {certifications.map((cert) => (
//           <div key={cert.id} className={mystyles.cards}>
//             <div className={`${mystyles.iconcon} ${cert.iconStyle}`}>{cert.icon}</div>
//             <div style={{ marginTop: "10px" }}>{cert.title}</div>
//             <p style={{ margin: "10px" }}>{cert.description}</p>
//             <a href={cert.linkk} target="_blank" rel="noopener noreferrer">
//                 <button>View</button>
//             </a>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default Certifications;
import React from "react";
import c from "./styles.module.css";

const certifications = [
    { name: "C Certification", provider: "Cisco", date: "Jan 2023", url: "https://drive.google.com/file/d/1T5zz6fwq9D-Qphvx8WgMMVnsbUmSQwi8/view?usp=sharing" },
    { name: "Python Certification", provider: "Cisco", date: "Nov 2023", url: "https://drive.google.com/file/d/1LKNRtbP9keh3vI-GgNoAowPjg9TVb7JQ/view?usp=sharing" },
    { name: "Python Certification", provider: "IT Specaialst", date: "July 2024", url: "https://drive.google.com/file/d/17zcX9_GWObnhBBxA2_7wFN-_p8ApgBpm/view?usp=sharing" },
    { name: "Java Certification", provider: "Oracle", date: "May 2023", url: "https://drive.google.com/file/d/1RzfTuk-tOTrl7WPgJaVA_KMtZvoEWkKS/view?usp=sharing" },
    { name: "Java Certification", provider: "IT Specaialst", date: "May 2023", url: "https://drive.google.com/file/d/143vKoYSw4iO9k5X7BqT-asTcqJryu9Q8/view?usp=sharing" },
    { name: "HTML & CSS Certification", provider: "IT Specaialst", date: "May 2023", url: "https://drive.google.com/file/d/1ZE_tGp0VoWgoGvAuUBkem5md7s0fFwMj/view?usp=sharing" },
    { name: "JavaScript Certification", provider: "HackerRank", date: "Sep 2024", url: "https://drive.google.com/file/d/1HQD9B0xgf0XJCKH55nX3tV1kdDHPlU9X/view?usp=sharing" },
    { name: "JavaScript Essentials 1", provider: "Cisco", date: "Nov 2024", url: "https://drive.google.com/file/d/1eZNT4FxHuPKHj68316V_IKwTpGCB-Sai/view?usp=sharing" },
    { name: "JavaScript Essentials 2", provider: "Cisco", date: "Dec 2024", url: "https://drive.google.com/file/d/1GPnBn353kO6wCGirrFDrRcnVnebuKJb3/view?usp=sharing" },
];

const Certifications = () => {
    return (
        <>
            <div className={`${c.abouthead} ${c.mainhead}`} id="Certifications">Certifications</div>
            <div className={c.aboutline} style={{marginBottom: "30px"}}>
                <div className={c.aboutlineone}>
                    <div className={c.aboutlinetwo}></div>
                </div>
            </div>
            <div className={c.certificationsContainer}>
                {certifications.map((cert, index) => (
                    <div key={index} className={c.certificationCard}>
                        <div className={c.icon}>📜</div>
                        <p>{cert.name} | {cert.provider} | <span className={c.date}>{cert.date}</span></p>
                        <a href={cert.url} target="_blank" rel="noopener noreferrer">
                            <button className={c.viewButton} style={{backgroundColor:'#F5C729' }}>View Certification</button>
                        </a>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Certifications;

