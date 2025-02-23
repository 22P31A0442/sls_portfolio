 
import React, { useState } from "react";
import mystyles from "./styles.module.css";
import { VscThreeBars } from "react-icons/vsc";
import { RxCross2 } from "react-icons/rx";
import { IoHomeOutline } from "react-icons/io5"; 
import { GrCertificate } from "react-icons/gr";
import { FaGraduationCap } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";

export default function HomePage() {
    const [open, setopen] = useState(false);
    const togglemenu = () => {
        setopen(!open);
    };

    return(
        <>
            <div className={mystyles.Headerr}>
                <div className={mystyles.header_logo}>
                    <img src={"/headlogo.png"} alt="cracked" width={'60px'} height={'60px'} />
                </div>
                <div className={mystyles.heads}>
                    <a href="#Home" className={mystyles.menuItem}><IoHomeOutline size={'18px'}/> Home</a>
                    <a href="#About" className={mystyles.menuItem}><IoPersonOutline size={'18px'}/> About</a>
                    <a href="#Education" className={mystyles.menuItem}><FaGraduationCap size={'18px'}/> Education</a>
                    <a href="#Certifications" className={mystyles.menuItem}><GrCertificate size={'18px'}/> Certifications</a>
                    <a href="#Projects" className={mystyles.menuItem}><AiOutlineFundProjectionScreen size={'18px'}/> Projects</a> 
                </div>
                <div onClick={togglemenu} className={mystyles.togglemenu}>
                    {open ? <RxCross2 /> : <VscThreeBars />}
                </div>
            </div>
            <div className={`${mystyles.overlay} ${open ? mystyles.open : ''}`} onClick={togglemenu}></div>
            <div className={`${mystyles.openMenu} ${open ? mystyles.open : ''}`}>
                <a href="#Home" className={mystyles.menuItem} onClick={togglemenu}><IoHomeOutline size={'18px'}/> Home</a>
                <a href="#About" className={mystyles.menuItem} onClick={togglemenu}><IoPersonOutline size={'18px'}/> About</a>
                <a href="#Education" className={mystyles.menuItem} onClick={togglemenu}><FaGraduationCap size={'18px'}/> Education</a>
                <a href="#Certifications" className={mystyles.menuItem} onClick={togglemenu}><GrCertificate size={'18px'}/> Certifications</a>
                <a href="#Projects" className={mystyles.menuItem} onClick={togglemenu}><AiOutlineFundProjectionScreen size={'18px'}/> Projects</a> 

            </div>
        </>
    );
}
