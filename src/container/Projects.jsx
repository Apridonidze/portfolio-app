import ProjectScreenshot1 from '../assets/project-screenshots/Screenshot 2025-11-19 120022.png'
import ProjectScreenshot2 from '../assets/project-screenshots/image_original.jpeg'
import ProjectScreenshot3 from '../assets/project-screenshots/Screenshot 2025-11-26 174331.png'
import ProjectScreenshot4 from '../assets/project-screenshots/img8.png'
import ProjectScreenshot5 from '../assets/project-screenshots/Screenshot 2025-12-22 113631.png'


export default function Projects({ setActiveSection }){

    const projects = [
        {
            title: "Job Board Application",
            desc: "A full-stack job platform where employees can discover and apply for jobs while recruiters can post opportunities and manage applicants. Built with a strong focus on security, scalability, and real-world workflows.",
            keyFeatures: [
                "Role-based authentication system (Employee / Recruiter)",
                "Job browsing with filtering by role and technologies",
                "Apply and save jobs functionality",
                "Recruiter dashboard to manage job postings and applications",
                "Accept/decline applicants with status management",
                "User profile management with image upload",
                "Robust security: input validation, XSS & SQL injection protection",
                "Backend protections including Zod validation, JWT authentication, rate limiting, and CORS"
            ],
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
            keyFeatures: [
                "Real-time typing tracking with accuracy and speed feedback",
                "Custom themes for personalized user experience",
                "Adjustable font sizes for better accessibility",
                "Local storage persistence for saving user preferences",
                "Version tracking with current features and upcoming updates display"
            ],
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
            keyFeatures: [
                "Access to all 1000 Georgian driving test tickets",
                "Questions include text, multiple answers, and Georgian audio explanations",
                "Save difficult tickets for focused practice",
                "Dedicated review section for saved questions",
                "JWT-based authentication for secure user access",
                "Protected backend API endpoints for data security",
                "Optimized learning flow for exam preparation"
            ],
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
            keyFeatures: [
                "User authentication and account management (Login / Signup)",
                "Product browsing, search, and dynamic cart system",
                "Secure checkout and payment processing via Stripe",
                "Email notifications for order updates using SendGrid",
                "Real-time live chat support using WebSockets",
                "Admin dashboard for managing products, users, and orders",
                "Order status management with automated email triggers",
                "Feedback and reporting system for users",
                "Revenue tracking and sales analytics (7-day / 30-day)",
                "Interactive data visualization with Recharts",
                "RESTful API architecture with rate limiting and CORS protection",
                "Webhook integration for handling external events (payments, emails)"
            ],
            usedTech: [
                "React.js",
                "State Management",
                "Bootstrap",
                "CSS",
                "Recharts.js",
                "Node.js",
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
            keyFeatures: [
                "Generate QR codes from text or URLs instantly",
                "Download generated QR codes as PNG images",
                "Scan QR codes using device camera",
                "Real-time preview of generated codes",
                "Responsive design for mobile and desktop",
                "Input validation and error handling"
            ],
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
            
                <div className="section-body">
                    <img src={projects[3].image} alt="" />
                </div>
        </section>
    );
};