import React from "react";
import background from "../assets/hero-section.jpg";

function Hero(){
    const bgImg = {background}
    return(
        <div className="bg-cover bg-center text-white" id="home">
            <div className="max-x-[800px] mt-[-96px] w-full h-screen text-center mx-auto flex flex-col justify-center">
                <h1 className="text-4xl font-bold md:text-7xl sm:text-5xl md:py-6">Capturing Timeless Memories of Your Special Day</h1>
                <p className="text-xl p-2">Preserving cherished moments with artful photography, we capture the essence of your love story, ensuring timeless memories of your special day.</p>
            </div>
        </div>
    )
}

export default Hero;