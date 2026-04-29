import { useRef, useEffect } from "react"
import Skill from "../components/Skill"

export default function Skills({ setActiveSection }){

    const sectionRef = useRef(null) 

    useEffect(() => {

        const observer = new IntersectionObserver(([entry]) => {entry.isIntersecting ? setActiveSection("Skills") : null} , { threshold : 0.2})
        if(sectionRef.current) observer.observe(sectionRef.current)
        
        return () => observer.disconnect()

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
            'Rate Limiting'
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

            <div className="section-body">
                {skills.map(skill => <Skill title={skill.title} skills={skill.skills}/>)}
            </div>

        </section>
    );
};