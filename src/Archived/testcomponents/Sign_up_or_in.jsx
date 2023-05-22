import { useState } from "react";
import "./Sign_up_or_in.css";

const Sign_up_or_in = () => {
    return (
        <>
            <div className="signup">
                <h1>WELCOME TO BARPRETENDER</h1>
                <p>please sign up or log in</p>
                <div className="singuporin">
                    <a href="#">Sign Up</a>
                    <a href="#">Log In</a>
                </div>
            </div>
        </>
    )
}

export default Sign_up_or_in