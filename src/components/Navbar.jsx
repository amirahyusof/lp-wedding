import React from "react";

function Navbar(){
    return(
        <div className="flex justify-between items-center max-w-[1240px] h-24 bg-[#FFF8E3] mx-auto px-3">
            <h2 className="w-full font-bold text-2xl text-[#E6A4B4]">EleganceStudio</h2>
            <ul>
                <li>
                    <a href="#home">Home</a>
                </li>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#services">Services</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>

        </div>
    )
}

export default Navbar;