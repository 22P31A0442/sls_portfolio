import React from "react";
import styles from "./styles.module.css";
import { VscGithubAlt } from "react-icons/vsc";
import { SiLeetcode } from "react-icons/si";
import { SiGeeksforgeeks } from "react-icons/si";
import { LiaHackerrank } from "react-icons/lia";
import { SiCodechef } from "react-icons/si";
const Footerr = () => {
  return(
    <>
    <div className={styles.footermain}>
      <div className={styles.footercon}>
        <div className={styles.iconscon}>
          
        <a href="https://github.com/22P31A0442" target="_blank" rel="noopener noreferrer"><div className={styles.iconout1}><VscGithubAlt /></div></a>
        <a href="https://leetcode.com/u/Lakshmi_Sai_Sigatapu/" target="_blank" rel="noopener noreferrer"> <div className={styles.iconout2}><SiLeetcode /></div></a>
        <a href="https://www.geeksforgeeks.org/user/lakshmisai4v3h/" target="_blank" rel="noopener noreferrer"><div className={styles.iconout3}><SiGeeksforgeeks /> </div></a>
        <a href="https://www.hackerrank.com/profile/22P31A0442" target="_blank" rel="noopener noreferrer"><div className={styles.iconout4}><LiaHackerrank /> </div></a>
        <a href="https://www.codechef.com/users/lakshmisai42" target="_blank" rel="noopener noreferrer"> <div className={styles.iconout5}><SiCodechef /> </div></a>

        </div> 
      </div>
    </div>
    </>
  )
}
export default Footerr;