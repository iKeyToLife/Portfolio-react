import './css/About.css';

export default function About() {
  return (
    <div className="about-section">
      <h2>About Me</h2>
      <p className="about-text">
        Hi, I’m Aleksandr Polbennikov, a passionate software developer with experience in building efficient and scalable web applications. My expertise lies in both frontend and backend development, with a focus on clean code, system optimization, and automation. I’m committed to delivering robust solutions and continuously improving my skills.
      </p>

      <h3>Frontend</h3>
      <ul className="skills-list">
        <li>JavaScript (ES6+)</li>
        <li>React</li>
        <li>GraphQL</li>
        <li>HTML5 & CSS3</li>
        <li>Bootstrap</li>
      </ul>

      <h3>Backend</h3>
      <ul className="skills-list">
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

      <h3>Tools</h3>
      <ul className="skills-list">
        <li>IntelliJ IDEA, VS Code</li>
        <li>Docker</li>
        <li>Jenkins</li>
        <li>Git, GitHub, GitLab</li>
        <li>Maven, Gradle</li>
        <li>Postman, Swagger</li>
        <li>npm</li>
      </ul>
    </div>
  );
}
