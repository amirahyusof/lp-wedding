import React from "react";
import contactImage from '../assets/contact.jpg';

function Contact(){
    return(
        <div className="w-full text-white">
            <div className="flex flex-col lg:flex-row m-auto p-10">
                <img className="w-[380px] lg:w-[500px] mx-auto rounded-3xl" src={contactImage} alt="image" />

                <div className="py-8 text-center mx-auto">
                    <h3 className="text-2xl text-bold uppercase">Love our work?</h3>
                    <p className="py-4">Find out if we're available for you date and get all questions answered.</p>
                    <button className="w-[120px] bg-[#F5EEE6] text-l uppercase text-[#E6A4B4] rounded-md">Contact me</button>
                </div>
            </div>
        </div>
    )
}

export default Contact;