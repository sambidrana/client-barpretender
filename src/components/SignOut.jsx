import { useNavigate } from "react-router-dom";

const SignOut = () => {
  const navigate = useNavigate();

  const _handleSignOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("admin");
    navigate("/signin");
  };

  return (
    <>
      <img className="pointer signout-icon header-logo" src="public/sign_out.png" alt="sign-out" onClick={_handleSignOut}/>
    </>
  );
};

export default SignOut;
