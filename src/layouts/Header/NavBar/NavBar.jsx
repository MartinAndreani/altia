import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="text-white flex justify-center items-center w-full h-full">
      <ul className="flex justify-between items-center gap-20">
        {["Inicio", "Nuestros Servicios", "Nosotros", "Galería", "Contacto"].map(
          (item, index) => (
            <li key={index} className="relative group">
              <Link to={`/${item.toLowerCase().replace(/\s+/g, "")}`} className="relative text-white">
                {item}
                <span className="absolute left-1/2 bottom-[-5px] w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </Link>
            </li>
          )
        )}
      </ul>
    </div>
  );
}

