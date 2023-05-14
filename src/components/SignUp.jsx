import { useState } from "react";

const SignUp = function (props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const _handleSubmit = (event) => {
    event.preventDefault();
    props.signUp({ username, password });
  };

  const _handleUsername = (event) => {
    setUsername(event.target.value);
  };

  const _handlePassword = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className="form-container">
      <form onSubmit={_handleSubmit}>
        <h2>Sign Up</h2>
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

        <input type="submit" value="Sign Up!" />
      </form>
    </div>
  );
};

export default SignUp;

// export default class SignUp extends Component {

//     state = {
//         username: '',
//         password: ''
//     }

//     renders() {
//         return (
//             <form >
//             <h2>Sign Up</h2>
//             <label for="username">Username :</label>
//             <input type="text" name="username" placeholder="JohnWick92" value={this.state.username} required  />
//             <label for="password">Password :</label>
//             <input type="password" name="password" value={this.state.password} />

//             <input type="submit" value="Sign Up!" />

//         </form>
//         )
//     }
// }
