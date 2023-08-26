import React from "react";
import ShowcaseProjects from "../Objects/ShowcaseProjects";
import ShowcaseCard from "../ShowcaseCard";
// import ProjectCards from "../ProjectCards";

function Projects(props) {
  return (
    <div className="container">
      <div className="portfolio-projects-showcase">
        <h2 className="projects-by-me" id="portfolio">
          Featured Projects
        </h2>
        <div className="showcase-container">
          {ShowcaseProjects.map((project) => (
            <ShowcaseCard
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
    </div>
  );
}

export default Projects;
