// Importing icons from react-icons library
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
    return <footer className="main-footer animated animated-right"> {/* Main footer element */}
        <div className="social-links">{/* Container for social media links */}
            <a href="https://www.linkedin.com/in/polbennikov-aleksandr/"
                target="_blank" // Opens the link in a new tab
                rel="noopener noreferrer" // Security measure for external links
                className="social-link"
                id="linkedin">
                <FaLinkedin size={30} /> {/* LinkedIn icon */}
            </a>
            <a href="https://github.com/iKeyToLife/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                id="github">
                <FaGithub size={30} /> {/* GitHub icon */}
            </a>
            <a href="https://www.facebook.com/profile.php?id=100001472176157"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                id="facebook">
                <FaFacebook size={30} /> {/* Facebook icon */}
            </a>
        </div>
    </footer>
}

// Exporting Footer component
export default Footer;