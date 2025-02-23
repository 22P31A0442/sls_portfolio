// import React, { useRef, useState } from "react";
// import cs from "./styles.module.css";
// import emailjs from "@emailjs/browser";
// import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
// import { SiGeeksforgeeks, SiCodechef, SiLeetcode } from "react-icons/si";
// import { AiFillMail } from "react-icons/ai";
// import { motion } from "framer-motion";
// import { FaHackerrank } from "react-icons/fa6";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: ""
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const form = useRef();
//   const [result, setResult] = useState("");

//   const sendEmail = async (event) => {
//     event.preventDefault();
//     setResult("Sending....");
//     const formData = new FormData(event.target);

//     formData.append("access_key", "5e8fa7d4-1a2c-4fc1-ba64-9865dc9a43a2");

//     const response = await fetch("https://api.web3forms.com/submit", {
//       method: "POST",
//       body: formData,
//     });

//     const data = await response.json();

//     if (data.success) {
//       setResult("Form Submitted Successfully");
//       event.target.reset();
//     } else {
//       console.log("Error", data);
//       setResult(data.message);
//     }
//     alert(data.success ? "Response Submitted Successfully" : data.message);
//   };

//   return (
//     <motion.div 
//       className="page"
//       initial={{ x: "100vw", opacity: 0 }}
//       animate={{ x: 0, opacity: 1 }}
//       exit={{ x: "-100vw", opacity: 0 }}
//       transition={{ duration: 0.6, ease: "easeOut" }}
//     >
//       <section className={cs.contactContainer}>
//         <div className={cs.contactContent}>
//           <h2 className={cs.contactHeading}>
//             CONTACT <span className={cs.highlight}>ME</span>
//           </h2>
//           <p className={cs.contactSubtitle}>
//             I’M ALWAYS OPEN TO DISCUSSING PRODUCT DESIGN WORK OR PARTNERSHIPS.
//           </p>

//           <div className={cs.contt1}>
//             <div className={cs.contactGrid}>
//               <div className={cs.contactInfo}>
//                 <ul>
//                   <li>
//                     <a href="sms:+91 6304481993" className={cs.link}>
//                       <FaWhatsapp className={cs.i1} />
//                       <span>+91 6304481993</span>
//                     </a>
//                   </li>
//                   <li>
//                     <a href="mailto:lakshmisaisigatapu@gmail.com" className={cs.link}>
//                       <AiFillMail className={cs.i1} />
//                       <span>lakshmisaisigatapu@gmail.com</span>
//                     </a>
//                   </li>
//                   <li>
//                     <a href="https://github.com/22P31A0442" target="_blank" rel="noopener noreferrer" className={cs.link}>
//                       <FaGithub className={cs.i1} />
//                       <span>Github</span>
//                     </a>
//                   </li>
//                   <li>
//                     <a href="https://www.linkedin.com/in/lakshmi-sai-sigatapu-861609258/" target="_blank" rel="noopener noreferrer" className={cs.link}>
//                       <FaLinkedin className={cs.i1} />
//                       <span>LinkedIn</span>
//                     </a>
//                   </li>
//                 </ul>

//                 <div className={cs.socialLinks}>
//                   <h6>Social Profiles</h6>
//                   <div className={cs.icons}>
//                     <a href="https://www.hackerrank.com/profile/22P31A0442" target="_blank" rel="noopener noreferrer"><FaHackerrank className={cs.i1} /></a>
//                     <a href="https://leetcode.com/u/Lakshmi_Sai_Sigatapu/" target="_blank" rel="noopener noreferrer"><SiLeetcode className={cs.i1} /></a>
//                     <a href="https://www.codechef.com/users/lakshmisai42" target="_blank" rel="noopener noreferrer"><SiCodechef className={cs.i1} /></a>
//                     <a href="https://www.geeksforgeeks.org/user/lakshmisai4v3h/" target="_blank" rel="noopener noreferrer"><SiGeeksforgeeks className={cs.i1} /></a>
//                   </div>
//                 </div>
//               </div>

//               <div className={cs.contactForm}>
//                 <p>
//                   If you have any suggestion, project or even you want to say Hello.. please fill out the form below.
//                 </p>
//                 <form ref={form} onSubmit={sendEmail}>
//                   <div className={cs.inputGroup}>
//                     <input 
//                       type="text" 
//                       name="name" 
//                       placeholder="Your Name" 
//                       value={formData.name} 
//                       onChange={handleChange} 
//                       required 
//                     />
//                   </div>
//                   <div className={cs.inputGroup}>
//                     <input 
//                       type="email" 
//                       name="email" 
//                       placeholder="Your Email" 
//                       value={formData.email} 
//                       onChange={handleChange} 
//                       required 
//                     />
//                   </div>
//                   <div className={cs.inputGroup}>
//                     <textarea 
//                       name="message" 
//                       placeholder="Your Message" 
//                       value={formData.message} 
//                       onChange={handleChange} 
//                       required 
//                     ></textarea>
//                   </div>
//                   <button type="submit" className={cs.sendBtn}>
//                     <i className="fa fa-paper-plane"></i> Send Message
//                   </button>
//                 </form>

//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </motion.div>
//   );
// };

// export default Contact;

import React, { useRef, useState } from "react";
import cs from "./styles.module.css";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const form = useRef();
  const [result, setResult] = useState("");

  const sendEmail = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "5e8fa7d4-1a2c-4fc1-ba64-9865dc9a43a2");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
    alert(data.success ? "Response Submitted Successfully" : data.message);
  };

  return (
    <motion.div 
      className="page"
      initial={{ x: "100vw", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "-100vw", opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <center>
        <section className={cs.contactContainer}>
          <div className={cs.contactContent}>
            <div className={`${cs.abouthead} ${cs.mainhead}`} id="Contact">Contact <span style={{color: "black"}}> &nbsp;me</span></div>
            <div className={cs.aboutline} style={{marginBottom: "30px"}}>
              <div className={cs.aboutlineone}>
                <div className={cs.aboutlinetwo}></div>
              </div>
            </div>

            <div className={cs.contactForm}>
              <form ref={form} onSubmit={sendEmail}>
                <div className={cs.inputGroup}>
                  <input 
                    type="text" 
                    name="name" 
                    placeholder="Your Name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
                <div className={cs.inputGroup}>
                  <input 
                    type="email" 
                    name="email" 
                    placeholder="Your Email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
                <div className={cs.inputGroup}>
                  <textarea 
                    name="message" 
                    placeholder="Your Message" 
                    value={formData.message} 
                    onChange={handleChange} 
                    required 
                  ></textarea>
                </div>
                <button type="submit" className={cs.sendBtn}>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </center>
    </motion.div>
  );
};

export default Contact;
