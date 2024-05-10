import React from "react";
import "./informationcard.css";

function InformationCard({ title, price, description }) {
  return (
    <div className="information-container">
      <div className="box">
        <div>
          <h5>{title}</h5>
          <h2>
            ${price}
            <span>/month</span>
          </h2>
        </div>
        <div>
          <ul>
            <li className="tick">Item 1</li>
            <li className="tick">Item 2</li>
            <li className="tick">Item 3</li>
          </ul>
        </div>
        <div>
        <button className="information-button">Learn more</button>
        <div>Reach out for a customer plan<br></br>
        <a>here</a></div>
        </div>
      </div>
    </div>
  );
}

export default InformationCard;

// 4 Homepages
// Full UI Kit
// Other important point
