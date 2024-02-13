import React from "react";
import "./categories.css";

const categories = ["Trading", "Automation", "Portfolio", "Alerts", "Training"];

const CategoryList = () => {
  return (
    <div className="category-list">
      {categories.map((category, index) => {
        const isLastTwo = index >= categories.length - 2;
        return (
          <React.Fragment key={category}>
            {index !== 0 && <div className="separator"></div>}
            <div className="category-container">
              {!isLastTwo && <div className="coming-soon">Coming Soon</div>}
              <div
                className={`category ${
                  isLastTwo
                    ? index === categories.length - 1
                      ? "category-gray"
                      : "category-white"
                    : ""
                }`}
              >
                {category}
              </div>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default CategoryList;
