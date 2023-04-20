import React from "react";
import "./Skill.css";

function Skill(props) {

  
return (
    <div className="skill">
      <div>{props.props.fields.skillName}</div>
      <div className="level">{props.props.fields.skillLevel}</div>
    </div>
  );
}

export default Skill;