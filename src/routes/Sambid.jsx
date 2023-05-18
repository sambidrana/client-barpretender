import NavBar from "../components/NavBar";
import AuthSignIn from "../Sambid/SignIn/AuthSignIn";
import AuthSignUp from "../Sambid/SignUp/AuthSignUp";
import SignOut from "../Sambid/SignOut/SignOut";
import { useState } from "react";

const Sambid = ( props ) => {

    const [showSignIn, setShowSignIn] = useState(true);

    const _handleToggle = () => {
        setShowSignIn(!showSignIn);

    }

    return (
        <div className="container">
            <NavBar />
            <SignOut />

            <h1>Sambid testing page</h1>

            {showSignIn ? <AuthSignIn handleToggle={_handleToggle} /> : <AuthSignUp handleToggle={_handleToggle} />}
            {/* <AuthSignIn /> */}
            {/* <AuthSignUp /> */}

        </div>
    );
};

export default Sambid;