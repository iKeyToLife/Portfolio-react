import Project from '../components/Project';

function Portfolio() {
    return (
        <div>
            <h2>PORTFOLIO</h2>
            <div className="d-flex flex-row flex-wrap">
                <Project
                    imageSrc="./images/Dungeon-Mate.png"
                    title="Dungeon Mate"
                    deployedLink="https://github.com/iKeyToLife/Dungeon-Mate"
                    githubLink="https://github.com/iKeyToLife/Dungeon-Mate"
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

export default Portfolio;
