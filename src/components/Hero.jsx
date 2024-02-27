import React from "react";
import heroImage from "../assets/hero.jpg";


function Hero(){

    return(
        <div className="max-w-full text-white mt-[5%]" id="home">
            <div className="bg-cover bg-center max-w-full h-[700px] mt-[-96px] w-full text-center flex flex-col justify-center"
             style={{ backgroundImage: `url(${heroImage})` }} >
                <h1 className="text-4xl font-bold md:text-7xl sm:text-5xl md:py-6">Capturing Timeless Memories of Your Special Day</h1>
                <p className="text-xl p-2 mt-[30px]">Preserving cherished moments with artful photography, we capture the essence of your love story, ensuring timeless memories of your special day.</p>
                <button className="w-[150px] bg-[#F5EEE6] text-l uppercase text-[#E6A4B4] rounded-md my-4 py-2 mx-auto hover:bg-[#F3D7CA] hover:text-white">Book with us</button>
            </div>
        </div>
    )
}

export default Hero;