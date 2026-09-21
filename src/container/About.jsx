import { useEffect, useRef } from "react";

export default function About({ setActiveSection }){
    const sectionRef = useRef(null);

    useEffect(() => {
    const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
                setActiveSection("About");
            }
        },
        {
            threshold: 0,
            rootMargin: "-25% 0px -65% 0px",
        }
    );

    const section = sectionRef.current;

    if (section) {
        observer.observe(section);
    }

    return () => {
        observer.disconnect();
    };
}, [setActiveSection]);

    return(
        <section id="About" ref={sectionRef} >
            <span className="section-id small">01 / ABOUT</span>

            <h1 className="section-title">About Me</h1>

            <div className="section-body">
                <h6 className="my-3">
                    I’m a <b>full-stack developer</b> building practical web applications
                    and backend systems with{" "}
                    <b className="lightHighlight">
                        Next.js, React, Node.js, Express, MySQL, MongoDB, and Redis
                    </b>.
                </h6>

                <h6 className="my-3">
                    My freelance work has involved more than building interfaces — I’ve
                    worked on <b>scraping and automation systems, background job processing,
                    APIs, data pipelines, database architecture, and AI integrations</b>{" "}
                    for real-world workflows.
                </h6>

                <h6 className="my-3">
                    I enjoy taking problems from an idea to a working product, whether
                    that means designing a backend, building the frontend, integrating
                    third-party services, or improving an existing system.
                </h6>

                <h6 className="my-3">
                    I care about{" "}
                    <b className="lightHighlight">
                        clean architecture, performance, scalability, and good user experience
                    </b>
                    , and I’m currently looking for opportunities to work on meaningful
                    products and grow alongside an experienced development team.
                </h6>
            </div>
        </section>
    );
};
