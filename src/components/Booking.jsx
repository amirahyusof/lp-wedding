import React from "react";

function Booking(){
    return(
        <div>
            <div>
                <h2>Create a beautiful memento of your dream wedding</h2>
                <p>Turning real happiness into pictures with us</p>

                <div>
                    <form action="">
                        <label htmlFor="">
                            Bride name
                            <input type="text" name="bride name" />
                        </label>

                        <label htmlFor="">
                            Groom name
                            <input type="text" name="groom name" />
                        </label>

                        <label htmlFor="">
                            Wedding date
                            <input type="date" />
                        </label>

                        <label htmlFor="">
                            Wedding location
                            <input type="text" />
                        </label>

                        <input type="submit" value />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Booking;