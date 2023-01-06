import React from "react";
import ShowcaseProjects from "../Objects/ShowcaseProjects";
import ShowcaseCard from "../ShowcaseCard";
// import ProjectCards from "../ProjectCards";

function Projects(props) {
    return (
        <div className="container">
            <div className="portfolio-projects-showcase">
                <h3 className="projects-by-me" id="portfolio">Featured Projects</h3>
                    <div className="showcase-container">
                    {ShowcaseProjects.map(ShowcaseCard)}

                                                    
                    </div>
            </div>
        </div>
    );
}

export default Projects;