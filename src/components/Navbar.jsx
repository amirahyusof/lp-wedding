import React from "react";
import { RiMenu4Fill, RiCloseFill } from "react-icons/ri";

function Navbar(){
const [nav, setNav] = React.useState(false)

const handleNav=() => {
    setNav(!nav)
}

    return(
        <div className="flex justify-between items-center max-w-full h-24 sm:h-32 bg-fuchsia-200/50  mx-auto px-5 text-white">
            <h2 className="w-full font-bold text-2xl p-2 sm:mx-auto">EleganceStudio</h2>
            <ul className="hidden md:flex">
                <li className="p-2 text-xl hover:border-b"> 
                    <a href="#home">Home</a>
                </li>
                <li className="p-2 text-xl hover:border-b">
                    <a href="#about">About</a>
                </li>
                <li className="p-2 text-xl hover:border-b">
                    <a href="#services">Services</a>
                </li>
                <li className="p-2 text-xl hover:border-b">
                    <a href="#contact">Contact</a>
                </li>
            </ul>

            <div onClick={handleNav} className="block md:hidden">
                { nav? <RiCloseFill size={30} /> : <RiMenu4Fill size={30} /> }
            </div>

            <div className= {nav? "fixed top-0 h-[30%] w-full border-r bg-[#E6A4B4]" : "fixed top-[-100%] "}>
            <ul className="p-2 uppercase flex">
                <li className="p-2 text-xl hover:border-b"> 
                    <a href="#home">Home</a>
                </li>
                <li className="p-2 text-xl hover:border-b">
                    <a href="#about">About</a>
                </li>
                <li className="p-2 text-xl hover:border-b">
                    <a href="#services">Services</a>
                </li>
                <li className="p-2 text-xl hover:border-b">
                    <a href="#contact">Contact</a>
                </li>
            </ul>

            </div>

        </div>
    )
}

export default Navbar;