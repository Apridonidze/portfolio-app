import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { SiUpwork } from "react-icons/si";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">

            <div className="footer-left">
                <span>
                    © {currentYear} Giorgi Aphridonidze
                </span>

                <span className="footer-divider">/</span>

                <span>
                    giorgiapridonidze08@gmail.com
                </span>
            </div>


            <div className="footer-socials">

                <a
                    href="https://github.com/Apridonidze"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                >
                    <FaGithub />
                </a>

                <a
                    href="https://www.linkedin.com/in/giorgi-aphridonidze-7aa896291/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                >
                    <FaLinkedinIn />
                </a>

                <a
                    href="https://www.upwork.com/freelancers/~01c18a1192545fe285"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Upwork"
                >
                    <SiUpwork />
                </a>

            </div>

        </footer>
    );
}