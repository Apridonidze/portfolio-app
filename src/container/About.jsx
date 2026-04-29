import { useEffect, useRef } from "react";

export default function About({ setActiveSection }){

    const sectionRef = useRef(null) 

    useEffect(() => {

        const observer = new IntersectionObserver(([entry]) => {entry.isIntersecting ? setActiveSection("About") : null} , { threshold : 0})
        if(sectionRef.current) observer.observe(sectionRef.current)
        
        return () => observer.disconnect()

    },[setActiveSection])

    return(
        <section id="About" ref={sectionRef}>

            <span className="section-id small">01 / ABOUT</span>
            <h1 className="section-title ">About Me</h1>

            <div className="section-body">
                <h6 className="my-3">I’m a <b>full-stack developer</b> focused on building real-world web applications that solve practical problems and scale over time. I work across the entire stack using <b className="lightHighlight">React, Node.js, Express, and MySQL,</b> delivering production-ready products.</h6>

                <h6 className="my-3">My experience comes from <b>freelance projects</b> where I handled everything from planning to deployment. This helped me build strong communication skills and the ability to deliver features under real constraints with a product-focused mindset.</h6>

                <h6 className="my-3">I focus on clean architecture & scalability, performance, and usability, building systems that are maintainable and scalable. I can take an idea or design and turn it into a complete application or improve existing systems.</h6>

                <h6 className="my-3">Currently, <b className="lightHighlight">I’m looking for opportunities</b> to contribute to real products, collaborate with teams, and continue growing as a developer through meaningful work.</h6>
            </div>

        </section>
    );
};