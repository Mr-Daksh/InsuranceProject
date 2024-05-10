import React from "react";
import InformationCard from "../../informationcard/InformationCard";
import "./Info.css";
function Info() {
  return (
    <div className="main-info">
      <p className="sub-heading">ECOSYSTEM</p>
      <h2 className="heading">Our Policies Offered</h2>
      <div className="info-container">
        <div className="sub-info-container">
          <InformationCard
            className="policy"
            title={"Car Insurance"}
            price={30}
          />
          <InformationCard
            className="policy"
            title={"Car Insurance"}
            price={30}
          />
          <InformationCard
            className="policy"
            title={"Car Insurance"}
            price={30}
          />
        </div>
      </div>
    </div>
  );
}

export default Info;
