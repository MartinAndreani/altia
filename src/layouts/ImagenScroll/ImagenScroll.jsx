import { useEffect, useState } from "react";
import  './ImagenScroll.css'

export default function ImageScrollEffect() {
  const [scrollX, setScrollX] = useState(0);
 
  useEffect(() => {
    const handleScroll = () => {
      
      const maxMove = window.innerWidth / 2;
      setScrollX(Math.min(window.scrollY / 0.8, maxMove));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className=" w-full h-full z-0 flex justify-center items-center top-20 fixed ">
      <div>
      <img className="md:h-[60vh] h-[40vh] transition-transform duration-500 ease-out opacity-70"  style={{ transform: `translateX(${scrollX}px)` }} src="src\assets\Mesa de trabajo 3 1.svg" alt="" />
      </div>
    </div>
  );
}
