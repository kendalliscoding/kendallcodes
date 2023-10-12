import './Projects.css';
import { useState } from 'react';
import confetti from 'canvas-confetti';
import websiteIcon from '../photos/website-icon.png';

const Projects = () => {
    const [hideContent, setHideContent] = useState(true);
    
    const contentScreenId = hideContent ? "reveal-screen-on" : "reveal-screen-off";
    const contentBlur = hideContent ? "content-blur-on" : "content-blur-off";

    const revealProject = (e) => {
        confetti({
            particleCount: 200,
            spread: 100
        });
        setHideContent(!hideContent);
    }

    return (
        <section className="projects">
            <div id={contentScreenId} onClick={(e) => revealProject(e)}>reveal</div>
            <div className={`projects-content ${contentBlur}`}>
                <img id="homepage-screenshot" alt="Computer icon displaying text that says 'Kendall Codes'" src={websiteIcon} />
                <div id="website-details"> 
                    <p>This website!</p>
                    <p>Building this portfolio website with React has been an opportunity for me to dive deeper into web development and highlight my accomplishments. Thank you for visiting. :)</p>
                    <p>Check out the source code <a id="project-source-code" href="https://github.com/kendalliscoding/kendallcodes" target="_blank" rel="noopener noreferrer">here</a>~  </p> 
                </div>
            </div>
            
        </section>
    );
}

export default Projects;