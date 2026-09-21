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
    position: "Full-Stack Developer",
    company_name: "Lead Generation & Outreach Platform · Upwork Client",

    description:
      "Developing a B2B lead acquisition platform that automates the journey from discovering local businesses to enriching contacts, running multi-channel outreach, and tracking qualified opportunities through a centralized workflow.",

    responsibilities: [
      "Built a configurable business discovery pipeline using Google Places data to identify and qualify companies by industry, location, ratings, reviews, website availability, and custom lead criteria.",

      "Created a contact-enrichment workflow that crawls company websites for publicly available phone numbers, email addresses, and business information while preventing duplicate records.",

      "Architected distributed background processing with Redis and BullMQ to coordinate discovery, enrichment, outreach, follow-ups, and other long-running workloads.",

      "Integrated Telnyx Voice and Messaging APIs for outbound calls and SMS, handling webhooks, delivery events, call states, retries, and follow-up sequences.",

      "Designed a state-driven outreach workflow that moves leads between calling, messaging, follow-up, interested, accepted, and declined stages according to communication outcomes.",

      "Added AI-assisted workflows for classifying responses, summarizing conversations, personalizing communication, and determining appropriate next actions.",

      "Developed a CRM-style interface for reviewing companies, contact details, communication history, pipeline status, campaign performance, worker activity, and exports.",

      "Improved processing reliability through job locking, idempotency, deduplication, retry strategies, rate-limit handling, and failure tracking.",
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
    position: "Backend Developer",
    company_name: "B2B Manufacturer Sourcing Platform · Upwork Client",

    description:
      "Worked on the backend of a specialized sourcing platform that evaluates manufacturer capabilities against detailed buyer requirements, including custom formulations, OTC actives, supplements, and product specifications.",

    responsibilities: [
      "Engineered a distributed manufacturer data-collection pipeline with Redis and BullMQ to process concurrent scraping workloads across background workers.",

      "Used Groq to transform inconsistent supplier and product information into normalized records suitable for automated comparison and search.",

      "Created an event-driven matching workflow that reacts to new manufacturer data and buyer requirements without relying on manual processing.",

      "Developed hard-constraint and weighted soft-matching logic to compare product requirements against manufacturer capabilities.",

      "Generated ranked supplier candidates with confidence scores, giving buyers a structured shortlist of manufacturers matching their requirements.",
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
    position: "Full-Stack Developer",
    company_name: "Data Collection & Automation System · Private Client",

    description:
      "Building and maintaining a private operations platform for large-scale Instagram data collection, combining account management, proxy infrastructure, automated scraping, batch processing, and internal data-analysis tools.",

    responsibilities: [
      "Implemented authentication and role-based authorization to protect administrative tools, account operations, and collected data.",

      "Developed an account and proxy management layer that associates Instagram accounts with dedicated proxies and operational configuration.",

      "Engineered a multi-account scraping system with Instagrapi that distributes queued workloads while accounting for account availability, failures, and platform rate limits.",

      "Integrated automatic proxy rotation and fallback behavior into scraping workflows to improve continuity when individual proxy endpoints fail.",

      "Designed persistence models for large collections of Instagram profile data, including engagement statistics, biographies, follower metrics, and available contact information.",

      "Built internal Next.js interfaces for searching, filtering, sorting, reviewing, and managing collected datasets and scraper operations.",
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
    company_name: "Web Application Backend · Independent Client",

    description:
      "Developed the server-side foundation for a web application, focusing on API design, relational data modeling, authentication, and maintainable application architecture.",

    responsibilities: [
      "Implemented REST endpoints for core application features and frontend integration.",

      "Designed and refined relational database schemas to keep application data structured and queries efficient.",

      "Secured protected application functionality with JWT-based authentication and environment-specific configuration.",

      "Reorganized backend modules to improve separation of concerns, error handling, and long-term maintainability.",

      "Supported deployment and integration work as backend features moved into the production application.",
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
    position: "Frontend Developer",
    company_name: "Responsive Website Implementation · Upwork Client",

    description:
      "Translated client-provided designs into responsive web pages with close attention to layout accuracy, usability, browser compatibility, and consistent behavior across screen sizes.",

    responsibilities: [
      "Recreated supplied designs as responsive pages using reusable HTML, CSS, Bootstrap, and JavaScript components.",

      "Adjusted layouts, spacing, typography, and responsive behavior to preserve the intended design across desktop and mobile devices.",

      "Tested and resolved browser-specific and device-specific presentation issues before delivery.",

      "Worked directly from client feedback to refine visual details and deliver requested revisions.",
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
    position: "Frontend Developer",
    company_name: "Authentication UI · Upwork Client",

    description:
      "Created the login and registration interface for a web application as a focused frontend engagement, delivering responsive forms with client-side validation and cross-device support.",

    responsibilities: [
      "Implemented responsive login and registration screens from the client's requirements.",

      "Added client-side form validation and clear input feedback for common authentication fields.",

      "Verified layouts and interactions across different browsers, screen sizes, and devices.",

      "Iterated on the interface based on client feedback and delivered the completed authentication pages.",
    ],

    used_technologies: ["HTML5", "CSS3", "JavaScript", "Git", "GitHub"],
  },
];

    return(
        <section id="Experience" ref={sectionRef} >

            <span className="section-id small">03 / Freelancing</span>
            <h1 className="section-title ">Where I've Worked</h1>

            <div className="section-body">
                <div className="row">{experiences.map((experience , experienceId) => <Experience experience={experience} experienceId={experienceId}/>)}</div>
            </div>

        </section>
    );
};
