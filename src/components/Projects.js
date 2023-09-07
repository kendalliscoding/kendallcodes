import './Projects.css';
import { useState } from 'react';

const Projects = () => {
    const [revealScreen, setRevealScreen] = useState(true);
    const revealId = revealScreen ? "reveal-screen-on" : "reveal-screen-off";
    return (
        <section className="projects">
            <div id={revealId} onClick={() => setRevealScreen(!revealScreen)}>Click Me</div>
            <img id="homepage-screenshot" alt="insert homepage screenshot here" />
            <p id="website-details"> This website! 🎉 Check out the source code ** here **  </p>
            
        </section>
    );
}

export default Projects;