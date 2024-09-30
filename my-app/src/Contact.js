//Assignment 1 - Jen MacDonald - 301000349 - Sep 28,2024
import React, { useState } from "react";
import './Style.css';

function Contact() {
  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Message sent!");
  };

  return (
    <><div className="contact-info">
      <h1>My Contact me here!</h1>

        <div className="myInfo-container">
        <p>Jen MacDonald</p>
        <p>Email: jmacdo68@my.centennialcollege.com</p>
      </div>

        <h1>Or submit a form!</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} />
          <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} />
          <input type="email" name="email" placeholder="Email" onChange={handleChange} />
          <textarea name="message" placeholder="Message" onChange={handleChange}></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div></>
  );
}

export default Contact;