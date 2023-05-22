import { useState } from "react";
import "./Signup.css"
import { render } from "react-dom";

const Sign_up = () => {
   
        return (
            <>
                <div className="sign_in_form">
                    <h1>Sign in</h1>
                    <h2>WELCOME TO BARPRETENDER</h2>
                    <p>please sign up</p>
                    <form className="s_i_form">
                        <label>Your name</label>
                        <input type="text" autoFocus placeholder="your name" required />
                        <label>Password</label>
                        <input type="text" autoFocus placeholder="password" required />
                        <label>Password Confirmation</label>
                        <input type="text" autoFocus placeholder="password" required />
                        <input type="submit" value="Sign Up" className="submit" />
                    </form>
                </div>
            </>
        );
    }


export default Sign_up