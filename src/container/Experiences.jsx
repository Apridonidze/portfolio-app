import Experience from "../components/Experience";
export default function Experiences({ setActiveSection }){

    const experiences = [
        {
            date: "Jan 2026 - Jan 2026",
            position: "Frontend Web Developer",
            company_name: "Upwork",
            description:"Delivered high-quality, responsive websites by transforming client designs into robust front-end solutions. Collaborated closely with clients to capture requirements, refine details, and implement feedback promptly. Ensured optimal performance and seamless user experiences across all devices and browsers, with a focus on clean, maintainable code.",
            responsibilities: [
                "Converted client design mockups into fully functional, responsive web pages.",
                "Optimized website performance and ensured compatibility across devices and browsers.",
                "Collaborated with clients to refine project requirements and implemented revisions effectively.",
                "Maintained clean, modular, and reusable code for scalable web applications."
            ],
            used_technologies: [
                "HTML5",
                "CSS3",
                "JavaScript",
            ]
        },
        {
            date: "Jul 2023 - Jul 2023",
            position: "Frontend Web Developer",
            company_name: "Upwork",
            description: "Executed a short-term project by creating responsive login and sign-up pages for a web application. Utilized HTML, CSS, and JavaScript to enhance user experience with basic form validation. Ensured compatibility across various browsers and devices, based on thorough communication with the client to meet specific needs and provide regular progress updates.",
            responsibilities: [
                "Developed responsive login and sign-up pages with emphasis on user-friendly interfaces.",
                "Incorporated form validation techniques to enhance user data integrity.",
                "Conducted cross-browser testing to ensure consistent page performance.",
                "Communicated effectively with clients to understand requirements and provide timely updates."
            ],
            used_technologies: [
                "HTML5",
                "CSS3",
                "JavaScript",
            ]
        },
        {
            date: "Jan 2026 - Feb 2026",
            position: "Backend Developer",
            company_name: "Independent Contractor",
            description:
            "Contributed as a backend developer on a dynamic event management platform, catering to administrators and event organizers that would act as a middleware between them and tkt.ge and biletebi.ge. Facilitated seamless registration, event creation, and management through an admin panel. Improved codebase quality by reviewing, optimizing, and extending AI-assisted backend, ensuring a secure and maintainable system. Integrated with third-party ticketing sites for data synchronization, enhancing information reliability across multiple platforms.",
            responsibilities: [
                "Maintained and refactored an AI-generated legacy codebase, improving its security, reliability, and maintainability.",
                "Developed Node.js backend services and REST APIs for third-party integration.",
                "Managed relational databases using MySQL, ensuring data consistency and performance.",
                "Utilized Git for version control and team collaboration.",
                "Spearheaded data export processes and cross-platform synchronization for better event management."
            ],
            used_technologies: [
                "Node.js",
                "Express.js",
                "MySQL",
                "REST APIs",
                "ENV",
                "Rate Limiting",
                "Git",
                "GitHub"
            ]
        }
    ];

    return(
        <section id="Experience">

            <span className="section-id small">03 / Experience</span>
            <h1 className="section-title ">Where I've Worked</h1>

            <div className="section-body">
                <div className="row">{experiences.map((experience , experienceId) => <Experience experience={experience} experienceId={experienceId}/>)}</div>
            </div>

        </section>
    );
};