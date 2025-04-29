import React, { useState } from 'react'
import './Projects.css'
function Projects() {
    const [listProducts]=useState([
        {
            img: "/assets/animenebula.png",
            name:"AnimeNebula",
            desc:"Anime Nebula is a sleek and user-friendly web platform built for anime lovers. Developed using React (Frontend) and Laravel (Backend), it provides a smooth and interactive experience for exploring anime series.",
            mission:"Immerse in anime effortlessly.",
            language:"React,Laravel,MySQL,Tailwind",
            link:"https://github.com/yashsharma-dev/Anime/tree/main"
            
        },
        {
            img: "/assets/Etrade.png",
            name:"Etrade",
            desc:"E-Trade is a modern e-commerce platform offering a seamless shopping experience. Browse a wide range of products, enjoy secure transactions, and get fast delivery—all in one place.",
            mission:"Effortless shopping, anytime.",
            language:"HTML,CSS,Javascript,Bootstrap,Laravel,MySQL",
            link:"https://github.com/yashsharma-dev/Etrade/tree/master/Etrade"
        },
        {
            img: "/assets/foodonline.png" ,
            name:"FoodOnline",
            desc:"FoodOnline is a convenient food delivery platform that connects users with their favorite restaurants. Enjoy a wide variety of cuisines, fast deliveries, and a seamless ordering experience.",
            mission:"Delicious food, delivered fast.",
            language:"HTML,CSS,Javascript,Bootstrap,React,Laravel,MySQL",
            link:"https://github.com/yashsharma-dev/FoodOnline"
        },
        {
            img: "/assets/Etech.png" ,
            name:"Etech",
            desc:"A platform dedicated to making learning accessible and engaging. Whether for students or professionals, it provides quality educational content, interactive lessons, and a seamless learning experience.",
            mission:"Empowering learning, effortlessly.",
            language:"HTML,CSS,Javascript,Bootstrap",
            link:"https://github.com/yashsharma-dev/Etech"
        },
        {
            img:"/assets/omniverse.png" ,
            name:"Omniverse",
            desc:"Omniverse is a dedicated platform for reading manga series with a structured release schedule. Stay updated with the latest chapters, explore a vast collection, and enjoy a smooth reading experience.",
            mission:"Experience manga effortlessly.",
            language:"HTML,CSS,Javascript,Bootstrap",
            link:""
        },
    ])
  return (
    <>
    <div className="projects" id="projects">
        <div className="heading">
            <h1>Projects</h1>
            <p>Here are some of my projects</p>
        </div>
           {
               listProducts.map((value,key)=>(
                    <div className="project" key={key}>


                        <div className="project_desc">
                            <h1>{value.name}</h1>
                            <p>{value.desc}</p>

                            <div className="mission">
                                <i className='bx bxl-codepen'></i>
                                <div className="miss">
                                    <h3>Mission</h3>
                                    <h4>{value.mission}</h4>
                                </div>
                            </div>

                            <div className="language">
                                <i className='bx bx-world'></i>
                                <div className="lang">
                                    <h3>Language</h3>
                                    <h4>{value.language}</h4>
                                </div>
                            </div>
                        </div>

                        <div className="project_img">
                            <a target='_blank' href={value.link}>

                            <img src={value.img} alt="" />
                            </a>
                        </div>
                    </div>
            ))
        }
    </div>
        </>
  )
}

export default Projects