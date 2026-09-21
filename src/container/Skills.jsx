import { useRef, useEffect } from "react";
import Skill from "../components/Skill";

export default function Skills({ setActiveSection }) {
    const sectionRef = useRef(null);


    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setActiveSection("Skills");
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

    const skills = [
        {
            title: "Frontend",
            skills: [
                "Next.js",
                "React",
                "TypeScript",
                "JavaScript",
                "Bootstrap",
                "HTML",
                "CSS",
            ],
        },
        {
            title: "Backend",
            skills: [
                "TypeScript",
                "JavaScript",
                "Python",
                "Node.js",
                "ExpressJS",
                "FastAPI",
                "REST API",
                "WebSockets",
                "Socket.IO",
                "Webhooks",
                "BullMQ",
            ],
        },
        {
            title: "Database & Integrations",
            skills: [
                "MySQL",
                "MongoDb",
                "Redis",
                "Groq",
                "Stripe",
                "SendGrid",
            ],
        },
        {
            title: "Tools & Deployment",
            skills: [
                "Git",
                "GitHub",
                "Docker",
                "Vercel",
                "Railway",
                "Render",
            ],
        },
    ];

    return (
        <section id="Skills" ref={sectionRef}>
            <span className="section-id small">
                02 / SKILLS
            </span>

            <h1 className="section-title">
                Skills & Technologies
            </h1>

            <div className="section-body mt-1">
                <div className="skills-container">
                    {skills.map((skill) => (
                        <Skill
                            key={skill.title}
                            title={skill.title}
                            skills={skill.skills}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}