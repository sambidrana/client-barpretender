import { useState } from "react";
import "../../testcomponents/Login.css";

const Login = (props) => {

  const { signIn, error, handleToggle } = props;

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


  const _handleSubmit = (event) => {
    event.preventDefault();
    signIn({ username, password });
  };

  const _handleUsername = (event) => {
    setUsername(event.target.value);
  };

  const _handlePassword = (event) => {
    setPassword(event.target.value);
  };


  return (
    <div>
      <div className="log_in_form">
        <h1 className="loginh1">Log in</h1>
        <h2 className="loginh2">WELCOME BACK TO BARPRETENDER</h2>

        <form className="login" onSubmit={_handleSubmit}>
          <label htmlFor="username">Username: </label>
          <input
            name="username"
            value={username}
            onChange={_handleUsername}
            required
          />
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={_handlePassword}
          />

          {error ? <p style={{ color: "red" }}> {error} </p> : null}

          <input type="submit" value="Log In" className="submit" />
        </form>

        <div>
          <p>Haven't signed up?</p>
          <input type="submit" value="Sign Up" className="submit" onClick={ handleToggle } ></input>
        </div>
      </div>
    </div>
  );
};

export default Login;
