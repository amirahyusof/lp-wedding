import React from "react";

function Service(){
    return(
        <div className="w-full bg-[#F3D7CA] py-20" id="service">
            <h2 className="text-3xl text-bold uppercase text-center">Packages</h2>
            <h2 className="text-xl text-center my-6">We always adapt our services to you</h2>

            <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">

                <div className="w-[300px] md:w-[250px] lg:w-full h-full shadow-2xl bg-[#F5EEE6] flex flex-col p-4 m-auto rounded-2xl  hover:scale-105 duration-300">
                    <h2 className="text-center font-extrabold text-2xl py-8">Silver</h2>
                    <div className="text-center font-medium">
                        <li className="py-2 mx-8">Coverage: Up to 6 hours</li>
                        <li className="py-2 mx-8">One photographer</li>
                        <li className="py-2 mx-8">250 edited high resolution photos</li>
                        <li className="py-2 mx-8">No engagement shoot</li>
                        <li className="py-2 mx-8">No albums</li>
                        <li className="py-2 mx-8">Private online gallery for 6 months</li>
                    </div>
                    <button className="w-[150px] rounded-md font-bold text-xl my-6 mx-auto py-3 border-solid bg-[#E6A4B4] hover:bg-[#e3bcc3]">RM500</button>
                </div>

                <div className="w-[300px] md:w-[250px] lg:w-full shadow-2xl bg-[#F5EEE6] flex flex-col p-4 m-auto rounded-2xl  hover:scale-105 duration-300">
                    <h2 className="text-center font-extrabold text-2xl py-8">Gold</h2>
                    <div className="text-center font-medium">
                        <li className="py-2 mx-8">Coverage: Up to 8 hours</li>
                        <li className="py-2 mx-8">One photographer + assistant</li>
                        <li className="py-2 mx-8">400 edited high resolution photos</li>
                        <li className="py-2 mx-8">1-hour engagement shoot</li>
                        <li className="py-2 mx-8">Custom-designed 20-page album</li>
                        <li className="py-2 mx-8">Private online gallery for 12 months</li>
                        <li className="py-2 mx-8">10% discount on additional services</li>
                    </div>
                    <button className="w-[150px] rounded-md font-bold text-xl my-6 mx-auto py-3 bg-[#E6A4B4] hover:bg-[#e3bcc3]">RM1500</button>
                </div>

                <div className="w-[300px] md:w-[250px] lg:w-full shadow-2xl bg-[#F5EEE6] flex flex-col p-4 m-auto rounded-2xl  hover:scale-105 duration-300">
                    <h2 className="text-center  font-extrabold text-2xl py-8">Diamond</h2>
                    <div className="text-center font-medium">
                        <li className="py-2 mx-8">Coverage: Full day</li>
                        <li className="py-2 mx-8">2 potographer + assistant</li>
                        <li className="py-2 mx-8">600 edited high resolution photos</li>
                        <li className="py-2 mx-8">2-hour engagement shoot</li>                    
                        <li className="py-2 mx-8">2 custom-designed 20-page albums</li>
                        <li className="py-2 mx-8">Private online gallery for 18 months</li>
                        <li className="py-2 mx-8">Complimentary pre-wedding consultation</li>
                    </div>
                    <button className="w-[150px] rounded-md font-bold text-xl my-6 mx-auto py-3 bg-[#E6A4B4] hover:bg-[#e3bcc3]">RM2500</button>
                </div>
            </div>
        </div>
    )
}

export default Service;