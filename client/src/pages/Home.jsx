import { Button, Col, Container, Row } from 'react-bootstrap';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import myPhoto from '../assets/images/myPhoto.png';
import './css/Home.css';

export default function Home() {
  return (
    <Container fluid className="home-page">
      <Row className="align-items-center min-vh-80">
        <Col md={6} className="text-left">
          <h2>Hello, it&apos;s me</h2>
          <h3>Aleksandr Polbennikov</h3>
          <p>And I&apos;m a developer</p>
          <div className="social-links">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaLinkedin size={30} />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaGithub size={30} />
            </a>
          </div>
          <Button variant="warning" href="/path-to-cv.pdf" download className="mt-3">
            Download CV
          </Button>
        </Col>
        <Col md={6} className="text-center">
          <div className="hexagon-container">
            <div className="hexagon">
              <div className="top-triangle"></div>
              <div className="middle-rectangle">
                <img src={myPhoto} alt="Aleksandr Polbennikov" className="img-fluid profile-photo" />
              </div>
              <div className="bottom-triangle"></div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
