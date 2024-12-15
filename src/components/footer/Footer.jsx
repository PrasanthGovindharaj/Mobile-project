import React, { useState } from "react";
import "./footer.css";

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCheckedGoal, setIsCheckedGoal] = useState(false);
  const [isCheckedGender, setIsCheckedGender] = useState(false);

  const toggleDropdown = (event) => {
    setIsOpen(!isOpen);
  };

  const handleCheckboxChangeGoal = () => {
    setIsCheckedGoal(!isCheckedGoal);
  };

  const handleCheckboxChangeGender = () => {
    setIsCheckedGender(!isCheckedGender);
  };

  return (
    <footer className="footer-dropdown">
      <div className="dropdown">
        <a
          href="#d"
          className="dropbtn"
          onClick={toggleDropdown}
          aria-expanded={isOpen ? "true" : "false"}
          aria-controls="dropdownContent"
        >
          <span>Summary</span>
          <i className={isOpen ? "bi-chevron-up" : "bi-chevron-down"}></i>
        </a>
        {isOpen && (
          <div className="dropdown-content" id="dropdownContent">
            <div className="summary-item">
              <div className="check-icon">✔</div>
              <div className="check1">
                <h2 className="item-text">Goal</h2>
                <h3 className="item-value">Healthy Eating</h3>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="goalCheckbox"
                  checked={isCheckedGoal}
                  onChange={handleCheckboxChangeGoal}
                />
                <label htmlFor="goalCheckbox"></label>
              </div>
            </div>
            <div className="summary-item">
              <div className="check-icon">✔</div>
              <div className="check1">
                <h2 className="item-text">Gender</h2>
                <h3 className="item-value">Male</h3>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="genderCheckbox"
                  checked={isCheckedGender}
                  onChange={handleCheckboxChangeGender}
                />
                <label htmlFor="genderCheckbox"></label>
              </div>
            </div>

            <div className="bmi-container">
              <input
                type="number"
                id="bmi"
                className="bmi-input"
                placeholder="Enter BMI"
              />
            </div>
          </div>
        )}
      </div>
    </footer>
  );
};
export default Footer;