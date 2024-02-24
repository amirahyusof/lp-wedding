import React from "react";
import aboutImage01 from "../assets/about.jpg";
import aboutImage02 from "../assets/photo.jpg";

function About(){
    return (
        <div className="w-full bg-[#F3D7CA] py-16 px-4"  id="about">
            <h2 className="text-2xl font-bold py-2 md:text-4xl sm:text-3xl">Crafting Timeless Memories: Your Story Behind the Lens</h2>
            <div className="max-w-[1240px] mx-auto px-2 grid grid-cols-2 grid-rows-1" >
            <img className="w-[400px] mx-auto my-4" src={aboutImage01} alt="/" />
            <img className="w-[350px] mx-auto my-4" src={aboutImage02} alt="/" />
            </div>
           

            <div  className="max-w-[1240px] mx-auto text-justify grid md:grid-cols-3">
                <div className="m-4 px-2">
                    <h3 className="text-[#FF407D] text-bold">Unlocking the Essence of Your Love Story</h3>
                    <p>Embark on a journey where every glance, every touch, and every smile narrates a story of love eternal. 
                    Our photography style blends artistry and authenticity, capturing the raw emotions and intricate details that define your special day.</p>
                </div>

                <div className="m-4 px-2">
                    <h3 className="text-[#FF407D] text-bold">From Heart to Lens:</h3>
                    <p>We believe that behind every photograph lies a cherished memory waiting to be unveiled. 
                    Our passion lies in freezing these fleeting moments, immortalizing the essence of your love story with each click of the shutter.</p>
                </div>

                <div className="m-4 px-2">
                    <h3 className="text-[#FF407D] text-bold">Meet the Artist:</h3>
                    <p>With a decade of experience in wedding photography, we can brings a unique blend of creativity and technical expertise to every shoot. 
                    Trained in the art of storytelling through imagery, we has honed a signature style that resonates with couples seeking timeless elegance and emotional depth in their wedding photos.</p>
                </div>
            </div>
            
        </div>

    )
}

export default About;