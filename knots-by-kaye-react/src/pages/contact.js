import React from "react";
import MailTo from "./email";
import "./styles/contact.css";

export default function Contact() {
    return (
        <div className="container contact-container">
            <div className="contact-text">Contact me below for any questions!</div>
            <div className="contact-email">
            <MailTo label="contact@knotsbykaye.com" mailto="mailto:contact@knotsbykaye.com" />
            </div>
            <hr />
          <div class="row social-link text-center">
              <div class="col-3"><a href="https://www.instagram.com/knotsbykaye/" target="_blank" rel="noreferrer"><i class="fa-brands fa-instagram"></i></a></div>
              <div class="col-3"><a href="https://twitter.com/KnotsbyKaye" target="_blank" rel="noreferrer"><i class="fa-brands fa-twitter"></i></a></div>
              <div class="col-3"><a href="https://www.tiktok.com/@knotsbykaye" target="_blank" rel="noreferrer"><i class="fa-brands fa-tiktok"></i></a></div>
              <div class="col-3"><a href="https://www.facebook.com/profile.php?id=100090391507123" target="_blank" rel="noreferrer"><i class="fa-brands fa-facebook"></i></a></div>
          </div>
        </div>
    );
};