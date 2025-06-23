import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    const menuItems = ["Inicio", "Servicios", "Nosotros", "Galería", "Contacto"];

    return (
        <nav className="w-full px-4 sm:px-6 py-4 ">
            <ul className="flex flex-col lg:flex-row justify-center items-center gap-4 sm:gap-6 lg:gap-16">
                {menuItems.map((item, index) => (
                    <li key={index} className="group">
                        <Link
                            to={`/${item.toLowerCase().replace(/\s+/g, "")}`}
                            className="text-white font-semibold text-base sm:text-lg lg:text-xl relative transition-all duration-300"
                        >
                            {item}
                            <span className="absolute left-0 bottom-0 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
