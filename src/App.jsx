import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";



import "./App.css";
import Navbar from "./componets/Navbar";
import Home from "./componets/Home";
import Skills from "./componets/Skills";
import Projects from "./componets/Projects";
import Contact from "./componets/Contact";



function App() {
  return (
    <>
   
        <Navbar/>
      <Home/> 
      <Skills/>
      {/* <Projects/> */}
      <Contact/>
     
    </>
  );
}

export default App;
