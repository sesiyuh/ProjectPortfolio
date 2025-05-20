/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Don't Be Shy!</h2>
      <span className="section__subtitle">Contact Me</span>

      <div className="contact__container container grid">
        <div className="contact__content">
          <div className="contact__info">
            <div className="contact__card">
              <i className="bx bx-mail-send contact__card-icon" />

              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">
                <a
                  href="mailto:mpmariano@tip.edu.ph"
                  target="_blank"
                  className="contact__button"
                >
                  mpmariano@tip.edu.ph
                </a>
              </span>
            </div>
            <div className="contact__card">
              <i className="bx bxl-whatsapp contact__card-icon" />

              <h3 className="contact__card-title">Whatsapp</h3>
              <span className="contact__card-data">
                <a
                  href="https://api.whatsapp.com/send?phone=923241441444"
                  target="_blank"
                  className="contact__button"
                >
                  +9610475612
                </a>
              </span>
            </div>
            <div className="contact__card">
              <i className="uil uil-location-point contact__card-icon" />
              <h3 className="contact__card-title">Location</h3>
              <span className="contact__card-data">Caloocan City</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
