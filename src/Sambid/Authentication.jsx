import { useState, useEffect } from "react";
import axios from "axios";
import SignUp from "./SignUp";
import SignIn from "./SignIn";

const SIGNUP_URL = "http://localhost:3000/users"; //      for   S I G N     U P     //
const SIGNIN_URL = "http://localhost:3000/login"; //      for   S I G N     I N     //
const PROFILE_URL = "http://localhost:3000/profile"; // check the user token is in the local storage if the user is already logged in

function Authentication() {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");

  ////////////////// User Sign UP
  const signUp = (user) => {
    axios
      .post(
        SIGNUP_URL,
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
      .then((response) => setUser(response.data.user))
      .catch((error) => {
        console.log("Something always has to go Wrong.. ", error); //dont need this for deployment
      });
  };

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
          setUser(result.user);
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
            setUser(result.user);
          }
        })
        .catch((error) => {
          console.log("Something went wrong.. ", error);
        });
    }
  }, []); // someting in the [] as a second argument which could be a dependency for useEffect to rerender? or just save it as a function and call it in every page

  return (
    <>
      <div className="app-container">
        <h1>BarPretender Coming Soon</h1>
        {user ? <h1>Welcome {user.username}</h1> : "Please Sign Up"}
        <SignIn signIn={signIn} error={error} />
        <SignUp signUp={signUp} />
      </div>
    </>
  );
}

export default Authentication;

// class App extends Component {

//   state = {
//     user: {}
//   }

//   render(){
//     <div className='App'>

//     </div>
//   }

// }

// const signUp = (user) => {
//   fetch('http://localhost:3000/users', {
//     method: 'POST',
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//       user:{
//         username: user.username,
//         password: user.password
//       }
//     })
//   })
//   .then(response => response.json())
//   .then(user => setUser({ user }))
// }

/* <div className="app">
  {this.state.user.username ? <h2>Welcome {this.state.user}</h2>
    <SignUp signUp={this.signUp} />
  }
</div> */

// .then(response => response.json())
// .then(result => {
//   if(result.token) {
//     localStorage.setItem('token', result.token)
//     setUser(response.data.result.user)
//   }
// })

// componentsDidMount() {
//   let token = localStorage.getItem('token')
//   if(token){
//     fetch("http:..", {
//       method: "GET",
//       headers: {
//         "Authorization": `Bearer $(token)`
//       }
//     })
//     .then(response => response.json())
//     .then(result => {
//       setUser({result.user})
//     })
//   }
// }

// const componentDidMount = () => { //this function needs to be passed down to the other pages you add to the app. ** To do so you need to create a function called validation which contains everything currently in our component did Mount
//   let token = localStorage.getItem("token");
//   if (token) {
//     axios
//       .get(PROFILE_URL, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       })
//       .then((response) => {
//         const result = response.data;
//         if (result.id) {
//           setUser(result.user);
//         }
//       })
//       .catch((error) => {
//         console.log("Something went wrong.. ", error);
//       });
//   }
// };
