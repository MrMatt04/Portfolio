import React, { useRef } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    console.log("hello");
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7ndw99c",
        "template_5wgfqc9",
        form.current,
        "iskfLjI_R0QnHRCl1"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert("email sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section id="contactPage">
      <div id="clients">
        {/*<h1 className="contactPageTitle">My Clients</h1>
                <p className="clientDesc">I have had the opportunity to work with a diverse group of companies.
                Some of the notable companies I have worked with includes
                </p>
                <div className="clientImgs">
                    <img src={Wallmarkt} alt="client" className="clientImg"/>
                    <img src={Adobe} alt="client" className="clientImg"/>
                    <img src={Microsoft} alt="client" className="clientImg"/>
                    <img src={FaceBook} alt="client" className="clientImg"/>
                </div>*/}
      </div>
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">
          Please fill out the form below to discuss any work opportunities.
        </span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="name"
            placeholder="Your Name"
            name="your_name"
            required
          />
          <input
            type="email"
            className="email"
            placeholder="Your Email"
            name="your_email"
            required
          />
          <textarea
            name="message"
            className="msg"
            rows="5"
            placeholder="Your Message"
            required
          />
          <input type="Submit" value="Send" className="submitBtn" />
        </form>
      </div>
    </section>
  );
};

export default Contact;
