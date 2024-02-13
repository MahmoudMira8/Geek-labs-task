import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faLayerGroup, faCheck } from "@fortawesome/free-solid-svg-icons";
import "./filterside.css";

library.add(faLayerGroup, faCheck);

const FilterSide = () => {
  return (
    <div className="filter-container">
      <h1 className="filter-heading">Filters</h1>
      <div className="part">
        <p className="mb-2">Industry</p>
        <div class="input-wrapper">
          <label for="text-input" class="label">
            <FontAwesomeIcon
              icon={faLayerGroup}
              className="fa-layer-group fa-icon-small"
            />
            <input
              id="text-input"
              placeholder="Health care."
              type="search"
              className="input-field"
            />
          </label>
        </div>
        <p className="mt-2 gray">Choose something.</p>
      </div>
      <div className="part">
        <p className="mb-2">Market Cap</p>
        <div class="input-wrapper">
          <label for="text-input" class="label">
            <FontAwesomeIcon
              icon={faLayerGroup}
              className="fa-layer-group fa-icon-small"
            />
            <input
              id="text-input"
              placeholder="Large-cap"
              type="search"
              className="input-field"
            />
          </label>
        </div>
        <p className="mt-2 gray">Press Apply to see changes.</p>
      </div>
      <div className="risk-container">
        <div className="part">
          <p className="mb-2">Risk</p>
          <div class="input-wrapper">
            <label for="text-input" class="label">
              <FontAwesomeIcon
                icon={faLayerGroup}
                className="fa-layer-group fa-icon-small"
              />
              <input
                id="text-input"
                placeholder="Insert text here"
                type="search"
                className="input-field"
              />
            </label>
          </div>
        </div>
        <div className="risks-list">
          <div className="risk" style={{ backgroundColor: "white" }}>
            <div className="risk-icon">
              <FontAwesomeIcon icon={faCheck} />
            </div>
            <div className="risk-text">Low Risk</div>
          </div>
          <div className="risk">
            <div className="risk-icon">
              <FontAwesomeIcon icon={faCheck} className="fa-icon-small" />
            </div>
            <div className="risk-text">Mid Risk</div>
          </div>
          <div className="risk" style={{ color: "#554eb7" }}>
            <div className="risk-icon">
              <FontAwesomeIcon icon={faCheck} className="fa-icon-small" />
            </div>
            <div className="risk-text">High Risk</div>
          </div>
          <div className="risk">
            <div className="risk-icon">
              <FontAwesomeIcon icon={faCheck} className="fa-icon-small" />
            </div>
            <div className="risk-text">Option text here</div>
          </div>
        </div>
      </div>
      <div className="button">
        <span style={{ cursor: "pointer" }}>Apply Filters</span>
      </div>
    </div>
  );
};

export default FilterSide;
