import { useNavigate } from "react-router-dom";
// import { useState } from "react";

const SignOut = () => {
  // const [user, setUser] = useState({});
  const navigate = useNavigate();

  const _handleSignOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("admin");
    // setUser({});
    navigate("/signin");
  };

  return (
    <>
      <img className="pointer signout-icon" src="public/sign_out.png" alt="sign-out" onClick={_handleSignOut}/>
    </>
  );
};

export default SignOut;
