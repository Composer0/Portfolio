import React from "react";
import ProjectObjects from "../Objects/ObjectsProjects";
import ProjectCards from "../ProjectCards";

function Projects(props) {
    return (
        <div>
        <hr/>
                        <h2 className="projects-by-me" id="portfolio">Additional Projects</h2>
            <div className="portfolio-projects">
                    <div className="container">
                    {ProjectObjects.map(ProjectCards)}

                                                    
                    </div>
            </div>
        <br/>
        </div>
    );
}

export default Projects;