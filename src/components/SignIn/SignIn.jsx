import { useState } from "react";
import "../../css/Login.css";

const SignIn = (props) => {
  const { signIn, error, handleToggle } = props;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const _handleSubmit = (event) => {
    event.preventDefault();
    signIn({ username, password });
    localStorage.setItem("user", username[0].toUpperCase()+username.slice(1));
  };

  const _handleUsername = (event) => {
    setUsername(event.target.value);
  };

  const _handlePassword = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className="log_in_form login-front-color">
      <h1>WELCOME TO BARPRETENDER</h1>

      <h2 className="loginh2">Sign in</h2>

      <form className="s_i_form" onSubmit={_handleSubmit}>
        <label htmlFor="username">Username: </label>
        <input name="username" value={username} onChange={_handleUsername} required />

        <label htmlFor="password">Password: </label>
        <input type="password" name="password" value={password} onChange={_handlePassword} />

        {error ? <p style={{ color: "red" }}> {error} </p> : null}

        <input type="submit" value="Sign In" className="submit" />
      </form>

      <div>
        {/* option for sign up new account */}
        <p className="inline">Don't have an account?</p>
        <p className="inline submit pointer" type="submit" onClick={ handleToggle }>Sign up</p>
      </div>
    </div>

  );
};

export default SignIn;
