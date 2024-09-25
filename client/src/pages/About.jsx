import "./css/About.css"; // Importing CSS styles for the About component

export default function About() {
  return (
    <div className="about-section animated"> {/* Main container with applied styles */}
      <h2>About Me</h2> {/* Heading for the section */}
      <p className="about-text">
        Hi, I’m Aleksandr Polbennikov, a passionate software developer with experience in building efficient and scalable web applications.
        My expertise lies in both frontend and backend development, with a focus on clean code, system optimization, and automation.
        I’m committed to delivering robust solutions and continuously improving my skills.
      </p>

      <div className="about-containers">
        <section className="about-container">
          <h3>Frontend</h3> {/* Subheading for frontend skills */}
          <ul className="skills-list"> {/* Unordered list for skills */}
            <li>JavaScript (ES6+)</li>
            <li>React</li>
            <li>GraphQL</li>
            <li>HTML5 & CSS3</li>
            <li>Bootstrap</li>
          </ul>
        </section>
        <section className="about-container">
          <h3>Backend</h3> {/* Subheading for backend skills */}
          <ul className="skills-list"> {/* Unordered list for skills */}
            <li>Java (8, 11)</li>
            <li>Spring Framework (Boot, Data, Cloud)</li>
            <li>Hibernate</li>
            <li>JDBC</li>
            <li>REST API</li>
            <li>Node.js</li>
            <li>MongoDB</li>
            <li>SQL (MySQL, PostgreSQL)</li>
            <li>Kafka, RabbitMQ</li>
          </ul>
        </section>

        <section className="about-container">
          <h3>Tools</h3> {/* Subheading for tools used */}
          <ul className="skills-list"> {/* Unordered list for tools */}
            <li>IntelliJ IDEA, VS Code</li>
            <li>Docker</li>
            <li>Jenkins</li>
            <li>Git, GitHub, GitLab</li>
            <li>Maven, Gradle</li>
            <li>Postman, Swagger</li>
            <li>npm</li>
          </ul>
        </section>
      </div>
    </div>
  );
}