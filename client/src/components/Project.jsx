import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

function Project({ imageSrc, title, deployedLink, githubLink }) {
    return (
        <Container className="project-card">
            <Row className="justify-content-center">
                <Col>
                    <Card className="text-center bg-black text-white">
                        <Card.Img className="project-img" variant="top" src={imageSrc} alt={title} />
                        <Card.Body>
                            <Card.Title>{title}</Card.Title>
                            <div className="d-flex justify-content-between mt-3">
                                <Button className="custom-button" variant="warning" href={deployedLink} target="_blank">Deployed App</Button>
                                <Button className="custom-button" variant="warning" href={githubLink} target="_blank">GitHub Repo</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

Project.propTypes = {
    imageSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    deployedLink: PropTypes.string.isRequired,
    githubLink: PropTypes.string.isRequired,
};

export default Project;
