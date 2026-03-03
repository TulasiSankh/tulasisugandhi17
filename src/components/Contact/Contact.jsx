import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call for a professional feel
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Message sent successfully!");
      e.target.reset();
    }, 2000);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        {/* Left Side: Professional Information */}
        <div className="contact-info">
          <span className="badge">Get In Touch</span>
          <h2 className="section-title">Let's build something <br/><span>extraordinary.</span></h2>
          <p className="contact-desc">
            Currently open to new opportunities and interesting projects. 
            Whether you have a question or just want to say hi, I’ll try my best to get back to you!
          </p>

          <div className="info-cards">
            <div className="info-card">
              <div className="icon-wrapper">📧</div>
              <div className="info-text">
                <h4>Email</h4>
                <p>sankhtulasi@gmail.com</p>
              </div>
            </div>
            
            <div className="info-card">
              <div className="icon-wrapper">📞</div>
              <div className="info-text">
                <h4>Phone</h4>
                <p>+91 8660026699</p>
              </div>
            </div>
          </div>

          
        </div>

        {/* Right Side: High-Fidelity Form */}
        <div className="contact-form-container">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" placeholder="Name" required />
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" placeholder="Email" required />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea rows="5" placeholder="Tell me about your project or inquiry..." required></textarea>
            </div>
            
            <button 
              type="submit" 
              className={`btn-filled ${isSubmitting ? 'loading' : ''}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
              <span className="btn-arrow">→</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;