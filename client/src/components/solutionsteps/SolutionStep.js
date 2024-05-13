import React from "react";

function SolutionStep(props) {
  return (
    <div className="about-text-step">
      <p className="about-text-sTitle">
        <span>
          {/* <FontAwesomeIcon className="fa-icon" icon={faCircleChevronDown} />{" "} */}
          {props.title}
        </span>
      </p>
      <p className="about-text-description">{props.description}</p>
    </div>
  );
}

export default SolutionStep;