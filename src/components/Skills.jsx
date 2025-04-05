import React, { useEffect, useState } from 'react';
import './Skills.css';

function Skills() {
  const [listSkills] = useState([
    { name: "HTML", desc: "Strong understanding of semantic HTML5 for building accessible and well-structured web pages.", icon: <i className='bx bxl-html5'></i> },
    { name: "CSS", desc: "Skilled in modern CSS, including Flexbox, Grid, and animations to craft visually appealing designs.", icon: <i className='bx bxl-css3'></i> },
    { name: "JavaScript", desc: "Proficient in vanilla JavaScript with a focus on DOM manipulation and dynamic interactions.", icon: <i className='bx bxl-javascript'></i> },
    { name: "React", desc: "Hands-on experience in building reusable components, hooks, and responsive UIs using React.", icon: <i className='bx bxl-react'></i> },
    { name: "WordPress", desc: "Experience in customizing themes and plugins to build dynamic and user-friendly websites.", icon: <i className='bx bxl-wordpress'></i> },
    { name: "jQuery", desc: "Utilized jQuery for enhancing UI interactions and simplifying JavaScript logic in legacy projects.", icon: <i className='bx bxl-jquery'></i> },
    { name: "Bootstrap", desc: "Built responsive layouts and components efficiently using Bootstrap’s grid system and utilities.", icon: <i className='bx bxl-bootstrap'></i> },
    { name: "Tailwind", desc: "Modern and fast UI development using utility-first Tailwind CSS framework.", icon: <i className='bx bxl-tailwind-css'></i> },
    { name: "CORE PHP", desc: "Solid foundation in PHP for handling backend logic, form handling, and session management.", icon: <i className='bx bxl-php'></i> },
    { name: "CodeIgniter", desc: "Experience in developing lightweight web apps using the MVC architecture of CodeIgniter.", icon:<i className="devicon-codeigniter-plain"></i>
    },
    { name: "Laravel", desc: "Developed full-stack apps using Blade, Eloquent, and routing.", icon:<i className="devicon-laravel-plain"></i>
    },
    { name: "MySQL", desc: "Efficient in writing optimized queries and managing databases using MySQL.", icon: <i className='bx bxs-data'></i> },
  ]);

  const ensureNineItems = (list) => {
    const placeholder = { name: "Coming Soon", desc: "More skills and technologies will be added as I continue learning and growing.", icon: <i className='bx bx-question-mark'></i> };
    while (list.length % 3) {
      list.push(placeholder);
    }
    return list;
  };

  const skillsList = ensureNineItems([...listSkills]);



  return (
    <div className="skills" id="skills">
      
      <div className="title">My Technical Skills</div>
      <div className="desc">
        Over the past year, I’ve explored and worked with a wide range of technologies to build real-world web applications. From frontend development to backend logic and database handling — these are the tools I’ve become confident in.
      </div>
      <div className="list">
        {skillsList.map((value, key) => (
          <div key={key} className='item' style={{ animationDelay: `${key * 0.1}s` }}>
            <div className='card_icon'>{value.icon}</div>
            <h3>{value.name}</h3>
            <div className="des">{value.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
