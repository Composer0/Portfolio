import React from "react";
import { skills } from "./Objects/ObjectsSkills.js";

function PROJECTCARD(props) {
  return (
    <div className="flexCenter">
      <div key={props.key} id="main" className="newCard">
        <div className="showcaseCard" id="header">
          <a href={props.sLink} rel="noopener noreferrer" target="_blank">
            <img src={props.image} alt={props.alt} />
          </a>

          <div className="showcaseCard-info overview flexColumn">
            <h3 className="" id="title">
              {props.title}
            </h3>
            <div className="showcaseCard-info">
              <div className="techInfo">
                {props.skills.map((skillKey, index) => (
                  <div>
                    <img
                      width="50px"
                      key={index}
                      src={skills[skillKey - 1].img}
                      alt={skills[skillKey - 1].alt}
                    />
                  </div>
                ))}
              </div>
              <p className="showcaseText">
                <hr />
                {props.info}
              </p>
              <div className="flex-row">
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
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PROJECTCARD;
