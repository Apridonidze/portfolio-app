import { useEffect, useRef } from "react";

import {
    FaGraduationCap,
    FaCertificate,
    FaBuildingColumns,
} from "react-icons/fa6";

import { SiDocker } from "react-icons/si";

import BackgroundCard, {
    type BackgroundItem,
} from "../components/BackgroundCard";

export default function Background({
    setActiveSection,
}: {
    setActiveSection: (section: string) => void;
}) {
    const sectionRef = useRef<HTMLElement | null>(null);


    const backgroundItems: BackgroundItem[] = [
        {
            type: "EDUCATION",
            title: "Web Technology",
            organization: "SBA College",
            date: "2026 — Present",

            description:
                "Currently pursuing a Web Technology program focused on frontend web development, with an emphasis on building a strong foundation in modern web technologies and practical development skills.",

            tags: [
                "Web Development",
                "Frontend",
            ],

            icon: FaGraduationCap,
            titleIcon: FaBuildingColumns,
        },

        {
            type: "CERTIFICATION",
            title: "Learning Docker",
            organization: "LinkedIn Learning",
            date: "2025 Dec - 2025 Dec",

            description:
                "Completed hands-on training in Docker and containerization, covering Docker images, containers, application packaging, container lifecycle management, and the fundamentals of running applications in isolated, reproducible environments.",

            tags: [
                "Docker",
                "Containers",
                "DevOps",
            ],

            icon: FaCertificate,
            titleIcon: SiDocker,
        },
    ];


    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setActiveSection("Background");
                }
            },
            {
                threshold: 0.3,
            }
        );

        const section = sectionRef.current;

        if (section) {
            observer.observe(section);
        }

        return () => observer.disconnect();
    }, [setActiveSection]);


    return (
        <section id="Background" ref={sectionRef}>

            <span className="section-id small">
                04 / BACKGROUND
            </span>

            <h1 className="section-title background-section-title">
                Education & Certifications
            </h1>


            <div className="section-body">

                <div className="background-grid">

                    {backgroundItems.map((item) => (
                        <BackgroundCard
                            key={`${item.type}-${item.title}`}
                            item={item}
                        />
                    ))}

                </div>

            </div>

        </section>
    );
}