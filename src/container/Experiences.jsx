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
      date: "Sep 2026 - Present",
      position: "Freelance Full-Stack Developer",
      company_name: "Upwork",

      description:
          "Developed a full-stack B2B lead generation and outreach automation platform that discovers and qualifies local service businesses, enriches contact data, and automates outreach across phone calls, SMS, and email. Built distributed background processing, lead tracking, campaign workflows, and a centralized CRM-style dashboard for managing the complete acquisition pipeline.",

      responsibilities: [
          "Built an automated business discovery and qualification pipeline using Google Places data, filtering companies by industry, location, ratings, review count, website availability, and configurable lead criteria.",

          "Developed a contact-enrichment system that crawls company websites to discover publicly available phone numbers, email addresses, and business information while automatically deduplicating collected leads.",

          "Designed a distributed background-job architecture using Redis and BullMQ to coordinate business discovery, enrichment, outreach scheduling, messaging, calling, follow-ups, monitoring, and long-running workflows.",

          "Integrated Telnyx Voice and Messaging APIs for programmable outbound calling and SMS, including call states, delivery events, webhooks, retries, and automated follow-up sequences.",

          "Developed a multi-stage outreach engine that progresses leads through call, SMS, email, manual follow-up, interested, accepted, and declined states based on communication outcomes.",

          "Implemented AI-assisted lead qualification and communication workflows for response classification, conversation summarization, personalized outreach, and automated next-action decisions.",

          "Built a CRM-style dashboard for managing discovered companies, contact information, outreach history, lead status, campaign analytics, worker activity, conversion metrics, and data exports.",

          "Implemented fault-tolerant background processing with retries, rate-limit handling, job locking, deduplication, failure tracking, and idempotent processing for reliable automation.",
      ],

      used_technologies: [
          "Next.js",
          "TypeScript",
          "Node.js",
          "Express.js",
          "MongoDB",
          "Redis",
          "BullMQ",
          "Google Places API",
          "Telnyx",
          "Docker",
          "Git",
          "GitHub",
      ],
  },
  {
    date: "Aug 2026 - Aug 2026",
    position: "Freelance Fullstack Developer",
    company_name: "Upwork",
    description:
      "Contributed to a B2B sourcing platform that connects companies with manufacturers capable of producing customized products to exact specifications, including products requiring specific OTC actives and supplements.",
    responsibilities: [
      "Built a distributed manufacturer-scraping system using Redis and BullMQ to orchestrate and distribute concurrent scraping jobs at scale.",
      "Parsed and enriched scraped manufacturer data, using Groq to normalize inconsistent supplier and product data into structured, standardized records.",
      "Designed an event-driven matching engine powered by Redis and BullMQ that automatically triggers when new buyer requirements or manufacturer data become available.",
      "Implemented hybrid hard- and soft-matching logic across product specifications and manufacturer capabilities to score and rank candidates.",
      "Returned ranked manufacturer matches with confidence scores, connecting buyers with qualified suppliers for their specific requirements.",
    ],
    used_technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redis",
      "BullMQ",
      "Git",
      "GitHub",
      "Docker",
    ],
  },
  {
    date: "May 2026 - Present",
    position: "Freelance Full-Stack Developer",
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
    position: "FreelanceBackend Developer",
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
    position: "Freelance Frontend Web Developer",
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
    position: "Freelance Frontend Web Developer",
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
        <section id="Experience" ref={sectionRef} >

            <span className="section-id small">03 / Experience</span>
            <h1 className="section-title ">Where I've Worked</h1>

            <div className="section-body">
                <div className="row">{experiences.map((experience , experienceId) => <Experience experience={experience} experienceId={experienceId}/>)}</div>
            </div>

        </section>
    );
};
