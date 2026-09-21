import {
    SiNextdotjs,
    SiReact,
    SiTypescript,
    SiJavascript,
    SiBootstrap,
    SiPython,
    SiNodedotjs,
    SiExpress,
    SiFastapi,
    SiMysql,
    SiMongodb,
    SiRedis,
    SiInstagram,
    SiStripe,
    SiGit,
    SiGithub,
    SiDocker,
    SiVercel,
} from "react-icons/si";

import {
    FaLink,
    FaKey,
    FaDatabase,
    FaRobot,
    FaEnvelope,
    FaCloud,
    FaCode,
    FaPlug,
} from "react-icons/fa6";

const skillIcons = {
    // Frontend
    "Next.js": SiNextdotjs,
    React: SiReact,
    TypeScript: SiTypescript,
    JavaScript: SiJavascript,
    Bootstrap: SiBootstrap,
    HTML: FaCode,
    CSS: FaCode,

    // Backend
    Python: SiPython,
    "Node.js": SiNodedotjs,
    ExpressJS: SiExpress,
    FastAPI: SiFastapi,
    "REST API": FaPlug,
    WebSockets: FaLink,
    "Socket.IO": FaLink,
    Webhooks: FaLink,
    JWT: FaKey,
    Zod: FaCode,
    BullMQ: FaDatabase,

    // Database & Integrations
    MySQL: SiMysql,
    MongoDb: SiMongodb,
    Redis: SiRedis,
    Groq: FaRobot,
    Instagrapi: SiInstagram,
    Stripe: SiStripe,
    SendGrid: FaEnvelope,

    // Tools & Deployment
    Git: SiGit,
    GitHub: SiGithub,
    Docker: SiDocker,
    Vercel: SiVercel,
    Railway: FaCloud,
    Render: FaCloud,
};

export default function Skill({ title, skills }) {
    return (
        <div className="skill-container p-4">
            <h6 className="skill-title text-uppercase">
                {title}
            </h6>

            <div className="row p-1 gap-2 px-2">
                {skills.map((skill) => {
                    const Icon = skillIcons[skill] || FaCode;

                    return (
                        <span
                            className="skill col-auto"
                            key={skill}
                        >
                            <Icon className="skill-icon " />
                            {skill}
                        </span>
                    );
                })}
            </div>
        </div>
    );
}