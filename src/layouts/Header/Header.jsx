import React, { useState, useEffect, useRef } from 'react';
import './Header.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from './NavBar/NavBar';

const Header = () => {
    const [isHover, setIsHover] = useState(false);
    const [isTouchDevice, setIsTouchDevice] = useState(false);
    const headerRef = useRef(null);

    useEffect(() => {
        const checkTouchDevice = () => {
            setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
        };
        checkTouchDevice();
    }, []);

    useEffect(() => {
        if (!isTouchDevice || !isHover) return;

        const handleTouchOutside = (e) => {
            if (headerRef.current && !headerRef.current.contains(e.target)) {
                setIsHover(false);
            }
        };

        document.addEventListener('touchstart', handleTouchOutside);
        return () => {
            document.removeEventListener('touchstart', handleTouchOutside);
        };
    }, [isHover, isTouchDevice]);

    return (
        <Router>
            <div className='flex justify-center items-end md:items-center fixed top-0 w-full md:h-42 z-50'>
                <header
                    ref={headerRef}
                    className="md:h-42 flex justify-center items-center md:w-[40%] rounded-b-[50%] animated-header"
                    onMouseOver={!isTouchDevice ? () => setIsHover(true) : undefined}
                    onMouseOut={!isTouchDevice ? () => setIsHover(false) : undefined}
                    onClick={isTouchDevice ? () => setIsHover(!isHover) : undefined}
                >
                    <div className={`bg-primary absolute justify-center items-end flex overflow-hidden 
                            transform translate-x-[-50%] left-[50%] z-40 rounded-[45%] h-[390px]  top-[-230px] w-[500px]  ${isHover ? 'invisible' : 'bouncing-box'}`}>
                        <img className="h-[80%] absolute top-[36%] object-cover " src="src/assets/Mesa de trabajo 11 1.svg" alt="" />
                    </div>

                    <div className={`flex items-center md:items-center w-96  md:w-[100%] md:h-[45%] md:rounded-2xl md:p-10 p-5  bg-primary opacity-80  ${isHover ? 'visible fade-in ' : 'invisible'}`}>
                        <NavBar />
                        <Routes>
                            <Route path="/" />
                            <Route path="/servicios" />
                            <Route path="/nosotros" />
                            <Route path="/galeria" />
                            <Route path="/contacto" />
                        </Routes>
                    </div>
                </header>
            </div>
        </Router>
    );
};

export default Header;
