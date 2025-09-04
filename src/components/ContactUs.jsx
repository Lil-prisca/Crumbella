import React from "react";
import "../styles/contact.css";

export default function Contact() {
  return (
    <section className="contact">
      <div className="contact-text">
        <p className="tag">// Contact Us</p>
        <h1>We’d Love To Hear From You</h1>
        <p>
          Have questions about an order, a custom cake, or catering service?
          Fill out the form or reach us directly.
        </p>

        <ul className="contact-details">
          <li>📍 123 Sweet Street, Lagos, Nigeria</li>
          <li>📞 +234 810 123 4567 (WhatsApp available)</li>
          <li>📧 hello@crumbellaa.com</li>
          <li>🕒 Mon–Sat, 9:00 AM – 6:00 PM</li>
        </ul>
      </div>

      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <input type="text" placeholder="Subject" />
        <textarea placeholder="Your Message" rows="5"></textarea>
        <button type="submit" className="btn">Send Message</button>
      </form>
    </section>
  );
}
