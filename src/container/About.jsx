import { useEffect, useRef } from "react";

export default function About({ setActiveSection }){

    const sectionRef = useRef(null) 

    useEffect(() => {

        const observer = new IntersectionObserver(([entry]) => {entry.isIntersecting ? setActiveSection("About") : null} , { threshold : 0.5})
        if(sectionRef.current) observer.observe(sectionRef.current)
        
        return () => observer.disconnect()

    },[setActiveSection])

    return(
        <section id="About" ref={sectionRef}>
            <span className="section-id">01 / ABOUT</span>
            <h1 className="fw-bold">About Me</h1>
            <div className="section-body">
                <h6>I’m a full-stack developer focused on building real-world web applications that solve practical problems and scale over time. I work across the entire stack using React, Node.js, Express, and MySQL, delivering products that are fast, stable, and ready for production.</h6>
                
                <h6>My experience comes from building and shipping freelance projects, where I’ve handled everything from planning and development to deployment. This taught me how to understand requirements quickly, communicate clearly, and deliver features that work under real constraints.</h6>

                <h6>I approach development with a product mindset — not just writing code, but building systems that are maintainable, efficient, and designed to grow. Performance, clean architecture, and usability are always priorities.</h6>

                <h6>I can take a project from idea or design to a complete, structured application, improve existing systems, or solve specific issues like slow performance and poor scalability.</h6>

                <h6>Currently, I’m looking for opportunities to contribute to real products, collaborate with a team, and continue improving as a developer through meaningful work.</h6>
            </div>
        </section>
    );
};