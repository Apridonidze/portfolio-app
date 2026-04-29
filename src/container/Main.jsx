import { useState } from "react";
import Sidebar from "../components/Sidebar";

import About from "./About";
import Certification from "./Certification";
import Experiences from "./Experiences";
import Projects from "./Projects";
import Skills from "./Skills";

import '../style/main.css'
import '../style/section.css'

export default function Main(){
    
    const [activeSection , setActiveSection] = useState('')
    
    return(
        <div className="main-container  row row-cols-sm-2 row-cols-1">
            <div className="main-start mt-5"><Sidebar activeSection={activeSection}/></div>
            <div className="main-end mx-auto mt-5">
                <About setActiveSection={setActiveSection}/>
                <Skills setActiveSection={setActiveSection}/>
                <Experiences setActiveSection={setActiveSection}/>
                <Projects setActiveSection={setActiveSection}/>
                <Certification setActiveSection={setActiveSection}/>
            </div>
        </div>
    );
};