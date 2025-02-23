 

  
import React from "react";
import mystyles from "./styles.module.css";

const Projectt = () => {
    return (
        <>
            <div className={`${mystyles.abouthead} ${mystyles.mainhead}`} id="Projects">Project</div>
            <div className={mystyles.aboutline}>
                <div className={mystyles.aboutlineone}>
                    <div className={mystyles.aboutlinetwo}></div>
                </div>
            </div>

            <div className={mystyles.promain}>
                <div className={mystyles.proout}>
                    <div style={{margin: '5%'}}>
                        <center><img src="https://blog.ipleaders.in/wp-content/uploads/2021/07/tourism20150818-1-1.jpg" alt="Tourism Project" style={{width: '60%', borderRadius: '10px'}} /></center>
                        <p><b>Title : </b>Tourism Website</p>
                        <p><b>Aim : </b>My team developed a comprehensive tourism discovery website designed to assist travelers in finding the best and trending destinations with valuable tips and seasonal visit recommendations. The website is an all-in-one resource that helps tourists plan unforgettable journeys with ease and confidence. From exploring hidden gems to finding top-rated attractions, our platform offers detailed guides, traveler reviews, and insider advice. Users can also find the best times to visit various locations and plan their trips around popular events and festivals.</p>
                        <p><b>Team : </b>Lakshmi Sai Sigatapu, Divya, Nandini, Ragu, Siva Gangadhar, Bargav</p>
                        <p><b>Technologies used: </b>HTML & CSS, JavaScript for development and AWS for hosting the website</p>
                        <div className={mystyles.probut}>
                            <a href="https://sivagangadharthecoder.github.io/travel_tale_final/index.html" target="_blank" rel="noopener noreferrer">
                                <button>View Project</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projectt;
