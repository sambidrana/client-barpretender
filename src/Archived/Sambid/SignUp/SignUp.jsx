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
  };

  const _handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const _handleCheckbox = (event) => {
    setOverAge(event.target.checked);
  };
  return (
    <div className="sign_in_form">
      <h2>WELCOME TO BARPRETENDER</h2>
      <h1>Sign Up</h1>

      <form onSubmit={_handleSubmit} className="s_i_form">
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          name="username"
          placeholder="JohnWick92"
          value={username}
          required
          onChange={_handleUsername}
        />
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={_handlePassword}
        />
        <label>
          Over 18:
          <input
            type="checkbox"
            name="is_overAge"
            checked={isOverAge}
            onChange={_handleCheckbox}
          />
        </label>
        <input type="submit" value="Sign Up!" className="submit" />
      </form>

      <div>
        <p>Or Sign In?</p>
        <input
          type="submit"
          value="Sign In"
          className="submit"
          onClick={handleToggle}
        ></input>
      </div>
    </div>
  );
};

export default SignUp;
