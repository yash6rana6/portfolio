import React, { useState } from 'react';
import ContactCSS from './../Contact/Contact.module.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! We'll get back to you soon.`);
  };

  return (
    <section id='contact'>
      <div className={ContactCSS.contact}>
        <div>
          <h2>Contact Me</h2>
          <p>Have a project in mind? Let’s work together to make it a reality.</p>
        </div>

        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" placeholder='Enter Name' id='name' required onChange={handleChange} />

          <label htmlFor="email">Email:</label>
          <input type="email" name="email" placeholder='Enter Email' id='email' required onChange={handleChange} />

          <label htmlFor="phone">Phone:</label>
          <input type="tel" name="phone" placeholder='Enter Phone' id='phone' required onChange={handleChange} />

          <button type="submit">Contact</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
