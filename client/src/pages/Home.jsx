import { Button, Col, Container, Row } from 'react-bootstrap';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import myPhoto from '../assets/images/myPhoto.png';
import './css/Home.css';

export default function Home() {
  return (
    <Container fluid className="home-page animated animated-right">
      <Row className="align-items-center min-vh-80">
        <Col md={6} className="d-flex justify-content-center align-items-center">
          <div className="text-start text-wrapper">
            <h2>Hello, it&apos;s me</h2>
            <h3>Aleksandr Polbennikov</h3>
            <p>And I&apos;m a developer</p>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/polbennikov-aleksandr/" target="_blank" rel="noopener noreferrer" className="social-link" id="linkedin">
                <FaLinkedin size={30} />
              </a>
              <a href="https://github.com/iKeyToLife/" target="_blank" rel="noopener noreferrer" className="social-link" id="github">
                <FaGithub size={30} />
              </a>
              <a href="https://www.facebook.com/profile.php?id=100001472176157" target="_blank" rel="noopener noreferrer" className="social-link" id='facebook'>
                <FaFacebook size={30} />
              </a>
            </div>
            <Button variant="warning" href="https://drive.google.com/uc?export=download&id=1bzXA2_NyhQBFSy_OhEciIx6iUXqltH-I" download className="mt-3">
              Download CV
            </Button>
          </div>
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
