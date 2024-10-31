import React, { useState } from "react";
import "./ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Form validation
  const validateForm = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required";
    if (!formData.email.trim()) tempErrors.email = "Email is required";
    if (!/\S+@\S+\.\S+/.test(formData.email))
      tempErrors.email = "Email is not valid";
    if (!formData.message.trim()) tempErrors.message = "Message is required";
    return tempErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsLoading(true);

    // Simulating form submission
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <section className="contact-section" id="contact">
      <h2>Contact Us</h2>
      <p>Feel free to reach out to us for any inquiries or questions!</p>

      {/* Contact Form */}
      <div className="contact-container">
        {isSubmitted ? (
          <div className="success-message">
            <h3>Thank you! Your message has been sent.</h3>
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className={errors.name ? "input-error" : ""}
              />
              {errors.name && <p className="error-text">{errors.name}</p>}
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? "input-error" : ""}
              />
              {errors.email && <p className="error-text">{errors.email}</p>}
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className={errors.message ? "input-error" : ""}
              />
              {errors.message && <p className="error-text">{errors.message}</p>}
            </div>
            <button type="submit" className="cta-button">
              {isLoading ? <span className="spinner"></span> : "Send Message"}
            </button>
            {submitError && <p className="error-text">Submission failed. Try again!</p>}
          </form>
        )}
         <div className="contact-img">
          <img src="/src/assets/env3.jpeg" alt="" />

       </div>
        
      </div>
    </section>
  );
};

export default ContactForm;
