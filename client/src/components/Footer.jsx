import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
    return <footer className="main-footer">
        <div className="social-links">
            <a href="https://www.linkedin.com/in/polbennikov-aleksandr/" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaLinkedin size={30} />
            </a>
            <a href="https://github.com/iKeyToLife/" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaGithub size={30} />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100001472176157" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaFacebook size={30} />
            </a>
        </div>
    </footer>
}

export default Footer;