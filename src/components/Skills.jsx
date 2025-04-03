import React, { useState } from 'react';
import './Skills.css';

function Skills() {
  const [listSkills] = useState([
    { name: "HTML", desc: "Hello my name is Yash Sharma. I have studied web development for a year, and this is my portfolio.", icon: <i className='bx bxl-html5'></i> },
    { name: "CSS", desc: "Hello my name is Yash Sharma. I have studied web development for a year, and this is my portfolio.", icon: <i className='bx bxl-css3'></i> },
    { name: "JavaScript", desc: "Hello my name is Yash Sharma. I have studied web development for a year, and this is my portfolio.", icon: <i className='bx bxl-javascript'></i> },
    { name: "React", desc: "Hello my name is Yash Sharma. I have studied web development for a year, and this is my portfolio.", icon: <i className='bx bxl-react'></i> },
    { name: "Angular", desc: "Hello my name is Yash Sharma. I have studied web development for a year, and this is my portfolio.", icon: <i className='bx bxl-angular'></i> },
    { name: "WordPress", desc: "Hello my name is Yash Sharma. I have studied web development for a year, and this is my portfolio.", icon: <i className='bx bxl-wordpress'></i> },
    { name: "jQuery", desc: "Hello my name is Yash Sharma. I have studied web development for a year, and this is my portfolio.", icon: <i className='bx bxl-jquery'></i> },
    { name: "Bootstrap", desc: "Hello my name is Yash Sharma. I have studied web development for a year, and this is my portfolio.", icon: <i className='bx bxl-bootstrap'></i> },
    { name: "PHP", desc: "Hello my name is Yash Sharma. I have studied web development for a year, and this is my portfolio.", icon: <i className='bx bxl-php'></i> },
  ]);

  // Ensure the list always has 9 items
  const ensureNineItems = (list) => {
    const placeholder = { name: "Coming Soon", desc: "More skills will be added soon.", icon: <i className='bx bx-question-mark'></i> };
    while (list.length < 9) {
      list.push(placeholder);
    }
    return list;
  };

  const skillsList = ensureNineItems([...listSkills]);

  return (
    <>
      <div className="skills">
        <div className="title">This is my Skills</div>
        <div className="desc">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt, tempora porro quae amet repudiandae dolore voluptates sint dolor distinctio, molestias sapiente ullam to hdj sjgs ksha kahsjh?
        </div>
        <div className="list">
          {skillsList.map((value, key) => (
            <div key={key} className='item'>
              <div className='card_icon'>{value.icon}</div>
              <h3>{value.name}</h3>
              <div className="des">{value.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Skills;