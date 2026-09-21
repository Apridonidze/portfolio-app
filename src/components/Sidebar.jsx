import { useEffect, useRef, useState } from 'react'
import resume from '../assets/resume/Giorgi aphridonidze-1.pdf'
import ThemeToggle from '../button/ThemeToggle'
import ResumeButton from '../button/ResumeButton'

import '../style/sidebar.css'

export default function Sidebar({ activeSection }){
    const [copyStatus, setCopyStatus] = useState('')
    const resetCopyTimer = useRef(null)

    useEffect(() => () => clearTimeout(resetCopyTimer.current), [])

    async function copyEmail() {
        clearTimeout(resetCopyTimer.current)
        try {
            await navigator.clipboard.writeText('giorgiapridonidze08@gmail.com')
            setCopyStatus('copied')
        } catch {
            setCopyStatus('error')
        }
        resetCopyTimer.current = setTimeout(() => setCopyStatus(''), 2500)
    }

    return(
        <div className="sidebar-container">

            <div className="sidebar-top">
                <h1 className='fw-bold'>Giorgi Aphridonidze</h1>
                <h4>Fullstack Web Developer</h4>
                <h6 className='my-3'>Building real-world web applications that are fast, functional, and easy to use.</h6>
                <h6><i class="fa-solid fa-location-dot"></i> Tbilisi, Georgia</h6>
            </div>

            <div className="sidebar-main">
                <ul className='sectionContainer'>
                    <li  onClick={() => document.getElementById('About').scrollIntoView()} className={`section ${activeSection === "About" ? 'active' : ''}`}>About</li>
                    <li onClick={() => document.getElementById('Skills').scrollIntoView()} className={`section ${activeSection === "Skills" ? 'active' : ''}`}>Skills</li>
                    <li onClick={() => document.getElementById('Experience').scrollIntoView()} className={`section ${activeSection === "Experience" ? 'active' : ''}`}>Freelancing</li>
                    <li onClick={() => document.getElementById('Background').scrollIntoView()} className={`section ${activeSection === "Background" ? 'active' : ''}`}>Background</li>
                    <li onClick={() => document.getElementById('Projects').scrollIntoView()} className={`section ${activeSection === "Projects" ? 'active' : ''}`}>Projects</li>
                </ul>
            </div>

            <div className="sidebar-bottom mb-5">
                <div className="socials">
                    <a href='https://github.com/Apridonidze' target='_blank'><i class="fa-brands fa-github"></i></a>
                    <a href='https://www.linkedin.com/in/giorgi-aphridonidze-7aa896291/' target='_blank'><i class="fa-brands fa-linkedin-in"></i></a>
                    <a href='https://www.upwork.com/freelancers/~01c18a1192545fe285' target='_blank'><i class="fa-brands fa-upwork"></i></a>
                    <button
                        type="button"
                        className={`email-copy ${copyStatus === 'copied' ? 'is-copied' : ''}`}
                        onClick={copyEmail}
                        aria-label="Copy email address: giorgiapridonidze08@gmail.com"
                        title="Copy email address"
                    >
                        <i className={copyStatus === 'copied' ? 'fa-solid fa-check' : 'fa-regular fa-envelope'} aria-hidden="true"></i>
                        <span className={`email-copy-feedback ${copyStatus ? 'is-visible' : ''}`} role="status">
                            {copyStatus === 'copied' ? 'Email copied!' : copyStatus === 'error' ? 'Could not copy. Try again.' : ''}
                        </span>
                    </button>
                </div>
                <ResumeButton resume={resume}/>
            </div>

            <ThemeToggle />

        </div>
    );
};
