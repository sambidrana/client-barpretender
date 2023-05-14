import { useState } from "react";
import "./Login.css"

const Login = () => {
    return(
        <div>
            <div className="log_in_form">
                <h1>Log in</h1>
                <h2>WELCOME BACK TO BARPRETENDER</h2>
                <form>
                    <label>Your name</label>
                    <input type="text" autoFocus placeholder="your name" required />
                    <label>Password</label>
                    <input type="text" autoFocus placeholder="password" required />
                    <input type="submit" value="Log In" className="submit" />
                </form>
            </div>
        </div>
    )
}

export default Login
