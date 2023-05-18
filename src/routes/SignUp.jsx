import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import AuthSignUp from "../components/SignUp/AuthSignUp";

const SignUp = () => {
    const navigate = useNavigate();

    // navigate to sign in page
    const _handleToggle = () => {
        navigate('/signin');
    };

    // Prevent user to access sign up page if it is logged in
    useEffect(() => {
        if (localStorage.getItem("token")) {
            navigate('/');
        };
    }, []); 

    return (
        <div className="container">
            <AuthSignUp  handleToggle={_handleToggle} />
        </div>
    );
};

export default SignUp;