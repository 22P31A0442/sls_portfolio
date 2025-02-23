 
import React from "react";
import mystyles from "./styles.module.css";
const About = () => {
  return (
    <>
      <div className={`${mystyles.abouthead} ${mystyles.mainhead}`} id="About" style={{ marginBottom: "20px" }}>About</div>
      <div className={mystyles.aboutline} style={{ marginBottom: "20px" }}>
        <div className={mystyles.aboutlineone}>
          <div className={mystyles.aboutlinetwo}></div>
        </div>
      </div>
      <div className={mystyles.abouttextcon} style={{ marginBottom: "20px" }}>
        <div className={mystyles.abouttext}>
          <p>
            I am a self-motivated and enthusiastic learner with a profound passion for problem-solving and emerging technologies. I am skilled in programming and web development, with hands-on experience in React.js and related technologies. As a proactive team player with a growth mindset, I am eager to contribute to the tech industry and make a meaningful impact.
          </p>
        </div>
      </div>
      <div className={mystyles.aboutmaincon} style={{ marginBottom: "30px" }}>
        <div className={mystyles.aboutimg} style={{ marginRight: "20px" }}>
          <img
            src="/sls.jpg"
            alt="Lakshmi Sai Sigatapu"
            className={mystyles.aboutimgone}
            style={{ borderRadius: "10px", marginBottom: "20px" }}
          />
        </div>
        <div className={mystyles.aboutimgcon}>
          <h1 style={{ marginBottom: "10px" }}>Web Developer</h1> 
          <p style={{ marginBottom: "20px" }}>
            I am committed to delivering high-quality web solutions. My expertise lies in developing user-friendly, responsive websites that provide exceptional user experiences. With a keen eye for detail and a strong grasp of modern web development practices, I strive to stay ahead of industry trends and continuously improve my skills.
          </p>
          <div className={mystyles.aboutdata} style={{ marginBottom: "20px" }}>
            <div style={{ marginBottom: "10px" }}>
              <div style={{ marginBottom: "10px" }}>
                <b>Name:</b> Lakshmi Sai Sigatapu &nbsp; &nbsp;
              </div>
              <div style={{ marginBottom: "10px" }}>
                <b>Website:</b> <a href="https://slsportfolio.vercel.app" target="_blank" rel="noopener noreferrer">Link</a>
              </div>
              <div style={{ marginBottom: "10px" }}>
                <b>Phone:</b> +91 6304481993
              </div>
              <div style={{ marginBottom: "10px" }}>
                <b>City:</b> Kakinada, A.P
              </div>
            </div>
            <div>
              <div style={{ marginBottom: "10px" }}>
                <b>Birthday:</b> 29 Jan 2004
              </div>
              <div style={{ marginBottom: "10px" }}>
                <b>Age:</b> 21
              </div>
              <div style={{ marginBottom: "10px" }}>
                <b>Qualification:</b> Undergraduate
              </div>
              <div style={{ marginBottom: "10px" }}>
                <b>Email:</b> <a href="mailto:lakshmisigatapu@gmail.com">lakshmisigatapu@gmail.com</a>
              </div>
            </div>
          </div>
          <p>
            Driven by a passion for learning and innovation, I am continuously exploring new technologies and methodologies to enhance my expertise and contribute to impactful projects. I believe in the power of collaboration and am always eager to work with like-minded professionals to achieve common goals.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
