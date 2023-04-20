import React from "react";
import "./Language.css";

function Language(props) {

  
return (
    <div className="skill">
      <div>{props.props.fields.languageName}</div>
      <div className="level">{props.props.fields.languageLevel}</div>
    </div>
  );
}

export default Language;