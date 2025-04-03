import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";



import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Projects from "./components/Projects";



function App() {
  return (
    <>
   
        <Navbar/>
      <Home/> 
      <Skills/>
      <Projects/>
      <Contact/>
     
    </>
  );
}

export default App;
