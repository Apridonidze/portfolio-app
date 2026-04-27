import '../style/sidebar.css'

export default function Sidebar(){
    return(
        <div className="sidebar-container">

            <div className="sidebar-top">
                <h1>Giorgi Aphridonidze</h1>
                <h3>Fullstack Web Developer</h3>
                <h6>I build real-world web applications that are fast, functional, and easy to use.</h6>
                <h6><i class="fa-solid fa-location-dot"></i> Tbilis, Georgia</h6>
            </div>

            <div className="sidebar-main">
                <ul>
                    <li><span className='section-line'></span><span>About</span></li>
                    <li><span className='section-line'></span><span>Skills</span></li>
                    <li><span className='section-line'></span><span>Experience</span></li>
                    <li><span className='section-line'></span><span>Projects</span></li>
                    <li><span className='section-line'></span><span>Certification</span></li>
                </ul>
            </div>

            <div className="sidebar-bottom">
                <a href='https://media.licdn.com/dms/image/v2/D4D2DAQHT0b_RkUsZ7w/profile-treasury-document-cover-images_1920/B4DZyZQW1KJwBM-/0/1772097729154?e=1777939200&v=beta&t=QRJxb5Xb9dr6yvfwRPopmCA0SF2q0SkZ-4MDSVu3o-s' target='_blank'><i class="fa-solid fa-file-arrow-down"></i>RESUME</a>
                <div className="socials">
                    <a href='https://www.linkedin.com/in/giorgi-aphridonidze-7aa896291/' target='_blank'><i class="fa-brands fa-linkedin-in"></i></a>
                    <a href='https://www.upwork.com/freelancers/~01c18a1192545fe285' target='_blank'><i class="fa-brands fa-upwork"></i></a>
                    <a href='https://github.com/Apridonidze' target='_blank'><i class="fa-brands fa-github"></i></a>
                    <a href='mailto:giorgiapridonidze08@gmail.com' target='_blank'><i class="fa-regular fa-envelope"></i></a>
                </div>
            </div>

        </div>
    );
};