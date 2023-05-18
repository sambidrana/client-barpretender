import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import SignIn from "./SignIn";

const SIGNIN_URL = "http://localhost:3000/login"; //      for   S I G N     I N     //
const PROFILE_URL = "http://localhost:3000/profile"; // check the user token is in the local storage if the user is already logged in

function AuthSignIn( props ) {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const {handleToggle} = props;

  ///////////////////////// User Sign In
  const signIn = (user) => {

    axios
      .post(
        SIGNIN_URL,
        {
          user: {
            username: user.username,
            password: user.password,
          },
        },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        const result = response.data;
        if (result.token) {
          localStorage.setItem("token", result.token);
          setUser(result.username);
          if (result.admin) localStorage.setItem("admin", result.admin);
          navigate("/");
        }
      })
      .catch((error) => {
        console.log("Something always has to go Wrong.. ", error); //dont need this for deployment
        setError("Invalid username or password");
      });
  };


  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) {
      axios
        .get(PROFILE_URL, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          const result = response.data;
          if (result.id) {
            setUser(result.username);
          };
        })
        .catch((error) => {
          console.log("Something went wrong.. ", error);
        });
    }
  }, []); // someting in the [] as a second argument which could be a dependency for useEffect to rerender? or just save it as a function and call it in every page


  return (
      <>
        <SignIn signIn={signIn} error={error} handleToggle={handleToggle} />

      </>
  );
};

export default AuthSignIn;

