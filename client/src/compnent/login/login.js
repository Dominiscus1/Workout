import React, {useState} from "react";
import "./login.css";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../../utils/mutations";
import Auth from "../../utils/auth";

function Login(props) {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div class="login-signup">
      <div className="row">
        <div className=".col__2" id="login">
          <h2>Log In</h2>
          <form onSubmit={handleFormSubmit}>
            <div>
              <label for="email">Email</label>
              <br />
              <input
                type="email"
                id="email"
                name="email"
                onChange={handleChange}
              ></input>
            </div>
            <div>
              <label for="password">Password</label>
              <br />
              <input
                type="password"
                id="password"
                name="password"
                onChange={handleChange}
              ></input>
            </div>
            {error ? (
              <div>
                <p className="error-text">Your login details are incorrect</p>
              </div>
            ) : null}
            <br />
            <button className="btn2 pointer" type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
