import './Projects.css';
import { useState } from 'react';
import confetti from 'canvas-confetti';

const Projects = () => {
    const [hideContent, setHideContent] = useState(true);
    
    const contentScreenId = hideContent ? "reveal-screen-on" : "reveal-screen-off";
    const contentBlur = hideContent ? "content-blur" : "";

    const revealProject = (e) => {
        console.log(e, window.screen.width, window.screen.height, e.clientX, e.clientX / window.screen.width, e.clientY, e.clientY / window.screen.height);

        confetti({
            particleCount: 200,
            spread: 100,
            // origin: { // why wont you woooork 😭
            //     x: e.clientX / window.screen.width,
            //     y: e.clientY / window.screen.height
            // }
        });
        setHideContent(!hideContent);
    }

    return (
        <section className="projects">
            <div id={contentScreenId} onClick={(e) => revealProject(e)}>reveal</div>
            <div className={`projects-content ${contentBlur}`}>
                <img id="homepage-screenshot" alt="insert homepage screenshot here" src="https://placekitten.com/200/300"/>
                <p id="website-details"> This website! 🎉 Check out the source code ** here **  </p>
            </div>
            
        </section>
    );
}

export default Projects;