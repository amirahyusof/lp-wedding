import React from "react";
import { 
    FaFacebookSquare, 
    FaInstagramSquare, 
    FaTwitterSquare,
    FaPhoneAlt

 } from "react-icons/fa";
 import { MdOutlineEmail } from "react-icons/md";

function Footer(){
    return(
        <div className="w-full mx-auto py-6 px-4 bg-[rgb(255,248,227)]">
            <div className=" md:grid md:grid-cols-2 md:gap-[15%] my-4">
                <div className="flex justify-between mt-[30px] mx-[20px] lg:mx-[100px]">
                <FaFacebookSquare size={35} style={{color: '#E6A4B4'}} />
                <FaInstagramSquare size={35} style={{color: '#E6A4B4'}} />
                <FaTwitterSquare size={35} style={{color: '#E6A4B4'}} />
                </div>
            
            
                <div className="flex flex-col ml-[20px] mt-2 lg:ml-[20%]">
                    <div className="text-center mt-[10px]">
                        <MdOutlineEmail size={30} style={{color: '#E6A4B4'}} />
                        <p className="mt-[-25px] ml-[-15%] sm:ml-[-50%] md:ml-[-5%] lg:ml-[-50%]">timelessElegance@studio.com</p>
                    </div>
                    <div className="text-center my-4">
                        <FaPhoneAlt size={25} style={{color: '#E6A4B4'}} />
                        <p className="mt-[-20px] ml-[-50%] sm:ml-[-68%] md:ml-[-40%] lg:ml-[-70%]">+604-1234567</p>
                    </div>
                </div>

            </div>
            <p className="text-center">©All right reserved</p>
        </div>
       
    )
}

export default Footer;