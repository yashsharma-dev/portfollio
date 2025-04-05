import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [listContact] = useState([
    {
      title: "Phone Number",
      Value: "+91-8076479342",
    },
    {
      title: "Email",
      Value: "yashsharmadev15@gmail.com",
    },
  ]);

  return (
    <>
      <div className="contact fade-in-section" id="contact">
        <h1>Contact Me</h1>
        <p>
          I'm currently open to internship opportunities where I can apply and grow my skills in full-stack development. If you'd like to connect or collaborate, feel free to reach out!
        </p>

        {listContact.map((value, key) => (
          <div className="details" key={key}>
            <h3>{value.title}</h3>
            <p>{value.Value}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Contact;
