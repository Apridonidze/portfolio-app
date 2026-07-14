import { useEffect, useRef } from "react";
import Experience from "../components/Experience";

export default function Experiences({ setActiveSection }){

    const sectionRef = useRef(null) 
    
    useEffect(() => {

        const observer = new IntersectionObserver(([entry]) => {entry.isIntersecting ? setActiveSection("Experience") : null} , { threshold : 0.3})
        if(sectionRef.current) observer.observe(sectionRef.current)
        

    },[setActiveSection])

   const experiences = [
  {
    date: "May 2026 - Present",
    position: "Full-Stack Developer",
    company_name: "Upwork",
    description:
      "Developed and maintained a secure internal web application for a private client, focused on large-scale Instagram data collection, proxy management, and automated scraping infrastructure. Built both frontend and backend systems to support multi-account operations, data visualization, and scalable batch processing.",
    responsibilities: [
      "Built a secure internal web application with JWT-based authentication and role-based access control.",
      "Developed a multi-account Instagram proxy management system, allowing users to assign dedicated proxies to accounts for isolated operation.",
      "Engineered an automated batch scraping engine using Instagrapi that distributes scraping jobs across multiple accounts while minimizing rate limits and bans.",
      "Built an automatic proxy IP rotation system integrated into the autoscraping workflow to maintain anonymity and reduce account blocks.",
      "Designed and maintained a MySQL database storing thousands of scraped Instagram profiles, including follower counts, engagement metrics, biographies, and contact information.",
      "Developed interactive Next dashboards and dynamic HTML tables for filtering, sorting, and reviewing scraped leads.",
    ],
    used_technologies: [
      "Next.js",
      "Python",
      "FastAPI",
      "REST APIs",
      "Instagrapi",
      "MySQL",
      "MongoDB",
      "JWT",
      "Git",
      "GitHub",
      "Docker",
      "Render",
    ],
  },
  {
    date: "Jan 2026 - Feb 2026",
    position: "Backend Developer",
    company_name: "Independent Contractor",
    description:
      "Designed and implemented REST APIs powering production full-stack applications, with a focus on secure authentication, optimized database performance, and maintainable backend architecture.",
    responsibilities: [
      "Designed and implemented REST APIs powering production full-stack applications.",
      "Optimized relational database schemas, improving query performance and maintainability.",
      "Implemented secure JWT authentication and environment-based configuration management.",
      "Refactored backend architecture, reducing runtime errors and improving long-term maintainability.",
      "Collaborated on production deployments and backend feature delivery.",
    ],
    used_technologies: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "MySQL",
      "Git",
      "GitHub",
    ],
  },
  {
    date: "Jan 2026 - Jan 2026",
    position: "Frontend Web Developer",
    company_name: "Upwork",
    description:
      "Delivered high-quality, responsive websites by transforming client designs into robust front-end solutions. Collaborated closely with clients to capture requirements, refine details, and implement feedback promptly. Ensured optimal performance and seamless user experiences across all devices and browsers, with a focus on clean, maintainable code.",
    responsibilities: [
      "Converted client design mockups into fully functional, responsive web pages.",
      "Optimized website performance and ensured compatibility across devices and browsers.",
      "Collaborated with clients to refine project requirements and implemented revisions effectively.",
      "Maintained clean, modular, and reusable code for scalable web applications.",
    ],
    used_technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Bootstrap",
      "Git",
      "GitHub",
    ],
  },
  {
    date: "Jul 2023 - Jul 2023",
    position: "Frontend Web Developer",
    company_name: "Upwork",
    description:
      "Executed a short-term project by creating responsive login and sign-up pages for a web application. Utilized HTML, CSS, and JavaScript to enhance user experience with basic form validation. Ensured compatibility across various browsers and devices, based on thorough communication with the client to meet specific needs and provide regular progress updates.",
    responsibilities: [
      "Developed responsive login and sign-up pages with emphasis on user-friendly interfaces.",
      "Incorporated form validation techniques to enhance user data integrity.",
      "Conducted cross-browser testing to ensure consistent page performance.",
      "Communicated effectively with clients to understand requirements and provide timely updates.",
    ],
    used_technologies: ["HTML5", "CSS3", "JavaScript", "Git", "GitHub"],
  },
];

    return(
        <section id="Experience" ref={sectionRef}>

            <span className="section-id small">03 / Experience</span>
            <h1 className="section-title ">Where I've Worked</h1>

            <div className="section-body">
                <div className="row">{experiences.map((experience , experienceId) => <Experience experience={experience} experienceId={experienceId}/>)}</div>
            </div>

        </section>
    );
};