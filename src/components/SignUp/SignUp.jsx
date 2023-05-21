import { useState } from "react";
import "../../testcomponents/Signup.css";

const SignUp = function (props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isOverAge, setOverAge] = useState(false);
  const { signUp, error, handleToggle } = props;

  const _handleSubmit = (event) => {
    event.preventDefault();
    signUp({ username, password, isOverAge });
  };

  const _handleUsername = (event) => {
    setUsername(event.target.value);
    localStorage.setItem("user", username[0].toUpperCase()+username.slice(1));
  };

  const _handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const _handleCheckbox = (event) => {
    setOverAge(event.target.checked);
  };
  return (
    <div className="log_in_form login-front-color">
      <h1>JOIN US, BARPRETENDER</h1>
      <h2>Sign Up</h2>

      <form onSubmit={_handleSubmit} className="s_i_form">
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          name="username"
          placeholder="JohnWick92"
          value={username}
          required
          onChange={_handleUsername}/>
        <label htmlFor="password">Password: </label>
        <input type="password" name="password" value={password} onChange={_handlePassword} />
        
        <label>
          Are you over 18:
          <input type="checkbox" name="is_overAge" checked={isOverAge} onChange={_handleCheckbox} className="over-18-box" />
        </label>

        {error ? <p style={{ color: "red" }}> {error} </p> : null}

        <input type="submit" value="Sign Up!" className="submit pointer" disabled={!isOverAge}/>
      </form>

      <div>
        <p className="inline">Have an account?</p>
        <p className="inline submit pointer" type="submit" onClick={ handleToggle }>Sign in</p>
      </div>
    </div>
  );
};

export default SignUp;
