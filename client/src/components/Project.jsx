import 'bootstrap/dist/css/bootstrap.min.css'; // Importing Bootstrap CSS
import PropTypes from 'prop-types'; // Importing PropTypes for type checking
import { Button, Card, Col, Container, Row } from 'react-bootstrap'; // Importing Bootstrap components

function Project({ imageSrc, title, deployedLink, githubLink }) {
    return (
        <Container className="project-card"> {/* Container for the project card */}
            <Row className="justify-content-center"> {/* Centering the content in the row */}
                <Col> {/* Single column for the card */}
                    <Card className="text-center bg-black text-white"> {/* Card with dark background and white text */}
                        <Card.Img className="project-img" variant="top" src={imageSrc} alt={title} /> {/* Project image */}
                        <Card.Body>
                            <Card.Title>{title}</Card.Title> {/* Project title */}
                            <div className="d-flex justify-content-between mt-3"> {/* Buttons for deployed app and GitHub repo */}
                                <Button className="custom-button" variant="warning" href={deployedLink} target="_blank">Deployed App</Button> {/* Link to deployed app */}
                                <Button className="custom-button" variant="warning" href={githubLink} target="_blank">GitHub Repo</Button> {/* Link to GitHub repo */}
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

// PropTypes for validating props passed to the Project component
Project.propTypes = {
    imageSrc: PropTypes.string.isRequired, // Image source is required and must be a string
    title: PropTypes.string.isRequired, // Title is required and must be a string
    deployedLink: PropTypes.string.isRequired, // Deployed link is required and must be a string
    githubLink: PropTypes.string.isRequired, // GitHub link is required and must be a string
};

export default Project; // Exporting the Project component