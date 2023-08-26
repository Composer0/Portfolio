import React from "react";
import ProjectObjects from "../Objects/ObjectsProjects";
import ProjectCards from "../ProjectCards";

function Projects(props) {
  return (
    <div>
      <hr />
      <h2 className="projects-by-me" id="portfolio">
        Additional Projects
      </h2>
      <div className="portfolio-projects">
        <div className="container">
          {ProjectObjects.map((project) => (
            <ProjectCards
              key={project.key} // Provide a unique key
              image={project.image}
              title={project.title}
              alt={project.alt}
              sLink={project.sLink}
              gLink={project.gLink}
              yLink={project.yLink}
              info={project.info}
              skills={project.tech}
            />
          ))}
        </div>
      </div>
      <br />
    </div>
  );
}

export default Projects;
