import { useRef, useEffect } from "react"
import Skill from "../components/Skill"

export default function Skills({ setActiveSection }){

    const sectionRef = useRef(null) 

    useEffect(() => {

        const observer = new IntersectionObserver(([entry]) => {entry.isIntersecting ? setActiveSection("Skills") : null} , { threshold : 0.5})
        if(sectionRef.current) observer.observe(sectionRef.current)
        
    },[setActiveSection])

    const skills = [
        {
            title: 'Frontend',
            skills: [
            'React',
            'JavaScript',
            'HTML',
            'CSS',
            'Bootstrap',
            'State Management',
            'recharts.js'
            ]
        },
        {
            title: 'Backend',
            skills: [
            'Node.js',
            'ExpressJS',
            'REST API',
            'WebSockets',
            'Webhooks',
            'JWT',
            'Zod',
            'uuid',
            'Rate Limiting',
            '.env',
            ]
        },
        {
            title: 'Database & Integrations',
            skills: [
            'MySQL',
            'Stripe',
            'SendGrid',
            'Third-Party Integration'
            ]
        },
        {
            title: 'Tools & Deployment',
            skills: [
            'Git',
            'GitHub',
            'Docker',
            'Vercel',
            'Railway',
            ]
        }
    ];

    return(
        <section id="Skills" ref={sectionRef}>

            <span className="section-id small">02 / SKILLS</span>
            <h1 className="section-title ">Skills & Technologies</h1>

            <div className="section-body mt-1 ">
                <div className="skills-container">
                    {skills.map(skill => <Skill title={skill.title} skills={skill.skills}/>)}
                </div>
            </div>

        </section>
    );
};