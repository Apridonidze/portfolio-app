import { useEffect, useRef } from "react";

export default function About({ setActiveSection }){

    const sectionRef = useRef(null) 

    useEffect(() => {

        const observer = new IntersectionObserver(([entry]) => {entry.isIntersecting ? setActiveSection("About") : null} , { threshold : 0.5})
        if(sectionRef.current) observer.observe(sectionRef.current)
        

    },[setActiveSection])

    return(
        <section id="About" ref={sectionRef}>

            <span className="section-id small">01 / ABOUT</span>
            <h1 className="section-title ">About Me</h1>

            <div className="section-body">
                <h6 className="my-3">I’m a <b>full-stack developer</b> focused on building production-ready web applications and backend systems that solve practical business problems. I work across the stack with <b className="lightHighlight">Next.js, React, Node.js, Express, MySQL, MongoDB, and Redis</b>.</h6>

                <h6 className="my-3">Through <b>freelance projects</b>, I’ve built distributed scraping infrastructure, event-driven workflows with BullMQ, and data-processing pipelines that use Groq to turn inconsistent information into structured records. I’ve also developed matching logic that scores and ranks manufacturers against detailed buyer requirements.</h6>

                <h6 className="my-3">I care about clean architecture, scalability, performance, and usability. I’m comfortable taking a feature from planning through deployment, improving existing systems, and communicating clearly with clients while working within real product constraints.</h6>

                <h6 className="my-3">Currently, <b className="lightHighlight">I’m looking for opportunities</b> to contribute to real products, collaborate with teams, and continue growing as a developer through meaningful work.</h6>
            </div>

        </section>
    );
};
