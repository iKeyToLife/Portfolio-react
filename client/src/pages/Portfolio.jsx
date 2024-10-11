// Importing the Project component
import Project from '../components/Project';

function Portfolio() {
    return (
        <div className="animated"> {/* Main container with animation class */}
            <h2>PORTFOLIO</h2>
            <div className="projects"> {/* Container for project components */}
                <Project
                    imageSrc="./images/Dungeon-Mate.png" // Path to project image
                    title="Dungeon Mate" // Project title
                    deployedLink="https://dungeon-mate.onrender.com/" // Link to the deployed project
                    githubLink="https://github.com/iKeyToLife/Dungeon-Mate" // Link to the project's GitHub repository
                />
                <Project
                    imageSrc="./images/Pokemons-V2.png"
                    title="Pokemon Battle-V2"
                    deployedLink="https://pokemon-battle-bfgc.onrender.com/"
                    githubLink="https://github.com/iKeyToLife/Pokemon-Battle-V2"
                />
                <Project
                    imageSrc="./images/Weather-Dashboard.jpg"
                    title="Weather Dashboard"
                    deployedLink="https://ikeytolife.github.io/Weather-Dashboard/"
                    githubLink="https://github.com/iKeyToLife/Weather-Dashboard"
                />
                <Project
                    imageSrc="./images/Note-Taker.png"
                    title="Note Taker"
                    deployedLink="https://note-taker-hed0.onrender.com/"
                    githubLink="https://github.com/iKeyToLife/Note-Taker"
                />
                <Project
                    imageSrc="./images/Pokemon-Battle-Simulator.png"
                    title="Pokemon Battle Simulator"
                    deployedLink="https://bryan-mcintyre.github.io/Pokemon-Battle-Simulator/"
                    githubLink="https://github.com/bryan-mcintyre/Pokemon-Battle-Simulator"
                />
                <Project
                    imageSrc="./images/Kanban-Board.jpg"
                    title="Kanban Board"
                    deployedLink="https://ikeytolife.github.io/Kanban-Board/"
                    githubLink="https://github.com/iKeyToLife/Kanban-Board"
                />
            </div>
        </div>
    );
}

// Exporting Portfolio component
export default Portfolio;
