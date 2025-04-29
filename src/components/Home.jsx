import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="container fade-in " id="home">
      <div className="content">
        <h3>MY NAME IS <span>YASH</span></h3>
        <p>
          I'm a passionate and dedicated full-stack developer currently seeking an internship opportunity to apply my skills and grow in a professional environment. I love building creative digital experiences and solving real-world problems with clean, efficient code.
        </p>
        <a target='_blank' href="/assets/YashKumarSharmaResume (2).pdf" download className="download-btn">Download My CV</a>
      </div>


      <div className="card">
        <img src="/assets/profilepic.jpg" alt="Profile" />
        <div className="info">
          <div className="info-item">
            <p>Developer</p>
            <p>Indian</p>
          </div>
          <div className="info-item">
            <p>10/02</p>
            <p>Male</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
