import React from "react";
import './Home.css'
import gojo from '/src/assets/gojo.jpg';

function Home() {
  return (
    <>
      <div class="container">
        {/* <!-- Content Div --> */}
        <div class="content">
          <h3>MY NAME IS <span>YASH</span></h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            exercitationem quisquam eligendi autem. Voluptatem provident aspernatur
            esse quae maxime natus minus. Commodi eum eaque alias libero. Eos numquam
            quo optio!
          </p>
          <a href="#" class="download-btn">Download My CV</a>
        </div>

        {/* <!-- Card Div --> */}
        <div class="card">
          <img src={gojo} alt="Profile Image" />
          <div class="info">
            <div class="info-item">
              <p>Developer</p>
              <p>Indian</p>
            </div>
            <div class="info-item">
              <p>10/02</p>
              <p>Male</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
