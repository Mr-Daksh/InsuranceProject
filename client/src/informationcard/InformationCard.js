import React from "react";
import FontAwesomeIcon from 'react-fontawesome'
function InformationCard(props) {
  return (
    <div className="info-cards">
      <span className="info-card-icon">
        {props.icons}
      </span>
      <p className="info-card-title">{props.title}</p>
      <p className="info-card-description">{props.description}</p>
    </div>
  );
}
   
export default InformationCard;