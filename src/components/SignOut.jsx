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
      <input className="pointer signout-button" type="button" value="Sign Out" onClick={_handleSignOut} />
    </>
  );
};

export default SignOut;
