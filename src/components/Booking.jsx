import React from "react";
import bookImage from "../assets/bookImg.jpg"

function Booking(){
    return(
        <div className="w-full py-12 px-4 bg-white">
            <div className="w-full h-[700px] md:h-[400px] ">
                <h2 className="text-bold text-xl md:text-3xl sm:text-2xl sm:py-2">Create a beautiful memento of your dream wedding</h2>
                <p className="px-2" >Turning real happiness into pictures with us</p>

                <div className="md:grid md:grid-cols-2 md:gap-4">
                    <div className="px-2 py-6 flex flex-col justify-between w-full gap-2">
                      <input className="p-3 lg:w-full rounded-md border-solid border-2" type="text" placeholder="Bride Name" />
                      <input className="p-3 w-full rounded-md border-solid border-2" type="text" placeholder="Groom Name" />
                      <input className="p-3 w-full rounded-md border-solid border-2" type="date" placeholder="Wedding Date" />
                      <input className="p-3 w-full rounded-md border-solid border-2" type="text" placeholder="Wedding Place" />

                      <button className="w-[150px] bg-[#E6A4B4] rounded-md font-medium mx-auto py-3 border-2 shadow-md hover:bg-[#e3bcc3]">Book</button>
                    </div>

                    <img className="mx-auto lg:w-[500px] rounded-xl" src={bookImage}  alt="/" />


                  
                </div>
            </div>
        </div>
    )
}

export default Booking;