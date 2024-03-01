import React from "react";
import Collection from '../assets/collection.jpg';
import Collection01 from '../assets/collection (1).jpg';
import Collection02 from '../assets/collection (2).jpg';
import Collection03 from '../assets/collection (3).jpg';
import Collection04 from '../assets/collection (4).jpg';
import Collection05 from '../assets/collection (5).jpg';
import Collection06 from '../assets/collection (6).jpg';

function Collections(){
    return(
        <div className="w-full bg-[#E6A4B4] py-10" id="collection" >
            <h2 className="text-3xl text-bold text-white uppercase text-center my-8">Collections</h2>
            <div className="max-w-[1240px] mx-auto px-2 grid grid-row-3 gap-6" >
                <div className="grid grid-cols-2 gap-4">
                <img src={Collection} alt="/" />
                <img className="h-[90px] sm:h-[180px] md:h-[190px] lg:h-full w-full" src={Collection01} alt="/" />
                </div>

                <div className="grid grid-cols-3 gap-4">
                <img className="h-[165px] sm:h-[330px] md:h-[350px] lg:h-full" src={Collection02} alt="/" />
                <img src={Collection03} alt="/" />
                <img src={Collection04} alt="/" />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                <img src={Collection05} alt="/" />
                <img src={Collection06} alt="/" />
                </div>
            </div>
        </div>
    )
}

export default Collections;