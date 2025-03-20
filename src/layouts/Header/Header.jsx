import React from 'react'
import './Header.css'
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from './NavBar/NavBar'


const Header = () => {

    const [isHover,setIsHover] = useState()
    console.log(isHover)
  return (
    <Router>
    <div className='flex justify-center items-center  fixed top-0 w-full h-42 z-50'>
      
      <header className=" h-42 flex justify-center items-center w-[40%]  rounded-b-[50%] animated-header  "   onMouseOver={()=>setIsHover(true)} onMouseOut={()=>setIsHover(false)}>
      
      <div className={`bg-primary  absolute  justify-center items-end flex overflow-hidden  
        transform translate-x-[-50%] left-[50%] z-40    rounded-[45%] h-[390px] top-[-230px] w-[500px] ${isHover ? 'invisible  ': ' bouncing-box  '}`}>

          <img  className={`h-[80%] absolute top-[36%] object-cover `} src="src\assets\Mesa de trabajo 11 1.svg" alt=""  />
      </div>

        <div className={`bg-fuchsia-950 w-[100%] h-[45%] rounded-2xl  flex items-center ${isHover ? 'visible fade-in ' : 'invisible ' } `}  >
          <NavBar/>
          <Routes>
          <Route path="/"  />
          <Route path="/servicios" />
          <Route path="/nosotros" />
          <Route path="/galeria" />
          <Route path="/contacto"/>
        </Routes>
        </div>

   </header>

    </div>
    </Router>
    
    
  )
  
}


export default Header 

