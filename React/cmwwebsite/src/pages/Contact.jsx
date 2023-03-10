import React, { useState } from "react";
import './Contact.css';


export default function Contact() {
  const [form, setForm] = useState({
    from_name: "",
    reply_to: "",
    subject: "",
    message: "",
  });

  function handleChange(event) {
    setForm((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <hr />
      <div className="contactForm" id="contactForm">
        <form id="form">
          <div className="field">
            <label htmlFor="from_name">Name:</label>
            <input
              type="text"
              name="from_name"
              id="from_name"
              placeholder="Your whole name..."
              onChange={handleChange}
              value={form.from_name}
              required
            />
          </div>
          <div className="field">
            <label htmlFor="reply_to">Email:</label>
            <input
              type="email"
              name="reply_to"
              id="reply_to"
              placeholder="Your email address..."
              onChange={handleChange}
              value={form.reply_to}
              required
            />
          </div>
          <div className="field">
            <label htmlFor="subject">Subject:</label>
            <input
              type="text"
              name="subject"
              id="subject"
              placeholder="Subject..."
              onChange={handleChange}
              value={form.subject}
              required
            />
          </div>
          <div className="field">
            <label htmlFor="message">Message:</label>
            <textarea
              name="message"
              id="message"
              placeholder="Write your message..."
              onChange={handleChange}
              value={form.message}
              required
            />
          </div>

          <input type="submit" id="button" value="Send Email" />
        </form>
      </div>
    </div>
  );
}
