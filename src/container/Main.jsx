import { useState } from "react";
import Sidebar from "../components/Sidebar";

import '../style/main.css'
import About from "./About";
import Certification from "./Certification";
import Experience from "./Experience";
import Projects from "./Projects";
import Skills from "./Skills";

export default function Main(){
    
    const [activeSection , setActiveSection] = useState('About')

    return(
        <div className="main-container container-fluid row row-cols-sm-2 row-cols-1">
            <div className="main-start"><Sidebar activeSection={activeSection}/></div>
            <div className="main-end mx-auto">
                <About setActiveSection={setActiveSection}/>
                <Skills setActiveSection={setActiveSection}/>
                <Experience setActiveSection={setActiveSection}/>
                <Projects setActiveSection={setActiveSection}/>
                <Certification setActiveSection={setActiveSection}/>
            </div>
        </div>
    );
};