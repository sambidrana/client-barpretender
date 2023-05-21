import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import AuthSignIn from "../components/SignIn/AuthSignIn";

const SignIn = () => {
    const navigate = useNavigate();

    // navigate to sign up page
    const _handleToggle = () => {
        navigate('/signup');
    };

    // prevent user to access sign in page if it is logged in
    useEffect(() => {
        if (localStorage.getItem("token")) {
            navigate('/');
        };
    }, []); 

    return (
        
        <div className="container">
            <AuthSignIn handleToggle={_handleToggle} />
        </div>
    );
};

export default SignIn;