import ProjectScreenshot1 from '../assets/project-screenshots/Screenshot 2025-11-19 120022.png'
import ProjectScreenshot2 from '../assets/project-screenshots/image_original.jpeg'
import ProjectScreenshot3 from '../assets/project-screenshots/Screenshot 2025-11-26 174331.png'
import ProjectScreenshot4 from '../assets/project-screenshots/img8.png'
import ProjectScreenshot5 from '../assets/project-screenshots/Screenshot 2025-12-22 113631.png'
import Project from '../components/Project'


export default function Projects({ setActiveSection }){

    const projects = [
        {
            title: "Job Board Application",
            desc: "A full-stack job platform where employees can discover and apply for jobs while recruiters can post opportunities and manage applicants. Built with a strong focus on security, scalability, and real-world workflows.",
            usedTech: [
                "React",
                "Bootstrap",
                "CSS",
                'Node.js',
                "Express.js",
                "MySQL",
                "Git & GitHub"
            ],
            githubUrl: "https://github.com/Apridonidze/jobs-app",
            image: ProjectScreenshot1
        },
        {
            title: "Typing Practice App",
            desc: "An interactive typing application designed to improve typing speed and accuracy with real-time feedback, customizable UI, and persistent user preferences.",
            usedTech: [
                "React",
                "Node.js",
                "Express.js",
                "Bootstrap",
                "CSS"
            ],
            githubUrl: "https://github.com/Apridonidze/typing-app",
            image: ProjectScreenshot2
        },
        {
            title: "Driver Tickets - Georgian Driving Test App",
            desc: "A full-stack educational platform that helps users prepare for the Georgian theoretical driving exam with complete ticket access, audio-assisted explanations, and personalized practice features.",
            usedTech: [
            "React (Vite)",
            "Node.js",
            "Express.js",
            "MySQL",
            "Bootstrap",
            "CSS",
            "Git"
            ],
            githubUrl: "https://github.com/Apridonidze/driver-tickets",
            image: ProjectScreenshot3
        },
        {
            title: "E-Commerce Platform",
            desc: "A full-stack e-commerce application delivering a complete online shopping experience with secure payments, real-time communication, and a feature-rich admin dashboard for managing products, users, and analytics.",
            usedTech: [
                "React.js",
                "State Management",
                "Recharts.js",
                "Express.js",
                "REST API",
                "WebSockets",
                "Webhooks",
                "MySQL",
                "Stripe",
                "SendGrid",
                "Docker",
                "Git & GitHub"
            ],
            githubUrl: "https://github.com/Apridonidze/e-commerce-app",
            image: ProjectScreenshot4
        },
        {
            title: "QR Code Generator & Scanner",
            desc: "A modern web application that allows users to generate and scan QR codes with real-time preview, download functionality, and seamless camera integration.",
            usedTech: [
                "React (Vite)",
                "JavaScript",
                "Bootstrap",
                "CSS"
            ],
            githubUrl: "https://github.com/Apridonidze/Qr-Code-App",
            image: ProjectScreenshot5
        }
    ];

    return(
        <section id="Projects">
            <span className="section-id small">04 / Projects</span>
            <h1 className="section-title ">Things I've built</h1>
            
            <div className="section-body d-flex flex-column gap-2 my-2">
                {projects.map((project, projectId) => <Project project={project} projectId={projectId}/>)}
            </div>
        </section>
    );
};