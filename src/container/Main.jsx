import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Footer from "./Footer";

import About from "./About";
import Experiences from "./Experiences";
import Projects from "./Projects";
import Skills from "./Skills";

import '../style/main.css'
import '../style/section.css'
import Background from "./Background";

export default function Main(){
    
    const [activeSection , setActiveSection] = useState('')

    return(
        <div className="main-container row row-cols-sm-2 row-cols-1 mb-5">
            <div className="main-start"><Sidebar activeSection={activeSection}/></div>
            <div className="main-end ">
                <div className="main-content">
                    <About setActiveSection={setActiveSection}/>
                    <Skills setActiveSection={setActiveSection}/>
                    <Experiences setActiveSection={setActiveSection}/>
                    <Background setActiveSection={setActiveSection}/>
                    <Projects setActiveSection={setActiveSection}/>
                    <Footer />
                </div>
            </div>
        </div>
    );
};