import React from "react";
import { skills } from "./Objects/ObjectsSkills.js";

function PROJECTCARD(props) {
  return (
    <div className="card">
      <div className="card-content">
        <div className="card-header animated-bg" id="header">
          <a href={props.sLink} rel="noopener noreferrer" target="_blank">
            <img src={props.image} alt={props.alt} />
          </a>
        </div>
        <h3
          className="desktop-none card-title-mobile animated-bg animated-bg-text"
          id="title"
        >
          {props.title}
        </h3>
        <div className="techInfo">
          {props.skills.map((skillKey, index) => (
            <img
              width="50px"
              key={index}
              src={skills[skillKey - 1].img}
              alt={skills[skillKey - 1].alt}
            />
          ))}
        </div>
        <div className="project-info ">
          <a
            className="footer-link"
            href={props.gLink}
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            className="footer-link"
            href={props.yLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-youtube"></i>
          </a>
          <a
            className="footer-link"
            href={props.sLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        </div>
      </div>
      <div className="card-content">
        <div className="card-excerpt">
          <h3
            className="mobile-none card-title animated-bg animated-bg-text"
            id="title"
          >
            {props.title}
          </h3>
          <p className="infoDescription">{props.info}</p>
          <button className="moreInfoButton">
            <a
              className="moreInfoButtonLink"
              href={props.gLink}
              rel="noopener noreferrer"
              target="_blank"
            >
              More Info
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default PROJECTCARD;
