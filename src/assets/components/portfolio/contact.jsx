 

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
