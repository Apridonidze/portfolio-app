import { useState } from "react";

import {
    SiNextdotjs,
    SiJavascript,
    SiPython,
    SiNodedotjs,
    SiExpress,
    SiFastapi,
    SiMysql,
    SiMongodb,
    SiRedis,
    SiInstagram,
    SiGit,
    SiGithub,
    SiDocker,
} from "react-icons/si";

import {
    FaKey,
    FaDatabase,
    FaCloud,
    FaCode,
    FaPlug,
} from "react-icons/fa6";


const skillIcons = {
    // Frontend
    "Next.js": SiNextdotjs,
    JavaScript: SiJavascript,
    HTML5: FaCode,
    CSS3: FaCode,

    // Backend
    Python: SiPython,
    "Node.js": SiNodedotjs,
    "Express.js": SiExpress,
    FastAPI: SiFastapi,
    "REST API": FaPlug,
    "REST APIs": FaPlug,
    JWT: FaKey,
    BullMQ: FaDatabase,

    // Databases
    MySQL: SiMysql,
    MongoDB: SiMongodb,
    Redis: SiRedis,

    // Integrations
    Instagrapi: SiInstagram,

    // Tools & Deployment
    Git: SiGit,
    GitHub: SiGithub,
    Docker: SiDocker,
    Render: FaCloud,
};


export default function Experience({ experience }) {

    const [toggleResps, setToggleResps] = useState(false);

    return (
        <div className="experience-container py-3">

            <div className="experience-top">
                <h4>
                    <span className="position">
                        {experience.position}
                    </span>

                    {" - "}

                    <span className="companyName">
                        {experience.company_name}
                    </span>
                </h4>

                <span className="smallText">
                    {experience.date}
                </span>
            </div>


            <div className="experience-main">

                <h6>
                    {experience.description}
                </h6>

                <div className="p-2 row gap-2">
                    {experience.used_technologies.map((skill) => {

                        const Icon = skillIcons[skill] || FaCode;

                        return (
                            <span
                                className="usedTechnology col-auto"
                                key={skill}
                            >
                                <Icon className="skill-icon me-2" />

                                {skill}
                            </span>
                        );
                    })}
                </div>

            </div>


            <div className="experience-footer">

                <span
                    id="responsibilities"
                    onClick={() => setToggleResps(!toggleResps)}
                >
                    {toggleResps
                        ? "HIDE"
                        : "KEY RESPONSIBILITIES"
                    }

                    <span
                        style={{
                            transform: toggleResps
                                ? "rotate(180deg)"
                                : "rotate(0deg)",
                            display: "inline-block",
                            transition: "transform 0.2s ease",
                        }}
                    >
                        <i className="fa-solid fa-angle-down"></i>
                    </span>
                </span>


                <div
                    className={
                        toggleResps
                            ? "collapsed"
                            : "collapse"
                    }
                >
                    <ul>
                        {experience.responsibilities.map(
                            (resp, index) => (
                                <li key={index}>
                                    {resp}
                                </li>
                            )
                        )}
                    </ul>
                </div>

            </div>

        </div>
    );
}