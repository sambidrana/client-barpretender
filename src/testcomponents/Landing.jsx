import { useState } from "react";
import React from "react";
import Sign_up from "./Signup";
import Login from "./Login";
import Sign_up_or_in from "./Sign_up_or_in";
// import "./Landing.css"


const Landing = () => {
    return (
        <div>
            <div className="signin">
               {/* <Sign_up_or_in />  */}
                <Sign_up />
                {/* <Login /> */}
            </div>
        </div>
    );
};

export default Landing
