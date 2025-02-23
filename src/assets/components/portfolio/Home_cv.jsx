import React from "react";
import mystyles from "./styles.module.css";
import { GoDownload } from "react-icons/go";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { TbBrandLeetcode } from "react-icons/tb";
import { SiGeeksforgeeks } from "react-icons/si";
import { LiaHackerrank } from "react-icons/lia";
import { SiCodechef } from "react-icons/si"; 
import Typewriter from 'typewriter-effect';
const Homecv = () => {
  return(
    <>
    <div className={mystyles.firstmain}>
        <div className={mystyles.firstleft}>
          <div className={mystyles.firstleftcon}>
          <div className={mystyles.firstimgcon}>
              <img src="/sls.jpg" alt="crecked" width={"280px"} height={"280px"}/>
          </div></div>
        </div>
        <div className={mystyles.firstright}>
          <p>Hello, I'm</p>
          <div style={{fontSize:"30px",fontWeight:"bold"}}>I am Lakshmi sai</div>
           
            <Typewriter
              options={{
                strings: [
                  "Web Developer",
                  "A FULL STACK DEVELOPER",
                  "A COMPETITIVE PROGRAMMER",
                ],
                autoStart: true,
                loop: true,
              }}
            /> 
          
          <a href="/Lakshmi_Sai_resume.pdf" download target="_blank" rel="noopener noreferrer">
          <button className={mystyles.resumebut} style={{marginTop:"20px"}}><GoDownload /> Resume</button>
          </a>
          <div className={mystyles.hhomeicons}>
          <a href="https://github.com/22P31A0442" style={{ textDecoration: "none" }} target="_blank" rel="noopener noreferrer"><div><FaGithub /></div></a>
          <a href="https://www.linkedin.com/in/lakshmi-sai-sigatapu-861609258/" style={{textDecoration:"none" }} target="_blank" rel="noopener noreferrer"><div><CiLinkedin /></div></a>
          <a href="https://leetcode.com/u/Lakshmi_Sai_Sigatapu/" style={{textDecoration:"none"}} target="_blank" rel="noopener noreferrer"><div><TbBrandLeetcode /></div></a>
          <a href="https://www.geeksforgeeks.org/user/lakshmisai4v3h/" style={{textDecoration:"none"}} target="_blank" rel="noopener noreferrer"><div><SiGeeksforgeeks /></div></a>
          <a href="https://www.hackerrank.com/lakshmi_sai_sigatapu" style={{textDecoration:"none"}} target="_blank" rel="noopener noreferrer"><div><LiaHackerrank /></div></a>
          <a href="https://www.codechef.com/users/lakshmisai42" style={{textDecoration:"none"}} target="_blank" rel="noopener noreferrer"><div><SiCodechef /></div></a>

          </div>
        </div>
    </div>
    </>
  )
}
export default Homecv;
