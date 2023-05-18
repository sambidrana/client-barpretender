import {useNavigate} from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Login from "./Login";

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
        console.log(result)
        if (result.token) {
          localStorage.setItem("token", result.token);
          setUser(result.username);
          console.log(result.username) 
          navigate("/cocktails_list");
        }
      })
      .catch((error) => {
        console.log("Something always has to go Wrong.. ", error); //dont need this for deployment
        setError("Invalid username or password");
      });
  };


  useEffect(() => {
    let token = localStorage.getItem("token");
    console.log(token)
    if (token) {
      axios
        .get(PROFILE_URL, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          const result = response.data;
          console.log(result)
          if (result.id) {
            setUser(result.username);
          }
        })
        .catch((error) => {
          console.log("Something went wrong.. ", error);
        });
    }
  }, []); // someting in the [] as a second argument which could be a dependency for useEffect to rerender? or just save it as a function and call it in every page


  console.log({user})

  return (
    <>
      <div className="app-container">
      <h1>BarPretender Coming Soon</h1>
        {user ? (
          <h1>Welcome {user.username}</h1>
        ) : (
          <h1>Please Sign In</h1>
        )}

          <Login signIn={signIn} error={error} handleToggle={handleToggle} />


      </div>
    </>
  );
}

export default AuthSignIn;

