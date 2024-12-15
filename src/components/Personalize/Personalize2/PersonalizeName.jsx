import React from "react";
import image2 from "../../../image/image2.png";
import image3 from "../../../image/image3.png";
import image4 from "../../../image/image4.png";
import image5 from "../../../image/image5.png";
import "./personalizename.css";

const PersonalizeName = () => {
  return (
    <div className="app-container">
      <section className="personalize-section">
        <p className="back-icon">
          <a href="/personalize">
            <i className="bi bi-chevron-left"></i>
          </a>
        </p>
        <h2>Personalize</h2>
        <p className="call-icon">
          <a href="/callbackform">
            <i className="bi bi-telephone-fill"></i>
          </a>
        </p>
      </section>

      <section className="how-it-works">
        <h3>How it works?</h3>
        <p>1 Lakh Plus Happy Customers Served</p>
        <div className="icons-container">
          {[
            { img: image2, text: "Personal Nutritionist" },
            { img: image3, text: "Tasty Meals" },
            { img: image4, text: "Weekly Health Checks" },
            { img: image5, text: "Doorstep Delivery" },
          ].map((item, index) => (
            <div className="icon-box" key={index}>
              <img src={item.img} className="image" alt={item.text} />
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="goal-section">
        <h3>Your Goal</h3>
        <p>Please select one</p>
        <div className="goal-buttons">
          {[
            { list: "/lose", name: "Lose Weight" },
            { list: "/desi", name: "Desi Tiffin Service" },
            { list: "/eating", name: "Healthy Eating" },
            { list: "/gain", name: "Gain Muscle" },
            { list: "/management", name: "Diabetes Management" },
          ].map((goal, index) => (
            <a href={goal.list} className="goal-button" key={index}>
              {goal.name}
            </a>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PersonalizeName;
