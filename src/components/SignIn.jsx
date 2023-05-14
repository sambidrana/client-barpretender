import { useState } from "react";

const SignIn = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const _handleSubmit = (event) => {
    event.preventDefault();
    props.signIn({ username, password });
  };

  const _handleUsername = (event) => {
    setUsername(event.target.value);
  };

  const _handlePassword = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div>
      <form onSubmit={ _handleSubmit }>
        <h2>Sign In</h2>
        <label htmlFor="username">Username: </label>
        <input name="username" value={username} onChange={ _handleUsername } required />
        <label htmlFor="password">Password: </label>
        <input type="password" name="password" value={password} onChange={ _handlePassword } />

        {props.error ? <p style={{color: 'red'}} >  {props.error} </p> : null}

        <input type="submit" value="Sign In" />
      </form>
    </div>
  );
};

export default SignIn;
