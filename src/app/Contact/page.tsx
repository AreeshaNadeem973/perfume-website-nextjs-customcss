

"use client";

import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

const Contact: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    
    // Apply scroll disabling only on mobile screens (e.g. width <= 768px)
    if (typeof window !== "undefined" && window.innerWidth <= 768) {
      const originalOverflow = document.body.style.overflow;
      const originalPosition = document.body.style.position;
      
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      
      // Cleanup: restore the original styles when the component unmounts
      return () => {
        document.body.style.overflow = originalOverflow;
        document.body.style.position = originalPosition;
      };
    }
  }, []);

  return (
    <div id="contact" className="contact-container" data-aos="fade-up">
      <h1 data-aos="fade-right">Contact Us</h1>
      <form className="contact-form">
        <div className="form-group" data-aos="fade-left">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group" data-aos="fade-right">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group" data-aos="fade-left">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows={5} required></textarea>
        </div>
        <button type="submit" className="submit-btn" data-aos="zoom-in">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;






