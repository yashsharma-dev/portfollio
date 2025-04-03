import React, { useState } from 'react'
import './projects.css'
function Projects() {
    const [listProducts]=useState([
        {
            img: "src/assets/Screenshot 2024-10-26 210001.png",
            name:"KickAssAnime",
            desc:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio saepe officiis illum esse laudantium aspernatur, distinctio, eveniet asperiores tenetur libero reiciendis fugiat? Id eveniet, nihil odio tempore a fugiat officia!",
            mission:"To watch anime series",
            language:"HTML,CSS,Javascript,React,Bootstrap"
            
        },
        {
            img:"src/assets/Screenshot 2024-10-26 210816.png" ,
            name:"Omniverse",
            desc:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio saepe officiis illum esse laudantium aspernatur, distinctio, eveniet asperiores tenetur libero reiciendis fugiat? Id eveniet, nihil odio tempore a fugiat officia!",
            mission:"To read manga series",
            language:"HTML,CSS,Javascript,Bootstrap"
        },
        {
            img: "src/assets/Screenshot 2024-10-26 210859.png",
            name:"GameWorld",
            desc:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio saepe officiis illum esse laudantium aspernatur, distinctio, eveniet asperiores tenetur libero reiciendis fugiat? Id eveniet, nihil odio tempore a fugiat officia!",
            mission:"Play game and experience",
            language:"HTML,CSS,Javascript,Bootstrap"
        },
        {
            img: "src/assets/Screenshot 2024-10-26 210923.png" ,
            name:"Villa",
            desc:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio saepe officiis illum esse laudantium aspernatur, distinctio, eveniet asperiores tenetur libero reiciendis fugiat? Id eveniet, nihil odio tempore a fugiat officia!",
            mission:"buy property upto date",
            language:"HTML,CSS,Javascript,Bootstrap"
        },
        {
            img: "src/assets/Screenshot 2024-10-26 210942.png" ,
            name:"Etech",
            desc:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio saepe officiis illum esse laudantium aspernatur, distinctio, eveniet asperiores tenetur libero reiciendis fugiat? Id eveniet, nihil odio tempore a fugiat officia!",
            mission:"Expand knowlodge and gain experience",
            language:"HTML,CSS,Javascript,Bootstrap"
        },
    ])
  return (
    <>
    <div className="projects">
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
                                <i class='bx bxl-codepen'></i>
                                <div className="miss">
                                    <h3>Mission</h3>
                                    <h4>{value.mission}</h4>
                                </div>
                            </div>

                            <div className="language">
                                <i class='bx bx-world'></i>
                                <div className="lang">
                                    <h3>Language</h3>
                                    <h4>{value.language}</h4>
                                </div>
                            </div>
                        </div>

                        <div className="project_img">
                            <img src={value.img} alt="" />
                        </div>
                    </div>
            ))
        }
    </div>
        </>
  )
}

export default Projects