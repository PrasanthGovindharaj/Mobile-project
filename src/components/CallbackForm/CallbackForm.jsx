import React, { useState } from "react";
import "./CallbackForm.css";
import { useNavigate } from "react-router-dom";

const CallbackForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [message, setMessage] = useState("");
    const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("Thank you! We will contact you shortly.");
    console.log("Form Submitted:", formData);

    setFormData({ name: "", email: "", phone: "" });
  };

  return (
    <div className="callback-form-container">
      <div className="callback-form">
        <button
          onClick={() => navigate("/personalizename")}
          className="close-btn"
        >
          ✖
        </button>
        <h2 className="form-title">Request for a callback</h2>
        <p className="form-subtitle">
          Our team will contact you shortly to solve your queries and find the
          key to your health.
        </p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
        {message && <p className="confirmation-message">{message}</p>}
      </div>
    </div>
  );
};

export default CallbackForm;
