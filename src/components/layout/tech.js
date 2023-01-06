import React from "react";
import Skills from "../Objects/ObjectsSkills";
import SHOWSKILLS from "../SkillIcons";


export default function Tech(props) {
    return (
<div className="middle-section" >
<div className="separator">

    <div className="skill-row" id="technology">
        <h3 className="technology" >Technical Skill Set</h3>
        <div className="skill-container">
        {Skills.map(SHOWSKILLS)}
    </div>
</div>
</div>
</div>

)}
