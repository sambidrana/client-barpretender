import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const SignOut = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  const _handleSignOut = () => {
    localStorage.removeItem("token");
    setUser({});
    navigate("/Sambid");
  };

  return (
    <div>
      <input type="button" value="Sign Out" onClick={_handleSignOut} />
    </div>
  );
};

export default SignOut;
