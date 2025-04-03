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
      Value: "yashsharmaindia26@gmaill.com",
    },
  ]);
  return (
    <>
        <div className="contact" >
            <h1>This is my Contact</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum cumque velit repellat fuga qui iure, voluptates eum enim ipsam nesciunt eveniet, harum, blanditiis totam! Distinctio voluptatum quia aut beatae recusandae.</p>
            
            {
                listContact.map((value,key)=>(
                    <div className="details" key={key}>
                        <h3>{value.title}</h3>
                        <p>{value.Value}</p>
                    </div>
                ))
            }
        </div>
    </>
  );
}

export default Contact;
