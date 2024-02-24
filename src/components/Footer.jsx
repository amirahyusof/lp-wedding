import React from "react";
import { 
    FaFacebookSquare, 
    FaInstagramSquare, 
    FaTwitterSquare

 } from "react-icons/fa";

function Footer(){
    return(
        <div className="w-full mx-auto py-6 px-4 grid grid-cols-3 gap-6 bg-[#FFF8E3]">
            <div className="flex justify-between my-7">
                <FaFacebookSquare size={35} style={{color: '#E6A4B4'}} />
                <FaInstagramSquare size={35} style={{color: '#E6A4B4'}} />
                <FaTwitterSquare size={35} style={{color: '#E6A4B4'}} />
            </div>
            <div className="flex justify-between">
               <p>Email: timelessElegance@studio.com</p>
               <p>Phone No: +604-1234567 </p>
               <p>&copy All right reserved</p>
            </div>

        </div>
    )
}

export default Footer;