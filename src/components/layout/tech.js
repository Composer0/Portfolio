import React from "react";
import { languages, tools, frameworks } from "../Objects/ObjectsSkills";
import SHOWSKILLS from "../SkillIcons";

export default function Tech(props) {
  return (
    <div className="middle-section">
      <div className="separator">
        <div className="skill-row" id="technology">
          <h2 className="technology">Technical Skill Set</h2>
          <div className="skill-wrapper">
            <div className="skill-section__wrapper">
              <h3>Tools</h3>
              <div className="skill-column">{tools.map(SHOWSKILLS)}</div>
            </div>
            <div className="skill-section__wrapper">
              <h3>Languages</h3>
              <div className="skill-column">{languages.map(SHOWSKILLS)}</div>
            </div>
            <div className="skill-section__wrapper">
              <h3>Frameworks</h3>
              <div className="skill-column">{frameworks.map(SHOWSKILLS)}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
