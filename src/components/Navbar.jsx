import React from "react";
import { RiMenu4Fill} from "react-icons/ri";
import { FaRegWindowClose } from "react-icons/fa";

function Navbar(){
const [nav, setNav] = React.useState(false)

const handleNav=() => {
    setNav(!nav)
}

    return(
        <div className="fixed top-0 left-0 w-full bg-[#FFF8E3] z-50 transition-all duration-1000 h-24 sm:h-20">
            <div className="flex justify-between items-center text-[#E6A4B4] mx-auto px-5 mt-4">
                <h2 className="w-full font-bold text-2xl p-2 sm:mb-14 md:mb-0">EleganceStudio</h2>
                   <ul className="hidden md:flex">
                        <li className="p-2 text-xl hover:underline"> 
                            <a href="#home">Home</a>
                        </li>
                        <li className="p-2 text-xl hover:underline">
                            <a href="#about">About</a>
                        </li>
                        <li className="p-2 text-xl hover:underline">
                            <a href="#service">Services</a>
                        </li>
                        <li className="p-2 text-xl hover:underline">
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>

                <div onClick={handleNav} className="block md:hidden mb-14">
                    <RiMenu4Fill size={30} /> 
                    
                </div>

                <div className= { nav ? "fixed top-0 right-0 w-full h-[50%] bg-[#FFD0EC] transition-opacity opacity-100" : "fixed top-[-100%]" }>
                    <div onClick={handleNav} >
                        <FaRegWindowClose className="fixed text-white" size={30} />
                    </div>
                    <ul className="p-2 uppercase text-white text-center my-0 ">
                        <li className="p-2 text-xl hover:underline mb-8 mt-4"> 
                            <a href="#home">Home</a>
                        </li>
                        <li className="p-2 text-xl hover:underline mb-8">
                            <a href="#about">About</a>
                        </li>
                        <li className="p-2 text-xl hover:underline  mb-8">
                            <a href="#service">Services</a>
                        </li>
                        <li className="p-2 text-xl hover:underline">
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar;