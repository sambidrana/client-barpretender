import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import SignUp from "./SignUp";

const SIGNUP_URL = "http://localhost:3000/users"; //      for   S I G N     U P     //
const PROFILE_URL = "http://localhost:3000/profile"; // check the user token is in the local storage if the user is already logged in

function AuthSignUp(props) {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const {handleToggle} = props;

  ////////////////// User Sign UP
  const signUp = (user) => {
    axios
      .post(
        SIGNUP_URL,
        {
          user: {
            username: user.username,
            password: user.password,
            is_overage: user.isOverAge,
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
          navigate("/");

        }
      })
      .catch((error) => {
        console.log("Something always has to go Wrong.. ", error);
        setError("Username Exists");
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
          }
        })
        .catch((error) => {
          console.log("Something went wrong.. ", error);
        });
    }
  }, []); // someting in the [] as a second argument which could be a dependency for useEffect to rerender? or just save it as a function and call it in every page

  return (
    <>
        <SignUp signUp={signUp} error={error} handleToggle={handleToggle} />
    </>
  );
}

export default AuthSignUp;
