import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import "./bodyside.css";

const BodySide = () => {
  library.add(fas);

  const paragraphs = [
    "X company released a short report on $XYZ, High IV option sales opps.",
    "$XYZ just announced an acquisition of $ABC at $X. This is an arbitrage opportunity, with the max gain being %X if the deal closes, but the possible risk is %Y  if the deal fails.",
    "$XYZ just announced an acquisition of $ABC at $X. This is an arbitrage opportunity, with the max gain being %X if the deal closes, but the possible risk is %Y  if the deal fails.",
    "$XYZ just announced an acquisition of $ABC at $X. This is an arbitrage opportunity, with the max gain being %X if the deal closes, but the possible risk is %Y  if the deal fails.",
    "$XYZ just announced an acquisition of $ABC at $X. This is an arbitrage opportunity, with the max gain being %X if the deal closes, but the possible risk is %Y  if the deal fails.",
    "$XYZ just announced an acquisition of $ABC at $X. This is an arbitrage opportunity, with the max gain being %X if the deal closes, but the possible risk is %Y  if the deal fails.",
  ];

  return (
    <div className="container">
      <div className="first-part">
        <div className="icons">
          <div className="icon">
            <FontAwesomeIcon icon="fa-solid fa-dollar-sign" className="icon" />
            <div className="icon-text">$TSLA</div>
          </div>
          <div className="separator"></div>
          <div className="icon">
            <FontAwesomeIcon icon="fa-solid fa-newspaper" className="icon" />
            <div className="icon-text">200 Contracts</div>
          </div>
          <div className="separator"></div>
          <div className="icon">
            <FontAwesomeIcon
              icon="fa-solid fa-money-bill-trend-up"
              className="icon"
            />
            <div className="icon-text">12.2%</div>
          </div>
          <div className="separator"></div>
          <div className="icon">
            <FontAwesomeIcon icon="fa-solid fa-sack-dollar" className="icon" />
            <div className="icon-text">High risk</div>
          </div>
        </div>
        <div className="text">
          Someone Just bought xxxx contracts of $XYZ, this is notable because
          the relative volume on this options trade is X.X%.
        </div>
      </div>
      <div className="other-parts">
        <div>
          {paragraphs.map((text, index) => (
            <p className="border" key={index}>
              {text}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BodySide;
